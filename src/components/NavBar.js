import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    return (
      <div >
          <Link style={{paddingRight: '10px'}} to='/posts'>All Posts</Link>
          <Link to='/posts/new'>New Post</Link>
      </div>
    );

}

export default NavBar;
