import React from 'react'
import Slick from 'react-slick'
import { Link } from 'react-router-dom'

import Styles from './Slider.css'

const SliderTemplates = props => {
  let template = null

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings,
  }

  switch (props.type) {
    case 'featured':
      template = props.data.map((item, i) => {
        const { image, id, title } = item
        return (
          <div key={i}>
            <div className={Styles.featured_item}>
              <div
                className={Styles.featured_image}
                style={{
                  background: `url(../images/articles/${image})`,
                }}
              >
                <Link to={`/articles/${id}`}>
                  <div className={Styles.featured_caption}>{title}</div>
                </Link>
              </div>
            </div>
          </div>
        )
      })
      break
    case 'other':
      template = props.data.map((item, i) => {
        const { image, id, title } = item
        return (
          <div key={i}>
            <div className={Styles.featured_item}>
              <div
                className={Styles.featured_image}
                style={{
                  background: `url(../images/articles/${image})`,
                }}
              >
                <Link to={`/articles/${id}`}>
                  <div className={Styles.featured_caption}>{title}</div>
                </Link>
              </div>
            </div>
          </div>
        )
      })
      break
    default:
      template = null
  }

  return (
    <div>
      <Slick {...settings}>{template}</Slick>
    </div>
  )
}

export default SliderTemplates
