const handleSelect = (nameChecked: string, values: string[] = []) => {
  return values?.includes(nameChecked)
    ? values?.filter((name) => name !== nameChecked)
    : [...values, nameChecked];
}

export {
  handleSelect
};
