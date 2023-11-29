export type Filter = {
  id: string;
  name: string,
  resultsPageURLRegex: string,
  resultsListSelector: string,
  resultSelectorInResultsList: string,
  resultPageURLRegex: string,
  resultIdentifierRegex: string,
  actionOnResultMatchInResultsList: string,
  actionOnResultPageMatch: string[]
};
