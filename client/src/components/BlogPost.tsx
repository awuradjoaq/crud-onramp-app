import React from 'react';

interface BlogPostProps {
  post: {
    username_id: number;
    username: string;
    blog_post_id: number;
    title: string;
    post: string;
    date_posted: string;
  }
}

interface BlogViewState {
  postViewed: boolean;
}

class BlogPost extends React.Component<BlogPostProps, BlogViewState> {
  constructor(props: BlogPostProps) {
    super(props);
    this.state = {
      postViewed: false
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <h3>{this.props.post.username}</h3>
        <h4>{this.props.post.date_posted}</h4>
      </div>
    );
  }
};

export default BlogPost;