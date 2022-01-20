import React, { useEffect, useState } from "react";
import NewsItem from "./newsItem";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

export default function Newses(props)  {

 const [articles, setArticles] = useState([]);
 const [loading, setLoading] = useState(true);
 const [page, setPage] = useState(1);
 const [totalResults, setTotalResults] = useState(0);

  
  const updateNews = async() => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setLoading(true);
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false);
    
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);
  
 const fetchMoreData = async() =>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    setLoading(true);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
 };

 
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:'90px'}}>News Monkey - Top headlines</h1>
        {/* <div className="text-center">{this.state.loading&&<Spinner/>}</div> */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles?.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgURL={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        
      </div>
    );
  
}

Newses.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

Newses.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

