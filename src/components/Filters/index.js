import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        const {filterValue} = this.props
        return (
            <div>
<<<<<<< HEAD
                <SelectFilter articles = {filterValue} />
=======
                <SelectFilter />
>>>>>>> upstream/master
                <DateRange />
            </div>
        )
    }
}

export default connect((state) =>({
    filterValue: state.filter
})
)(Filters)