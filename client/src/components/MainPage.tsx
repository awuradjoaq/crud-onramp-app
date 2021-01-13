import React from "react";
import BlogPosts from "./BlogPost";
import Search from "./Search";
import styled from "styled-components";

// Interfaces
interface MainPageProps {
  posts: {
    id: number;
    title: string;
    username_id: number;
    username: string;
    date_created: string;
  }[];
  setPosts?: Function;
  userId?: {
    id: string;
    auth_id: string;
  };
}

// Styled Components
const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BlogPostsContainer = styled.div`
  margin-top: 60px;
`;

const MainPage: React.FC<MainPageProps> = (props) => {
  return (
    <MainPageContainer>
      <Search posts={props.posts} setPosts={props.setPosts} />
      <BlogPostsContainer>
        {props.posts.map((post) => (
          <BlogPosts
            post={post}
            key={post.id}
            setPosts={props.setPosts}
            userId={props.userId}
          />
        ))}
      </BlogPostsContainer>
    </MainPageContainer>
  );
};

export default MainPage;
