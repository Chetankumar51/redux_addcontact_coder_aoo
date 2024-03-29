import { Provider } from 'react-redux';
import Contact from './components/contacts/Contact';
import Navbar from './components/elements/Navbar';
import store from './store';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';


function App() {
  return (
    <Provider store={store} >
    <Router>
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="py-3">
          <Switch>
            <Route exact path="/" component={Contact} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
