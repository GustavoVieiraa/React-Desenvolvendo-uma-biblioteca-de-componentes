import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GdBotao } from '../.';
import { Card } from '../src/Components/Card/';

const App = () => {
  return (
    <div>
      <GdBotao />
      <Card children />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
