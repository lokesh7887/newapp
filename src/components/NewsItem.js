import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
  let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className = "my-3">
        <div className="card" >
  <img src= {!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TAGTSVFYYUI63MG7RSQU3ZTZVU_size-normalized.jpg&w=1440":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
