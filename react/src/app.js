import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import MealsContainer from './containers/MealsContainer'
import MealFormContainer from './containers/MealFormContainer';

const App = props => {
  return(
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={MealsContainer}/>
      <Route path='meals' component={MealsContainer} />
      <Route path='meals/new' component={MealFormContainer} />
    </Route>
  </Router>
  )
}

export default App;
