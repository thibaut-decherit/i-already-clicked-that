const isWebExtensionEnv = () => {
  return !!window.browser;
}

export {
  isWebExtensionEnv
};
