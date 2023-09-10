import { IndelPage } from '~app/pages';
import { INDEL } from '~env/constants';

import { Route } from './type';

const route: Route = {
  path: INDEL.PATH,
  pageId: INDEL.PAGE_ID,
  title: INDEL.TITLE_ID,
  element: IndelPage,
  isVisible: true,
};

export default route;
