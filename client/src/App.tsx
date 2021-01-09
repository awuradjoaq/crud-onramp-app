import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import PostDisplay from './components/PostDisplay';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomeButton from './components/HomeButton';
import Favorites from './components/Favorites';
import NewBlogPost from './components/NewBlogPost';
import axios from 'axios';

const dummyData = [
{
  username_id: 1,
  username: 'awuradjoaq',
  blog_post_id: 3,
  title: 'There are many variations of passages',
  post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  date_posted: `${new Date()}`
},
{
  username_id: 2,
  username: 'dlreeves',
  blog_post_id: 4,
  title: '1914 translation by H. Rackham',
  post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  date_posted: `${new Date()}`
},
{
  username_id: 2,
  username: 'dlreeves',
  blog_post_id: 5,
  title: 'Lorem ipsum dolor sit amet',
  post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  date_posted: `${new Date()}`
},
{
  username_id: 3,
  username: 'jenniferq',
  blog_post_id: 6,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet varius ipsum, ac vulputate dui',
  post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  date_posted: `${new Date()}`
}
]

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
          <Link to="/favorites">
            <button>Favorited Blogs</button>
          </Link>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <MainPage posts={posts} />}
            />
            <Route path="/blogpost/:id" exact component={PostDisplay} />
            <Route path="/favorites" exact component={Favorites} />
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
