const setDocumentTitle = (title = '', baseTitle = 'I Already Clicked That') => {
  let fullTitle = baseTitle;

  if (title !== '') {
    fullTitle = title + ' | ' + baseTitle;
  }

  document.title = fullTitle;
}

export {
  setDocumentTitle
};
