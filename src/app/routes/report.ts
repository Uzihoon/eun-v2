import { ReportPage } from '~app/pages';
import { REPORT } from '~env/constants';

import { Route } from './type';

const route: Route = {
  path: REPORT.PATH,
  pageId: REPORT.PAGE_ID,
  title: REPORT.TITLE_ID,
  element: ReportPage,
};

export default route;
