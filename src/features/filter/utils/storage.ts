const storage = {
  get: (): object[] => {
    const existingData = localStorage.getItem('filters');

    if (existingData === null) {
      return [];
    }

    return JSON.parse(existingData);
  },
  set: (filters: object[]) => {
    localStorage.setItem('filters', JSON.stringify(filters));
  }
}

export {
  storage
};
