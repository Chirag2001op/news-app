import React, {Component} from "react";
import NewsItem from "./newsItem";

export class Newses extends Component() {
    
    constructor(){
        super();
        console.log("Hello I am a constructor")
        this.state = {
            article: [],
            loading:false
        }
      }

      async componentDidMount(){
          console.log("cdm")
          let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ee33cb3f8b6c40ca8f89ba3fd3a0c692"
          let data = await fetch(url)
          let parsedData = await data.json
          this.setState({articles: parsedData.articles})
      }

      render(){
            console.log("render")
          return (
              <div className="container my-3">
              <h1>News Monkey - Top headlines</h1>
              <div className="row">
                {this.state.article.map((element)=>{

                return (
                    
                <div className="col-md-4 my-4" key={element.title}>
                  <NewsItem  title="myTitle" description={element.description} imgURL={element.urlToImage}  newsUrl={element.url} />
                </div>
                ) 
                })}
               
              </div>
            </div>
          );
      }
  }

  export default Newses