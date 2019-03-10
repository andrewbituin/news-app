import React from "react";
import "./Headlines.css";
import uuid from 'uuid';
export default class Headlines extends React.Component {
  state = {
    articles: [],
    currentArticle: 0,
    numberOfArticles: null
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
    const allArticles = this.state.articles.map(article => {
      return (
        <li className="headline" key={uuid()}>
          <h3>{article.title}</h3>
        </li>
      );
    });
    const displayedArticles = []
    // if(displayedArticles.length === 0){
    //   this.setState({ currentArticle: 0})
    //   for(let i = this.state.currentArticle; i < (this.state.currentArticle + 6); i++){
    //     displayedArticles.push(allArticles[i])
    //   }
    // }
    for(let i = this.state.currentArticle; i < (this.state.currentArticle + 6); i++){
      displayedArticles.push(allArticles[i])
    }
    
    return displayedArticles
  };
  handleClickMoreHeadlines = () => {
    // if(this.state.numberOfArticles.length === 0){
    //   this.setState({ currentArticle: 0})
    // }
    this.setState({currentArticle: this.state.currentArticle + 6})
  }
  handleClickReset = () => {
    this.setState({currentArticle: 0})
  }
  render() {
    return (
      <div>
        <ul>{this.displayHeadlines()}</ul>
        <button type="click" onClick={e => this.handleClickMoreHeadlines(e)}>More Headlines</button>
        <button type="click" onClick={e => this.handleClickReset(e)}>Reset</button>
      </div>
    );
  }
}
