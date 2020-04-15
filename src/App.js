import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Menu from './Components/pages/Menu';
import Contact from './Components/pages/Contact';
import NoMatch from './Components/pages/NoMatch';
import Cart from './Components/pages/Cart'
import SignUpForm from './Components/pages/SignUpForm';
import SignInForm from './Components/pages/SignInForm';
import FoodForm from './Components/pages/FoodForm'
import Payment from './Components/pages/Payment'

import Layout from './Components/Layout';
import { NavigationBar } from './Components/NavigationBar';
import { Jumbotron } from './Components/Jumbotron';
//import UmerPage from './Components/pages/Forms/umerPage';
import FoodItem from './Components/pages/FoodItem';
import AdminItem from '../src/Components/AdminComponent/AdminFoodList';
import EditPage from '../src/Components/pages/EditPage';

import './App.css';


class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Router>
        <NavigationBar />
        <Jumbotron/>
        <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/menu' component={Menu} />
              <Route path='/items' component={AdminItem} />
              <Route path='/contact' component={Contact} />
              <Route path='/fooditem/:id' component={FoodItem} />
              <Route path='/form' component={FoodForm} />
              <Route path ='/cart' component = {Cart}/>
              <Route path='/signin' component={SignInForm}/>
              <Route exact path='/signup' component={SignUpForm} />
              {/* <Route path="/payment"component={Payment}/> */}
              <Route path="/edit/:id"component={EditPage}/>
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          </Router>
      </React.Fragment>

    );
  }
}


export default App;
