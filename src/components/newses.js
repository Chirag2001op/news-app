import React, {Component} from "react";
import NewsItem from "./newsItem";
import { Button } from "react-bootstrap";

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
          let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ee33cb3f8b6c40ca8f89ba3fd3a0c692"
          let data = await fetch(url)
          let parsedData = await data.json()
          this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
      }

      handlePrevClick = async()=>{
        console.log("previous")
        
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ee33cb3f8b6c40ca8f89ba3fd3a0c692&page=${this.state.page-1}&pageSize=21`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
              page: this.state.page - 1,
              articles: parsedData.articles
            })
        
      }
      
      handleNextClick = async ()=>{
        console.log("next")
        if(this.state.page>=Math.ceil(this.state.totalResults/21)){

        }
        else{
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ee33cb3f8b6c40ca8f89ba3fd3a0c692&page=${this.state.page+1}&pageSize=21`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
              page: this.state.page + 1,
              articles: parsedData.articles
            })
        }
      }

      render(){
            console.log("render")
          return (
              <div className="container my-3">
              <h1>News Monkey - Top headlines</h1>
              <div className="row">
                {this.state.articles?.map((element)=>{

                return (
                    
                <div className="col-md-4 my-4" key={element.url}>
                  <NewsItem  title={element.title} description={element.description} imgURL={element.urlToImage}  newsUrl={element.url} />
                </div>
                ) 
                })}
               
              </div>
              <div className="container d-flex justify-content-between">
              <Button disabled={this.state.page<=1} variant="dark" onClick={this.handlePrevClick}>&larr; Previous</Button>
              <Button variant="dark" onClick={this.handleNextClick}>Next &rarr;</Button>
              </div>
            </div>
          );
      }
  }

  export default Newses