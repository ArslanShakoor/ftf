import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import renderForm from '../utils/form/renderForm';
import customFields from './customField';
import field from '../utils/form/field';
import * as actions from '../../actions';
import validate from './stockValidate';
import './stock.css';
import _ from 'lodash';
class AddValue extends Component {
  add = values => {
    this.props.addNewRecord(values, this.props.history);
  };

  form1 = handleSubmit => {
    return (
      <form onSubmit={handleSubmit(this.add.bind(this))}>
        <div>{renderForm(customFields)}</div>
        <div className="btn-new-div">
          <button
            type="submit"
            className="btn btn-lg btn-success pull-right btn-pad"
          >
            Add
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
          <h1>New Stock Value</h1>
          {this.form1(handleSubmit)}
        </div>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: 'newTick'
})(connect(null, actions)(AddValue));
