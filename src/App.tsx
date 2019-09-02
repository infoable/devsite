import React from 'react';
import { Route } from 'react-router-dom'
import loadable from '@loadable/component';
import Layout from './components/Layout';

const IndexPage = loadable(() => import('./pages/Index'));
const App: React.FC = () => {
  return (
    <Layout>
      <Route exact path="/" component={IndexPage}></Route>
    </Layout>
  );
}

export default App;
