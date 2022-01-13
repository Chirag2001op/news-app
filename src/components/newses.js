import React, {Component} from "react";
import NewsItem from "./newsItem";
import { Button } from "react-bootstrap";
import Spinner from "./spinner";

    class Newses extends Component {
    
    constructor(){
        super();
        console.log("Hello I am a constructor")
        this.state = {
            articles: [],
            loading:false,
            page:1
        }
      }

      async componentDidMount(){
          console.log("cdm")
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ee33cb3f8b6c40ca8f89ba3fd3a0c692&pageSize=${this.props.pageSize}`
          let data = await fetch(url)
          this.setState({loading:true})
          let parsedData = await data.json()
          this.setState({articles: parsedData.articles,
                         totalResults:parsedData.totalResults,
                         loading:false
            })
      }

      handlePrevClick = async()=>{
        console.log("previous")
        
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ee33cb3f8b6c40ca8f89ba3fd3a0c692&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            this.setState({loading:true})
            let parsedData = await data.json()
            this.setState({
              page: this.state.page - 1,
              articles: parsedData.articles,
              loading:false
            })
        
      }
      
      handleNextClick = async ()=>{
        console.log("next")
        if(!(this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize))){
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ee33cb3f8b6c40ca8f89ba3fd3a0c692&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            this.setState({loading:true})
            let parsedData = await data.json()
            this.setState({
              page: this.state.page + 1,
              articles: parsedData.articles,
              loading:false
            })
        }
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
                  <NewsItem  title={element.title} description={element.description} imgURL={element.urlToImage}  newsUrl={element.url} />
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