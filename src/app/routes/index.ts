import { Route } from './type';

import analysis from './analysis';
import convertor from './convertor';
import indel from './indel';
import report from './report';

const routes: Route[] = [analysis, convertor, indel, report];

export default routes;
