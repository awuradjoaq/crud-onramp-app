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
import User from "./components/User";
import { useAuth0 } from "@auth0/auth0-react";

const App: React.FC = (props) => {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    axios
      .get("/blog")
      .then((result) => setPosts(result.data))
      .catch((error) => console.log(error));
  }, []);

  if (isAuthenticated) {
    return (
      <div>
        <LogOutPage />
        <User />
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
