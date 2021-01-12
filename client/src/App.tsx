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
import styled from 'styled-components';
import FavoriteButton from "./components/FavoriteButton";

// Interface
interface ClientState {
  id: string;
  auth_id: string;
}

//Styled Components
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;

`
const NavItems = styled.li`
  display: inline;
  float: right;
  margin: 0px 15px;
`

const NavStyled = styled.nav`
  width: 100%;
  height: 100%;
  margin: 10px;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 50px;
  top: 0;
`;

const UlStyled = styled.ul`
  width: 100%;
  height: 100%;
`;

const ButtonStyle = styled.button`
  background-color: transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;

`;

const RoutesContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const App: React.FC = (props) => {

  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [client, setClient] = useState<ClientState | undefined>(undefined);


  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    console.log('App useEffect ran!')
    if (isAuthenticated) {
      let test = JSON.parse(`${JSON.stringify(user, null, 2)}`);
      axios.post('/blog/user', {
        username: test.nickname,
        auth_id: test.sub
      })
      .then(() => axios.all([
        axios.get(`/blog/user/${test.sub}`),
        axios.get('/blog')
      ])
      .then(axios.spread((userInfo, blogInfo) => {
        setClient(userInfo.data[0]);
        setPosts(blogInfo.data);
      }))
      .catch(axios.spread((userError, blogError) => {
        console.log('user error', userError, 'blogError', blogError)
      })))
      .catch((error) => console.log(error))
    }

  }, [isAuthenticated]);

  // const getBlogs = (endpoint:string, stateSetter:any) => {
  //   axios.get(endpoint)
  //   .then(result => stateSetter(result.data))
  //   .catch(error => console.log(error))
  // }

  if (isAuthenticated && client) {
    return (
      <AppContainer>
        <NavContainer>
        <NavStyled>
        <NavItems><LogOutPage /></NavItems>
        <NavItems><ButtonStyle onClick={() => setShow(!show)}>Create New Blog Post</ButtonStyle></NavItems>
        <BrowserRouter>
          <RoutesContainer>
            <NavItems><HomeButton setPosts={setPosts} posts={posts}/></NavItems>
            <NavItems><Link to={`/favorites/${client!.id}`}>
              <ButtonStyle>Favorited Blogs</ButtonStyle>
            </Link></NavItems>
            <Switch>
              <Route
                path="/"
                exact
                render={() => <MainPage posts={posts} setPosts={setPosts} userId={client}/>}
              />
              <Route path="/favorites/:id" exact component={Favorites} />
              <Route path="/:id" render={(props) => <PostDisplay {...props} setPosts={setPosts} userId={client}/>} />
            </Switch>
          </RoutesContainer>
        </BrowserRouter>
        </NavStyled>
        </NavContainer>
        <NewBlogPost userId={client} show={show} onClose={() => setShow(!show)} setPosts={setPosts}/>
      </AppContainer>
    );
  } else {
    return <LogInPage />;
  }
};

export default App;
