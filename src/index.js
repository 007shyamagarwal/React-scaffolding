import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
