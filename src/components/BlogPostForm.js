import React from 'react';


class BlogPostForm extends React.Component {

  state = {title: '', content: ''}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form >
        <label>Title:</label><br/>
        <input style={{height: '20px', width: '400px'}} type="text" name="title" value={this.state.title} onChange={this.handleChange}/><br/>
        <label>Content:</label><br/>
        <input style={{height: '200px', width: '400px'}} type="text" name="content" value={this.state.content} onChange={this.handleChange}/><br/>
        <input type="submit" />
      </form>
    );
  }
}

export default BlogPostForm;
