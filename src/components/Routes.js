import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/quotes" component={Quote} />
      <Route path="/home" component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
