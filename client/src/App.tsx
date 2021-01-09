import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import PostDisplay from './components/PostDisplay';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomeButton from './components/HomeButton';
import Favorites from './components/Favorites';
import NewBlogPost from './components/NewBlogPost';
import axios from 'axios';

const App: React.FC = (props) => {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/blog')
    .then(result => setPosts(result.data))
    .catch(error => console.log(error))
  },[]);

  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <HomeButton />
          <Link to="/favorites/1">
            <button>Favorited Blogs</button>
          </Link>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <MainPage posts={posts} />}
            />
            <Route path="/favorites/:id" exact component={Favorites} />
            <Route path="/:id" component={PostDisplay} />
          </Switch>
        </div>
      </BrowserRouter>
      <button onClick={() => setShow(!show)}>
        Create New Blog Post
      </button>
      <NewBlogPost show={show} onClose={() => setShow(!show)}/>
    </div>
  );
};

export default App;
