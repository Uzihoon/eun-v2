export interface Route {
  element: React.FC<any>;
  pageId: string;
  path?: string;
  index?: boolean;
}
