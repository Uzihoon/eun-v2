import { Helmet } from 'react-helmet-async';
import { getTitle } from '../utilities';

function MainPage() {
  return (
    <>
      <Helmet>
        <title>{getTitle('Analysis')}</title>
      </Helmet>
    </>
  );
}

export default MainPage;
