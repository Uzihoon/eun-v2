export interface Route {
  element: React.FC<any>;
  title: string;
  pageId: string;
  path: string;
  index?: boolean;
  isVisible: boolean;
}
