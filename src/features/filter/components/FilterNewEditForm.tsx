import {useFiltersStore} from "@/features/filter/stores/filters";
import type {Filter} from "@/features/filter/types";
import {handleSelect} from "@/utils/reactHookFormMultiSelectHandler";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import type {SubmitHandler} from "react-hook-form";
import {Controller, useForm} from "react-hook-form";

const FilterNewEditForm = (
  {
    filter
  }: {
    filter?: Filter
  }
) => {
  type Inputs = Omit<Filter, 'id'>;

  const defaultValues = {
    name: '',
    resultsPageURLRegex: '',
    resultsListSelector: '',
    resultSelectorInResultsList: '',
    resultPageURLRegex: '',
    resultIdentifierRegex: '',
    actionOnResultMatchInResultsList: '',
    actionOnResultPageMatch: []
  };

  const {addFilter, updateFilter} = useFiltersStore();

  const {control, formState: {errors}, handleSubmit} = useForm<Inputs>({
    values: filter ?? defaultValues
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (filter) {
      updateFilter(filter.id, data)
    } else {
      addFilter(data);
    }
  }

  return (
    <form className="flex flex-col" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({field}) => {
          return (
            <>
              <FormLabel error={!!errors.name} htmlFor="input-name" required>
                Name
              </FormLabel>
              <TextField
                {...field}
                className="!mb-5"
                error={!!errors.name}
                helperText={errors?.name?.message}
                id="input-name"
                required
              />
            </>
          );
        }}
        rules={{
          maxLength: {
            message: 'Input cannot be longer than 255 characters.',
            value: 255
          },
          required: 'Input is required.'
        }}
      />
      <Controller
        control={control}
        name="resultsPageURLRegex"
        render={({field}) => {
          return (
            <>
              <FormLabel error={!!errors.resultsPageURLRegex} htmlFor="input-results-page-url-regex" required>
                Regex to identify the URL of the results page
              </FormLabel>
              <TextField
                {...field}
                className="!mb-5"
                error={!!errors.resultsPageURLRegex}
                helperText={errors?.resultsPageURLRegex?.message}
                id="input-results-page-url-regex"
                required
              />
            </>
          );
        }}
        rules={{
          maxLength: {
            message: 'Input cannot be longer than 255 characters.',
            value: 255
          },
          required: 'Input is required.'
        }}
      />
      <Controller
        control={control}
        name="resultsListSelector"
        render={({field}) => {
          return (
            <>
              <FormLabel error={!!errors.resultsListSelector} htmlFor="input-results-list-selector" required>
                DOM selector to target the results list element
              </FormLabel>
              <TextField
                {...field}
                className="!mb-5"
                error={!!errors.resultsListSelector}
                helperText={errors?.resultsListSelector?.message}
                id="input-results-list-selector"
                required
              />
            </>
          );
        }}
        rules={{
          maxLength: {
            message: 'Input cannot be longer than 255 characters.',
            value: 255
          },
          required: 'Input is required.'
        }}
      />
      <Controller
        control={control}
        name="resultSelectorInResultsList"
        render={({field}) => {
          return (
            <>
              <FormLabel
                error={!!errors.resultSelectorInResultsList}
                htmlFor="input-result-selector-in-results-list"
                required
              >
                DOM selector to target all result entries in the results list element
              </FormLabel>
              <TextField
                {...field}
                className="!mb-5"
                error={!!errors.resultSelectorInResultsList}
                helperText={errors?.resultSelectorInResultsList?.message}
                id="input-result-selector-in-results-list"
                required
              />
            </>
          );
        }}
        rules={{
          maxLength: {
            message: 'Input cannot be longer than 255 characters.',
            value: 255
          },
          required: 'Input is required.'
        }}
      />
      <Controller
        control={control}
        name="resultPageURLRegex"
        render={({field}) => {
          return (
            <>
              <FormLabel error={!!errors.resultPageURLRegex} htmlFor="input-result-page-url-regex" required>
                Regex to identify the URL of the page of a given result
              </FormLabel>
              <TextField
                {...field}
                className="!mb-5"
                error={!!errors.resultPageURLRegex}
                helperText={errors?.resultPageURLRegex?.message}
                id="input-result-page-url-regex"
                required
              />
            </>
          );
        }}
        rules={{
          maxLength: {
            message: 'Input cannot be longer than 255 characters.',
            value: 255
          },
          required: 'Input is required.'
        }}
      />
      <Controller
        control={control}
        name="resultIdentifierRegex"
        render={({field}) => {
          return (
            <>
              <FormLabel error={!!errors.resultIdentifierRegex} htmlFor="input-result-identifier-regex" required>
                Regex to extract the identifier of a given result
              </FormLabel>
              <TextField
                {...field}
                className="!mb-5"
                error={!!errors.resultIdentifierRegex}
                helperText={errors?.resultIdentifierRegex?.message}
                id="input-result-identifier-regex"
                required
              />
            </>
          );
        }}
        rules={{
          maxLength: {
            message: 'Input cannot be longer than 255 characters.',
            value: 255
          },
          required: 'Input is required.'
        }}
      />
      <Controller
        control={control}
        name="actionOnResultMatchInResultsList"
        render={({field}) => {
          return (
            <FormControl className="!mb-5" error={!!errors.actionOnResultMatchInResultsList} required>
              <FormLabel
                error={!!errors.actionOnResultMatchInResultsList}
                htmlFor="select-action-on-result-match-in-results-list"
                required
              >
                What to do when an already clicked match is found in the results list
              </FormLabel>
              <Select
                {...field}
                error={!!errors.actionOnResultMatchInResultsList}
                id="select-action-on-result-match-in-results-list"
                required
              >
                <MenuItem value={'translucent'}>Make translucent</MenuItem>
                <MenuItem value={'hide'}>Hide</MenuItem>
              </Select>
              {!!errors.actionOnResultMatchInResultsList &&
                  <FormHelperText error={true}>{errors?.actionOnResultMatchInResultsList?.message}</FormHelperText>
              }
            </FormControl>
          );
        }}
        rules={{
          required: 'Choose one action.'
        }}
      />
      <Controller
        control={control}
        name="actionOnResultPageMatch"
        render={({field}) => (
          <FormControl className="!mb-5" error={!!errors.actionOnResultPageMatch} required>
            <FormLabel id="label-action-on-result-page-match" required>
              What to do when the page of an already clicked match is visited
            </FormLabel>
            <FormGroup aria-labelledby="label-action-on-result-page-match">
              {
                [
                  {
                    label: 'Add a banner',
                    value: 'banner'
                  },
                  {
                    label: 'Make content translucent',
                    value: 'translucent'
                  }
                ].map(item => {
                  const {value, label} = item;
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value?.includes(value)}
                          onChange={() =>
                            field.onChange(handleSelect(value, field.value))
                          }
                          size="small"
                        />
                      }
                      key={value}
                      label={label}
                    />
                  );
                })
              }
              {!!errors.actionOnResultPageMatch &&
                  <FormHelperText>{errors?.actionOnResultPageMatch?.message}</FormHelperText>
              }
            </FormGroup>
          </FormControl>
        )}
        rules={{
          required: 'Choose at least one action.'
        }}
      />
      <Button className="bg-blue" type="submit" variant="contained">Create</Button>
    </form>
  );
}

FilterNewEditForm.propTypes = {};

export {
  FilterNewEditForm
};
