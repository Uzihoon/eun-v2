import { ConvertorPage } from '~app/pages';
import { CONVERTOR } from '~env/constants';

import { Route } from './type';

const route: Route = {
  path: CONVERTOR.PATH,
  pageId: CONVERTOR.PAGE_ID,
  element: ConvertorPage,
};

export default route;
