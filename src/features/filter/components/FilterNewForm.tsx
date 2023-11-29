import {useFiltersStore} from "@/features/filter/stores/filters";
import type {Filter} from "@/features/filter/types";
import {handleSelect} from "@/utils/reactHookFormMultiSelectHandler";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText, FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import type {SubmitHandler} from "react-hook-form";

const FilterNewForm = (
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
            <TextField
              {...field}
              className="!mb-5"
              error={!!errors.name}
              helperText={errors?.name?.message}
              label="Name"
              required
              variant="outlined"
            />
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
            <TextField
              {...field}
              className="!mb-5"
              error={!!errors.resultsPageURLRegex}
              helperText={errors?.resultsPageURLRegex?.message}
              label="Regex to identify the URL of the results page"
              required
              variant="outlined"
            />
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
            <TextField
              {...field}
              className="!mb-5"
              error={!!errors.resultsListSelector}
              helperText={errors?.resultsListSelector?.message}
              label="DOM selector to target the results list element"
              required
              variant="outlined"
            />
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
            <TextField
              {...field}
              className="!mb-5"
              error={!!errors.resultSelectorInResultsList}
              helperText={errors?.resultSelectorInResultsList?.message}
              label="DOM selector to target all result entries in the results list element"
              required
              variant="outlined"
            />
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
            <TextField
              {...field}
              className="!mb-5"
              error={!!errors.resultPageURLRegex}
              helperText={errors?.resultPageURLRegex?.message}
              label="Regex to identify the URL of the page of a given result"
              required
              variant="outlined"
            />
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
            <TextField
              {...field}
              className="!mb-5"
              error={!!errors.resultIdentifierRegex}
              helperText={errors?.resultIdentifierRegex?.message}
              label="Regex to extract the identifier of a given result"
              required
              variant="outlined"
            />
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
            <FormControl className="!mb-5" error={!!errors.actionOnResultMatchInResultsList} variant="outlined">
              <InputLabel id="select-action-on-result-match-in-results-list">
                What to do when an already clicked match is found in the results list
              </InputLabel>
              <Select
                {...field}
                label="What to do when an already clicked match is found in the results list"
                labelId="select-action-on-result-match-in-results-list"
                required
                variant="outlined"
              >
                <MenuItem value={'translucent'}>Make translucent</MenuItem>
                <MenuItem value={'hide'}>Hide</MenuItem>
              </Select>
              {!!errors.actionOnResultMatchInResultsList &&
                  <FormHelperText>{errors?.actionOnResultMatchInResultsList?.message}</FormHelperText>
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
          <FormControl className="!mb-5" error={!!errors.actionOnResultPageMatch}>
            <FormLabel id="checkboxes-action-on-result-page-match">
              What to do when the page of an already clicked match is visited
            </FormLabel>
            <FormGroup aria-labelledby="checkboxes-action-on-result-page-match">
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

FilterNewForm.propTypes = {};

export {
  FilterNewForm
};
