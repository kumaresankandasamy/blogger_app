import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Posts from './Posts';
import PostForm from './PostForm';
import PostDetail from './PostDetail';
import Footer from './Footer';

import * as ActionCreator from '../redux/actions';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return <div className="container">
      <Header />
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/new" render={(props) => {
          return <PostForm {...props} />;
        }} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>

      <Footer />
    </div>;
  }
}

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(ActionCreator.getCategories())
  };
};


export default connect(null, mapDispatchToProps)(App);
