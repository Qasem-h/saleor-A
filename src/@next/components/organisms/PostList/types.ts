import { IPost } from "@types";

export interface IProps {
  posts: IPost[];
  canLoadMore?: boolean;
  loading?: boolean;
  onLoadMore?: () => void;
  /**
   * Used as marker for writing e2e tests. Use unique ID to differentiate
   * multiple elements in the same view from each other
   */
  testingContextId?: string;
}
