import React from 'react';
import { Route } from 'react-router-dom'
import loadable from '@loadable/component';

const IndexPage = loadable(() => import('./pages/Index'));
const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={IndexPage}></Route>
    </div>
  );
}

export default App;
