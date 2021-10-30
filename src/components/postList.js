import React, { Component } from "react";
import { connect } from "react-redux";

class PostList extends Component {
  createListItems() {
    return this.props.allPost.map((post) => {
      return (
        <li key={post.id} onClick={() => this.props.selectPost(post)}>
          {post.title} {post.body}
        </li>
      );
    });
  }

  render() {
    if (!this.props.allPost) {
      return <h2>Click the Button first!</h2>;
    }
    return <ul>{this.createListItems()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    allPost: state.allPost,
  };
}

export default connect(mapStateToProps)(PostList);
