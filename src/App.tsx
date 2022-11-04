import { Header } from './components/0-menu';
import { ContentContainer } from './components/modulos/ContentContainer';
import { AppContainer, GlobalStyle } from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom'
import { AppDisplay } from './pages/routes';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <AppDisplay />
      </AppContainer>
    </BrowserRouter>

  );
}


export default App;
