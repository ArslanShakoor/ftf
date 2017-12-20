import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import renderForm from '../utils/form/renderForm';
import tickerFields from './tickerField';
import field from '../utils/form/field';
import * as actions from '../../actions';
import './stock.css';
import _ from 'lodash';
class NewTicker extends Component {
  addTick = values => {
    this.props.addTicker(values, this.props.history);
  };

  form1 = handleSubmit => {
    return (
      <form onSubmit={handleSubmit(this.addTick.bind(this))}>
        <div>{renderForm(tickerFields)}</div>
        <div className="btn-new-div">
          <button
            type="submit"
            className="btn btn-lg btn-success pull-right btn-pad"
          >
            Create New Ticker
          </button>
        </div>
      </form>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="stock-section">
          <h1>Add New Ticker</h1>
          {this.form1(handleSubmit)}
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newTick'
})(connect(null, actions)(NewTicker));
