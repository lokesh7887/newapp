import React, { Component } from 'react'
import NewsItem from './NewsItem'
import spinner from './spinner';
import propTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'genral'
  }
static propTypes= {
  country: propTypes.string,
  pageSize:propTypes.number,
  category:propTypes.string
}



  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59ee7c239b744daba71b2d2fda41eecf&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,   loading: false })
  }

  handlePrevClick = async () => {
    console.log("previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59ee7c239b744daba71b2d2fda41eecf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loadind: false
    })
  }
  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page +1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59ee7c239b744daba71b2d2fda41eecf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }



  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:"35px opx"}}>NewsMonk - Be a Monk</h1>
        {this.state.loading && <spinner/> }
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News
