import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {logoutUser} from "../actions/authActions";

class newsheader extends Component {

    logout(){
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Top News Denver
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/today">
                            <NavItem eventKey={1} disabled={!this.props.loggedIn}>Today </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/saved'+ (this.props.selectedNews ? this.props.selectedNews.title : '')}>
                            <NavItem eventKey={2} disabled={!this.props.loggedIn}>Saved</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/signin">
                            <NavItem eventKey={3}>{this.props.loggedIn ? <button onClick={this.logout.bind(this)}>Logout</button> : 'Login'}</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username,
        selectedMovie: 'state.news.selectedNews,'
    }
}

export default withRouter(connect(mapStateToProps)(newsheader));