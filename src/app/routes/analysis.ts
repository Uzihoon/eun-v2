import { AnalysisPage } from '~app/pages';
import { ANALYSIS } from '~env/constants';

import { Route } from './type';

const route: Route = {
  path: ANALYSIS.PATH,
  pageId: ANALYSIS.PAGE_ID,
  element: AnalysisPage,
};

export default route;
