import { AnalysisPage } from '~app/pages';
import { ANALYSIS } from '~env/constants';

import { Route } from './type';

const route: Route = {
  pageId: ANALYSIS.PAGE_ID,
  element: AnalysisPage,
  index: true,
};

export default route;
