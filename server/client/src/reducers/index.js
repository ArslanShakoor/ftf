import { combineReducers } from 'redux';
import stockReducer from './stockReducer';

import { reducer as reduxForm } from 'redux-form';
export default combineReducers({
  form: reduxForm,
  stock: stockReducer
});
