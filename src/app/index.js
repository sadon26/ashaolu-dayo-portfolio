import Routes from '../routes';
import { PageLoader } from 'components';
import React, { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes />
    </Suspense>
  );
}

export default App;
