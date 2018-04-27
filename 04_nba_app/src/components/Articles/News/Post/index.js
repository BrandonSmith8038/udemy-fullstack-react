import React, { Component } from "react";
import { firebaseDB, firebaseLooper, firebaseTeams } from '../../../../firebase'
import Styles from "../../articles.css";
import Header from "./Header";


export default class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
    .then(snapshot => {
      let article = snapshot.val()
      
      firebaseTeams.orderByChild("teamId").equalTo(article.team).once('value')
      .then(snapshot => {
        const team = firebaseLooper(snapshot)
        this.setState({
          article,
          team
        })
      })
    })
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
