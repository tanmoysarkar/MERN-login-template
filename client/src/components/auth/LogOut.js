import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logOut } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class LogOut extends Component {

    static propTypes = {
        logOut: PropTypes.func.isRequired
    }

    render() {
        return (
            <Fragment>
                <NavLink onClick= {this.props.logOut} href="#">Logout</NavLink>
            </Fragment>
        )
    }
}

export default connect(
    null,
    { logOut }
) (LogOut)