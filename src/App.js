import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import Pcs from './components/Pcs';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/about" component={About} />
      {/* <Route path="/about" render={(props) => <About {...props} />}/> */}
      {/* <Route path='/about'>
        <About />
      </Route>  Bad practice*/}
      <Route path="/products/books" component={Pcs} />
      <Route path="/products" component={Products} />
      <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
