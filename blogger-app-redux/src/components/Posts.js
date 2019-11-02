import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Categories from './Categories';
import { AllCategory } from '../store';
import * as PostAction from '../redux/actions';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      category: AllCategory
    };
  }

  componentDidMount() {
    this.props.getPosts();
  }

  handleCategorySelect = category => {
    this.setState({ category });
  }

  handlePostCreate = (newPost) => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, newPost]
      };
    });
  }

  handlePostDelete = (id) => {
    this.setState((prevState) => {
      return {
        posts: prevState.posts.filter(p => p.id !== id)
      };
    });
  }

  getCategoryName(categoryId) {
    const category = this.props.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }

  renderPosts(posts) {
    return <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(p => <tr key={p.id}>
          <td>{p.title}</td>
          <td>{p.author}</td>
          <td>{this.getCategoryName(p.category)}</td>
          <td>
            <div className="btn-group btn-group-sm">
              <Link className="btn btn-info" to={`/posts/${p.id}`}>View</Link>
              <a className="btn btn-warning" href="/">Edit</a>
              <a className="btn btn-danger" href="/">Delete</a>
            </div>
          </td>
        </tr>
        )}
      </tbody>
    </table>;
  }

  render() {
    const { category } = this.state;
    const { posts } = this.props;


    const filteredPosts = category.id === 'all'
      ? posts
      : posts.filter(p => {
        return p.category === category.id;
      })

    return <div className="row">
      <div className="col-12 col-md-3">
        <Categories
          onCategorySelect={this.handleCategorySelect}
        />
      </div>
      <div className="col-12 col-md-9">
        <h5>Posts</h5>

        {filteredPosts.length > 0
          ? (this.renderPosts(filteredPosts))
          : (<div className="alert alert-info" role="alert">
            No posts for this category
          </div>)
        }
      </div>
    </div>;
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(PostAction.getPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);


