export interface Item {
  component: React.FC<any>;
  path: string;
  title: string;
  exact?: boolean;
  rootURL?: boolean;
}

export interface Route {
  pageId: string;
  title: string;
  items: Item[];
}
