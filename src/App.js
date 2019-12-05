import React from 'react';
import BlogPostForm from './components/BlogPostForm'
import BlogPosts from './components/BlogPosts'
import NavBar from './components/NavBar'
import {Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div >
        <Route path='/' component={NavBar}/>
        <Route exact path='/posts' component={BlogPosts}/>
        <Route path='/posts/new' component={BlogPostForm}/>
      </div>
    );
  }
}

export default App;
