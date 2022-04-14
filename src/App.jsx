import { AppShell, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Header from './header';
import Home from './pages/home';
import Trending from './pages/trending';
import { store } from './redux/store';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home',
  },
  {
    path: '/trending',
    component: Trending,
    name: 'Trending',
  },
];

function App() {
  const [colorScheme, setColorScheme] = useState('light');

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <Provider store={store}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }}>
          <Router>
            <AppShell
              padding="md"
              navbar={<Navbar />}
              header={<Header />}
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
              })}
            >
              <div className="App">
                <Switch>
                  {routes.map((route) => (
                    <Route key={route.path} {...route} />
                  ))}
                </Switch>
              </div>
            </AppShell>
          </Router>
        </MantineProvider>
      </ColorSchemeProvider>
    </Provider>
  );
}

export default App;
