import React, { Component } from 'react';
import ReactTable from 'react-table';
import columns from './tableHeader'
import 'react-table/react-table.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import renderForm from '../utils/form/renderForm';
import stockFields from './stockFields';
import graph from './graph';
import field from '../utils/form/field';
import * as actions from '../../actions';
import './stock.css';
import _ from 'lodash';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: null,
      two: null,
      list: null
    };
  }

  onCreatePost = values => {
    this.props.fetchOneStock(values);
    this.setState({ two: false, list: false, one: true });
  };
  twoStock = values => {
    this.props.fetchTwoStock(values);
    this.setState({ one: false, list: false, two: true });
  };
  listStock = values => {
    this.props.fetchListStock(values);
    this.setState({ one: false, two: false, list: true });
  };

  form1 = handleSubmit => {
    return (
      <form onSubmit={handleSubmit(this.onCreatePost.bind(this))}>
        <div>{renderForm(stockFields.slice(0, 2))}</div>
        <div className="btn-new-div">
          <button
            type="submit"
            className="btn btn-lg btn-success pull-right btn-pad"
          >
            Inquiry
          </button>
        </div>
      </form>
    );
  };

  form2 = handleSubmit => {
    return (
      <form onSubmit={handleSubmit(this.twoStock.bind(this))}>
        <div>{renderForm(stockFields.slice(2, 5))}</div>
        <div className="btn-new-div">
          <button
            type="submit"
            className="btn btn-lg btn-success pull-right btn-pad"
          >
            Inquiry
          </button>
        </div>
      </form>
    );
  };

  form3 = handleSubmit => {
    return (
      <form onSubmit={handleSubmit(this.listStock.bind(this))}>
        <div>{renderForm(stockFields.slice(5, 8))}</div>
        <div className="btn-new-div">
          <button
            type="submit"
            className="btn btn-lg btn-success pull-right btn-pad"
          >
            Inquiry
          </button>
        </div>
      </form>
    );
  };

  firstAndLast = arr => {
    if (arr != null && arr.length > 0) {
      return [arr[0], arr[arr.length - 1]]; //No need for new Array(), and you can just assign items in positions inline
    }
    return null;
  };
  firstTen = arr => {
    if (arr) {
      return arr.slice(0, 10);
    }
  };

  renderForm1 = (stocks, columns, rows) => {
    console.log(stocks);
    if (stocks == null || stocks.length < 1) {
      return null;
    }
    return (
      <div>

        {graph(stocks)}
        <ReactTable data={stocks} columns={columns} defaultPageSize={rows} />

      </div>
    );
  };

  render() {
   
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="stock-section">
          <h1>CHECK STOCK OF ANY DATE</h1>
          {this.form1(handleSubmit)}
          <div className="result-table">
            {this.state.one
              ? this.renderForm1(this.props.stock, columns, 1)
              : null}
          </div>
        </div>
        <div className="stock-section">
          <h1> CHECK DIFFERENCE BETWEEN TWO DATES</h1>
          {this.form2(handleSubmit)}
          <div className="result-table">
            {this.state.two
              ? this.renderForm1(
                  this.firstAndLast(this.props.stock),
                  columns,
                  2
                )
              : null}
          </div>
        </div>
        <div className="stock-section">
          <h1> CHECK LAST 10 CHANGES BETWEEN TWO DATES</h1>
          {this.form3(handleSubmit)}
          <div className='linear-graph'/>
          <div className="result-table">
            {this.state.list
              ? this.renderForm1(this.firstTen(this.props.stock), columns, 10)
              : null}
          </div>

        </div>
      </div>
    );
  }
}
function mapStateToProps({ stock }) {
  return {
    stock
  };
}

export default reduxForm({
  form: 'firstInquiry'
})(connect(mapStateToProps, actions)(Main));
