import React, { Component } from "react";
import axios from "axios";
import { JSON_SERVER } from "../../../../config";

import Styles from "../../articles.css";
import Header from "./Header";

export default class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    axios
      .get(`${JSON_SERVER}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0];

        axios.get(`${JSON_SERVER}/teams?id=${article.team}`).then(response => {
          this.setState({
            article,
            team: response.data
          });
        });
      });
  }

  render() {
    const { article, team } = this.state;
    return (
      <div className={Styles.articleWrapper}>
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <div className={Styles.articleBody}>
          <h1>{article.title}</h1>
          <div
            className={Styles.articleImage}
            style={{
              background: `url('/images/articles/${article.image}')`
            }}
          />
          <div className={Styles.articleText}>{article.body}</div>
        </div>
      </div>
    );
  }
}
