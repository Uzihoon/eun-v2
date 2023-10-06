import { Route } from './type';

import analyzer from './analyzer';
import convertor from './convertor';
import indel from './indel';
import report from './report';
import reportDetail from './reportDetail';

// const routes: Route[] = [analyzer, convertor, indel, report, reportDetail];
const routes: Route[] = [analyzer, reportDetail];

export default routes;
