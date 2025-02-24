import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GdBotao } from '../.';

const App = () => {
  return (
    <div>
      <GdBotao />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
