import type {Filter} from "@/features/filter/types";
import {nanoid} from "nanoid";
import {create} from "zustand";
import {persist} from "zustand/middleware";
import _ from "lodash";

type FiltersStore = {
  addFilter: (filter: Omit<Filter, 'id'>) => void;
  filters: Filter[];
  removeFilter: (id: string) => void;
  updateFilter: (id: string, updatedFilter: Omit<Filter, 'id'>) => void;
};

const useFiltersStore = create<FiltersStore, [['zustand/persist', unknown]]>(
  persist(
    set => ({
      addFilter: (filter) => {
        set((state) => ({
          filters: [..._.cloneDeep(state.filters), {id: nanoid(), ...(_.cloneDeep(filter))}]
        }));
      },
      filters: [],
      removeFilter: (id) => {
        set((state) => ({
          filters: state.filters.filter((filter: Filter) => filter.id !== id)
        }));
      },
      updateFilter: (id, updatedFilter) => {
        set((state) => {
          const updatedFilters = state.filters.map(originalFilter => {
            if (originalFilter.id === id) {
              return {..._.cloneDeep(updatedFilter), id};
            }

            return originalFilter;
          });

          return {
            filters: updatedFilters
          }
        });
      }
    }),
    {
      name: 'filters'
    }
  )
);

export {
  useFiltersStore
};
