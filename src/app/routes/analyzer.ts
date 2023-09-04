import { AnalyzerPage } from '~app/pages';
import { ANALYZER } from '~env/constants';

import { Route } from './type';

const route: Route = {
  pageId: ANALYZER.PAGE_ID,
  path: ANALYZER.PATH,
  title: ANALYZER.TITLE_ID,
  element: AnalyzerPage,
  index: true,
};

export default route;
