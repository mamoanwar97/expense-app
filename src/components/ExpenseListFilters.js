import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setSortByAmount, setSortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datePicker.css';

class ExpenseListFilters extends React.Component{
  state = {
    callenderfocused: null,
  };
  onDateChange = ({ startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChange = (callenderfocused) => {
    this.setState(()=>({callenderfocused}));
  }
  render(){
    return (

        <div>
          <input type="text" value ={this.props.filters.text} onChange ={(e) => this.props.dispatch(setTextFilter(e.target.value))}/>

          <select value ={this.props.filters.sortBy} onChange ={(e) => (e.target.value === 'date')? this.props.dispatch(setSortByDate()):this.props.dispatch(setSortByAmount())}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>

          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate = {this.props.filters.endDate}
            onDatesChange= {this.onDateChange}
            focusedInput ={this.state.callenderfocused}
            onFocusChange = {this.onFocusChange}
            showClearDates = {true}
            numberOfMonths={1}
            isOutsideRange={() => (false )}
            />
        </div>
    )
  }
}


const mapStateToprops = (state) => {
  return {
    filters: state.filters
  }
}
export default connect(mapStateToprops)(ExpenseListFilters);
