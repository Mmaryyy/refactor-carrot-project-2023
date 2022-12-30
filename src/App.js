import './styles/variable.css';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment } from 'react';
import Join from './components/Join'

function App() {
  return (
    <Fragment>
      <GlobalStyle /> 
      <Join/>
    </Fragment>
  );
}

export default App;
