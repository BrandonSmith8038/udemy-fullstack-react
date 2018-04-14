import React, { Component } from "react";
import axios from "axios";
import { JSON_SERVER } from "../../../../config";

import Styles from "../../articles.css";
import Header from "./Header";
import Body from "./Body";

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
        <Body />
      </div>
    );
  }
}
