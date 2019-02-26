import React from "react";
import uuid from "uuid";
import './MainArticles.css'

export default class MainArticles extends React.Component {
  state = {
    articles: [],
    category: "business"
  };

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${
        this.state.category
      }`,
      {
        method: "GET",
        headers: {
          "x-api-key": "4875586f6bc04b13bcde4967e8e2c20d"
        }
      }
    )
      .then(res => res.json())
      .then(data => this.setState({ articles: data.articles }));
  }

  displayMainArticles = () => {
    return this.state.articles.map(article => {
      return (
        <li className="main-article" key={uuid()}>
          <h3>{article.title}</h3>
          {(article.urlToImage) ? <img src={article.urlToImage} alt="Provided with the article." className='main-article-img'/> : ''}
          {/* <img src={article.urlToImage} alt="Provided with the article." /> */}
        </li>
      );
    });
  };

  generateSelectDrop = () => {
    return (
      <form onChange={e => this.handleSelectChange(e)}>
        <select>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </form>
    );
  };
  
  handleSelectChange = e => {
    console.log(e.target.value);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${
        e.target.value
      }`,
      {
        method: "GET",
        headers: {
          "x-api-key": "4875586f6bc04b13bcde4967e8e2c20d"
        }
      }
    )
      .then(res => res.json())
      .then(data => this.setState({ articles: data.articles }))
      .then(this.displayMainArticles());
  };
  render() {
    return (
      <div>
        {this.generateSelectDrop()}
        <ul>{this.displayMainArticles()}</ul>
      </div>
    );
  }
}
