import axios from 'axios';
import { FETCH_STOCK } from './types';

// async await syntax

export const addNewRecord = (values, history) => async dispatch => {
  console.log(values);
  const res = await axios.post(`/api/newrecord/`, values);
  history.push('/');
  dispatch({ type: FETCH_STOCK, payload: res });
};

export const addTicker = (values, history) => async dispatch => {
  console.log(values);
  const res = await axios.post(`/api/ticker/`, values);
  history.push('/');
  dispatch({ type: FETCH_STOCK, payload: res });
};

export const fetchOneStock = values => async dispatch => {
  console.log(values);
  const res = await axios.get(`/api/one_stock/${values.date}/${values.ticker}`);
  console.log(res);
  dispatch({ type: FETCH_STOCK, payload: res });
};

export const fetchTwoStock = values => async dispatch => {
  console.log(values);
  const res = await axios.get(
    `/api/list_stock/${values.start_date}/${values.end_date}/${values.ticker1}`
  );

  dispatch({ type: FETCH_STOCK, payload: res });
};

export const fetchListStock = values => async dispatch => {
  console.log(values);
  console.log('list_stock');
  const res = await axios.get(
    `/api/list_stock/${values.start_date1}/${values.end_date1}/${values.ticker2}`
  );

  dispatch({ type: FETCH_STOCK, payload: res });
};
