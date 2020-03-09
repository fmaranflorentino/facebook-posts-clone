import React, { Component } from "react";

import Post from "./Post";
import "./PostList.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://media-exp1.licdn.com/dms/image/C5603AQFqiPEgHwQT9Q/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=gKBb4LvZvpgGSBEnphEXQNfBs2g3UaazM3Gk1Vo4LkI"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Julia Mantovani",
              avatar:
                "https://avatars1.githubusercontent.com/u/59507907?s=400&v=4"
            },
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
          },
          {
            id: 2,
            author: {
              name: "Lucas Nogueira",
              avatar:
                "https://avatars3.githubusercontent.com/u/34035319?s=400&v=4"
            },
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://media-exp1.licdn.com/dms/image/C5603AQFqiPEgHwQT9Q/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=gKBb4LvZvpgGSBEnphEXQNfBs2g3UaazM3Gk1Vo4LkI"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Julia Mantovani",
              avatar:
                "https://avatars1.githubusercontent.com/u/59507907?s=400&v=4"
            },
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <section className="PostList">
        {this.state && this.state.posts.map(post => <Post post={post} />)}
      </section>
    );
  }
}

export default PostList;
