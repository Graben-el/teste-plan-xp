import { Header } from './components/0-menu';
import { ContentContainer } from './components/modulos/ContentContainer';
import { AppContainer, GlobalStyle } from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom'
import { Element, Events, scroller } from 'react-scroll';




function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <ContentContainer />
      </AppContainer>
    </BrowserRouter>

  );
}


export default App;
