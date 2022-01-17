import React, {Component} from "react";
import NewsItem from "./newsItem";
import { Button } from "react-bootstrap";
import Spinner from "./spinner";
import PropTypes from 'prop-types'


    class Newses extends Component {

      static defaultProps ={
          country: 'in',
          pageSize: 8,
          category: 'general'
      }

      static propTypes={
        country:PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string 
      }
    
    constructor(){
        super();
        console.log("Hello I am a constructor")
        this.state = {
            articles: [],
            loading:false,
            page:1
        }
      }

      async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee33cb3f8b6c40ca8f89ba3fd3a0c692&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        this.setState({loading:true})
        let parsedData = await data.json()
        this.setState({
          articles: parsedData.articles,
          loading:false
        })
      }

      async componentDidMount(){
           this.updateNews();
      }

      handlePrevClick = async()=>{
        this.setState({page: this.state.page - 1})
        this.updateNews();        
      }
      
      handleNextClick = async ()=>{
        this.setState({page: this.state.page + 1})
        this.updateNews(); 
      }

      render(){
            console.log("render")
          return (
              <div className="container my-3">
                <h1 className="text-center">News Monkey - Top headlines</h1>
                <div className="text-center">{this.state.loading&&<Spinner/>}</div>
              <div className="row">
                {!this.state.loading && this.state.articles?.map((element)=>{

                return (
                    
                <div className="col-md-4 my-4" key={element.url}>
                  <NewsItem  title={element.title} description={element.description} imgURL={element.urlToImage}  newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                </div>
                ) 
                })}
               
              </div>
              <div className="container d-flex justify-content-between">
              <Button disabled={this.state.page<=1} variant="dark" onClick={this.handlePrevClick}>&larr; Previous</Button>
              <Button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} variant="dark" onClick={this.handleNextClick}>Next &rarr;</Button>
              </div>
            </div>
          );
      }
  }

  export default Newses