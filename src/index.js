import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { Button } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Header />
      <Button type="primary">Start with Project</Button>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
