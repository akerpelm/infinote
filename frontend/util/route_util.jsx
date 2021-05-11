import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id)
});

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/notes" />
        }
    />
);
const Protected = ({ loggedIn, path, component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
)
const Splash = ({ loggedIn, path, component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Redirect to="/notes" /> : <Component {...props} />
        )}
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))
export const SplashRoute = withRouter(connect(mapStateToProps, null)(Splash))
