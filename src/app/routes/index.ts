import { Route } from './type';

import analyzer from './analyzer';
import convertor from './convertor';
import indel from './indel';
import report from './report';

const routes: Route[] = [analyzer, convertor, indel, report];

export default routes;
