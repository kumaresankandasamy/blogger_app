import React, { Component } from 'react';

import { getPost } from '../api';
import { getCategory } from '../api/categories';

class PostDetail extends Component {
  state = {
    post: {
      id: 0,
      title: '',
      body: '',
      author: '',
      category: ''
    },
    category: {
      id: '',
      name: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    getPost(id)
      .then(post => {
        this.setState({ post });
        return getCategory(post.category);
      })
      .then(category => this.setState({ category }))
      .catch(err => {
        console.log('Get post/category failed.');
        console.log('Error:', err);
      });
  }

  render() {
    const { title, body, author } = this.state.post;
    const { name: categoryName } = this.state.category;

    return <div>
      <h5 className="mr-3">Post Detail</h5>
      <div className="card bg-light mb-3">
        <div className="card-header">
          <h5>
            {title}
          </h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            {body}
          </p>
          <p className="card-text">Author: <em>
            {author}
          </em></p>
          <p className="card-text">Category: <em>
            {categoryName}
          </em></p>
        </div>
        <div className="card-footer">
          <button className="btn btn-sm btn-outline-primary mr-1" type="button">Edit</button>
          <button
            className="btn btn-sm btn-outline-danger"
            type="button"
          >
            Delete
        </button>
        </div>
      </div>
    </div>;
  }
}

export default PostDetail;
