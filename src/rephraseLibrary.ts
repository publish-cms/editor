export interface IRephraseLibraryConfig {
  getRephrase: (text: string) => Promise<string>;
  onError?: (errorMessage: string) => void;
  onLoading?: (isLoading: boolean) => void;
  activeElements?: string[];
}
