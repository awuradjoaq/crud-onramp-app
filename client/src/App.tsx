import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import PostDisplay from "./components/PostDisplay";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomeButton from "./components/HomeButton";
import Favorites from "./components/Favorites";
import NewBlogPost from "./components/NewBlogPost";
import axios from "axios";
import LogInPage from "./components/LoginPage";
import LogOutPage from "./components/LogOutPage";
import { useAuth0 } from "@auth0/auth0-react";

const App: React.FC = (props) => {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [client, setClient] = useState([]);

  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    console.log('App useEffect ran!')
    if (isAuthenticated) {
      console.log('im here in the if block')
      let test = JSON.parse(`${JSON.stringify(user, null, 2)}`);
      axios.post('/blog/user', {
        username: test.nickname,
        auth_id: test.sub
      })
      .then(() => axios.get(`/blog/user/${test.sub}`)
      .then((result) => setClient(result.data))
      // .then((blogs) => axios.get('/blog'))
      .catch((error) => console.log(error)))
    }
    // axios.get("/blog")
    //   .then((result) => setPosts(result.data))
    //   .catch((error) => console.log(error));
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <div>
        <LogOutPage />
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
                render={() => <MainPage posts={posts} setPosts={setPosts} />}
              />
              <Route path="/favorites/:id" exact component={Favorites} />
              <Route path="/:id" component={PostDisplay} />
            </Switch>
          </div>
        </BrowserRouter>
        <button onClick={() => setShow(!show)}>Create New Blog Post</button>
        <NewBlogPost show={show} onClose={() => setShow(!show)} />
      </div>
    );
  } else {
    return <LogInPage />;
  }
};

export default App;
