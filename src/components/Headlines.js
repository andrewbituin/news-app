import React from "react";
import "./Headlines.css";
import uuid from 'uuid';
export default class Headlines extends React.Component {
  state = {
    articles: [],
    currentArticle: 0
  };

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us", {
      method: "GET",
      headers: {
        "x-api-key": "4875586f6bc04b13bcde4967e8e2c20d"
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ articles: data.articles }));
  }
  //Display only 6 headlines at a time
  // On the click of button, rotate to next section of headlines

  displayHeadlines = () => {
    return this.state.articles.map(article => {
      return (
        <li className="headline" key={uuid()}>
          <h3>{article.title}</h3>
          <p>{article.author ? `author: ${article.author}` : ""}</p>
          <p>{article.description}</p>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul>{this.displayHeadlines()}</ul>
        <button type="click">More Headlines</button>
      </div>
    );
  }
}
