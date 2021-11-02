import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedPost extends Component {
  render() {
    if (!this.props.selectedPost) {
      return <h2>Select a Post.....</h2>;
    }
    return (
      <div>
        <h2>USER ID :{this.props.selectedPost.userId}</h2>
        <h2>Tittle :{this.props.selectedPost.tittle}</h2>
        <h2>Body :{this.props.selectedPost.body}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedPost: state.selectedPost,
  };
}

export default connect(mapStateToProps)(SelectedPost);
