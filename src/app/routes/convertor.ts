import { ConvertorPage } from '~app/pages';
import { CONVERTOR } from '~env/constants';

import { Route } from './type';

const route: Route = {
  path: CONVERTOR.PATH,
  pageId: CONVERTOR.PAGE_ID,
  title: CONVERTOR.TITLE_ID,
  element: ConvertorPage,
  isVisible: true,
};

export default route;
