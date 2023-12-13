import type {StorageValue} from "zustand/esm/middleware";

const storage = {
  getItem: (name: string): Promise<StorageValue<unknown>> => {
    /*
    browser.storage.local.get() is not a generic function, so we cannot specify its return type, which is
    Promise<{[p: string]: any}>. But zustand expects Promise<{ state: unknown, version?: number }>, so we create a
    default object matching the expected type, then we will merge it with the object retrieved from storage, which
    will overwrite the default data.
     */
    const defaultData: { state: unknown, version: number } = {
      state: null,
      version: 0
    };

    return new Promise((resolve, reject) => {
      browser.storage.local.get(name)
        .then((existingData) => {
          /*
          existingData[name] instead of existingData because browser.storage.local.get(key) returns the data matching
          key in an object of shape {[key]: data} instead of returning the data directly.
           */
          existingData = JSON.parse(existingData[name])
          resolve({...defaultData, ...existingData});
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  removeItem: (name: string) => {
    return browser.storage.local.remove(name);
  },
  setItem: (name: string, value: unknown) => {
    return browser.storage.local.set({[name]: JSON.stringify(value)});
  }
}

export {
  storage
};
