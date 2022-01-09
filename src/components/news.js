import React from "react";
import NewsItem from "./newsItem";

export default function news() {
  return (
    <div className="container my-3">
      <h1>News Monkey - Top headlines</h1>
      <div className="row">
        <div className="col-md-4 my-4">
          <NewsItem title="myTitle" description="mydesc"  imgURL="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/Samsung-Gaming-Hub.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" />
        </div>
        <div className="col-md-4 my-4">
          <NewsItem title="myTitle" description="mydesc"  imgURL="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/Samsung-Gaming-Hub.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"  />
        </div>
        <div className="col-md-4 my-4">
          <NewsItem title="myTitle" description="mydesc" imgURL="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/Samsung-Gaming-Hub.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"/>
        </div>
        <div className="col-md-4 my-4">
          <NewsItem title="myTitle" description="mydesc" imgURL="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/Samsung-Gaming-Hub.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"  />
        </div>
        <div className="col-md-4 my-4">
          <NewsItem title="myTitle" description="mydesc" imgURL="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/Samsung-Gaming-Hub.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"  />
        </div>
        <div className="col-md-4 my-4">
          <NewsItem title="myTitle" description="mydesc" imgURL="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/Samsung-Gaming-Hub.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"  />
        </div>

      </div>
    </div>
  );
}
