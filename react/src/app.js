import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import MealsContainer from './containers/MealsContainer';
import MealsShowContainer from './containers/MealsShowContainer'
import MealFormContainer from './containers/MealFormContainer';
import ItemFormContainer from './containers/ItemFormContainer';

const App = props => {
  return(
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={MealsContainer}/>
      <Route path='meals/:id' component={MealsShowContainer} />
      <Route path='meals/new' component={MealFormContainer} />
      <Route path='meals/:meal_id/items/new' component={ItemFormContainer}/>
    </Route>
  </Router>
  )
}

export default App;
