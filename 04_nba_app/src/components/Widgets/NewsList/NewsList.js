import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group' 
import { Link } from 'react-router-dom'
import { firebase, firebaseTeams, firebaseArticles, firebaseLooper } from '../../../firebase'
import Styles from './NewsList.css'
import Button from '../Buttons/Buttons'
import CardInfo from '../CardInfo/CardInfo'
import NewsTemplate from '../../News/NewsListTemplate'

class NewsList extends Component {
  
  state = {
    items: [],
    teams: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }
  
  componentWillMount(){
    this.request(this.state.start, this.state.end)
  }
  
  request = (start, end) => {
    if(this.state.teams.length < 1){
      firebaseTeams.once('value')
      .then(snapshot => {
        const teams = firebaseLooper(snapshot)
        this.setState({
          teams
        })
      })
    }
      firebaseArticles.orderByChild("id").startAt(start).endAt(end).once('value')
      .then(snapshot => {
        const articles = firebaseLooper(snapshot)
        this.setState({
          items: [...this.state.items,...articles], start, end
        })
      })
      .catch(err => console.log(err))
    }

  
  loadMore = () => {
    let end = this.state.end + this.state.amount
    this.request(this.state.end + 1,end)
    this.setState({
      end
    })
  }
  
  renderNews = type => {
    let template = null
    
    switch (type) {
      case 'card':
        template = this.state.items.map((item, i) => {
          const { title, id, date,team } = item
          return (
            <CSSTransition
              classNames={{
                enter: Styles.newsList_wrapper,
                enterActive: Styles.newsList_wrapper_enter,
              }}
                timeout= {500}
                key= {i}
            >
              <div>
                <div className={Styles.newsList_item}>
                  <Link to={`/articles/${id}`}>
                    <CardInfo teams={this.state.teams} team={team} date={date} />
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
          )
        })
        break;
      case 'PicCard':
          template = this.state.items.map((item, i) => {
          const { title, id, date } = item
          return (
            <CSSTransition
              classNames={{
                enter: Styles.newsList_wrapper,
                enterActive: Styles.newsList_wrapper_enter,
              }}
                timeout= {500}
                key= {i}
            >
              <div className={Styles.cardWrapper}>
                <div className={Styles.left} style={{
                  background: `url(/images/articles/${item.image})`
                }}>
                  <div></div>
                </div>
                <div className={Styles.right}>
                  <div className={Styles.newsHomeList_item}>
                    <Link to={`/articles/${id}`}>
                      <CardInfo teams={this.state.teams} team={id} date={date} />
                      <h2>{item.title}</h2>
                    </Link>
                  </div>
                </div>
              </div>
            </CSSTransition>
          )
        })
        break;
      default:
        template = null
    }
    return template
  }
  
  render() {
    return (
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
          { this.renderNews( this.props.type ) }
        </TransitionGroup>
        <Button 
          type="loadMore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    )
  }
}

export default NewsList