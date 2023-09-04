import Analysis from '~pages/Analysis';
import { ANALYSIS } from '~constants/page';

import { Route, Item } from './type';

const items: Item[] = [
  {
    path: '/',
    component: Analysis,
    title: ANALYSIS.TITLE_ID,
    exact: true,
    rootURL: true,
  },
];

const route: Route = {
  pageId: ANALYSIS.PAGE_ID,
  title: ANALYSIS.TITLE_ID,
  items,
};

export default route;
