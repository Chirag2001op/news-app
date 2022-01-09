import React, {Component} from "react";
import NewsItem from "./newsItem";

export class newses extends Component() {
    articles = [
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Mat Smith",
          "title": "The OnePlus 10 Pro is the first new phone of 2022",
          "description": "First out of the gates in 2022, OnePlus has a new flagship for anyone already looking for a smartphone refresh. The company is holding back from revealing absolutely everything (well, most things), but that hasn't stopped leaks and rumors of a 6.7-inch displa…",
          "url": "https://www.engadget.com/oneplus-10-pro-reveal-launch-date-specs-price-010013479.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-01/03ee3a30-6c8f-11ec-b5ab-a5cda59c31fa",
          "publishedAt": "2022-01-04T01:00:13Z",
          "content": "First out of the gates in 2022, OnePlus has a new flagship for anyone already looking for a smartphone refresh. The company is holding back from revealing absolutely everything (well, most things), b… [+747 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Why BlackBerry held the tiny keys to my heart",
          "description": "The classic smartphone's life comes to an end on 4 January as the firm switches off support.",
          "url": "https://www.bbc.co.uk/news/technology-59859817",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BC63/production/_122572284_billwithblackberry.jpg",
          "publishedAt": "2022-01-04T01:41:01Z",
          "content": "Image source, Bill Wilson/BBC\r\nImage caption, \r\nMany vintage BlackBerry phones will stop working on Tuesday as the company turns off support for its operating system. For journalist, Bill Wilson it m… [+4877 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "S.Korean stocks fall as strong dollar, Omicron worries weigh - Reuters",
          "description": "S.Korean stocks fall as strong dollar, Omicron worries weigh  Reuters",
          "url": "https://www.reuters.com/markets/stocks/skorean-stocks-fall-strong-dollar-omicron-worries-weigh-2022-01-04/",
          "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=66",
          "publishedAt": "2022-01-04T02:38:00Z",
          "content": "SEOUL, Jan 4 (Reuters) - Round-up of South Korean financial markets:\r\n** South Korean shares fell on Tuesday, hurt by the dollar's strength as traders bet on a more aggressive rate hike by the Federa… [+1822 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "Japanese shares track Wall Street's record highs in strong start to 2022 - Reuters",
          "description": "Japanese shares jumped more than 1% on the first trading day of the year on Tuesday, led by strong performances in chip-related heavyweights and automakers, while Wall Street's overnight upbeat finish also boosted risk appetite.",
          "url": "https://www.reuters.com/markets/europe/japanese-shares-track-wall-streets-record-highs-strong-start-2022-2022-01-04/",
          "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=66",
          "publishedAt": "2022-01-04T02:55:00Z",
          "content": "TOKYO, Jan 4 (Reuters) - Japanese shares jumped more than 1% on the first trading day of the year on Tuesday, led by strong performances in chip-related heavyweights and automakers, while Wall Street… [+2062 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "Theranos jury draws a line between hype and lies - Reuters",
          "description": "Defunct blood-testing startup Theranos is now a cautionary legal tale. A federal U.S. jury on Monday convicted founder Elizabeth Holmes of defrauding investors <a href=\"/world/us/us-jury-theranos-trial-cannot-agree-verdicts-all-charges-2022-01-03/\"> read more…",
          "url": "https://www.reuters.com/breakingviews/theranos-jury-draws-line-between-hype-lies-2022-01-04/",
          "urlToImage": "https://www.reuters.com/resizer/2dPpslRHqqlQh1W4bzacS8ncDTg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4K6527WO2BIGLEBZVMVRQFX2OY.jpg",
          "publishedAt": "2022-01-04T02:19:00Z",
          "content": "WASHINGTON, Jan 3 (Reuters Breakingviews) - Defunct blood-testing startup Theranos is now a cautionary legal tale. A federal U.S. jury on Monday convicted founder Elizabeth Holmes of defrauding inves… [+3674 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Central"
          },
          "author": "Derrek Lee",
          "title": "The new Withings Body Scan puts a scaled down health station in your home",
          "description": "Withings latest smart scale takes health measurements up a notch.\n\nWhat you need to know\n\n\nBody Scan is the latest smart scale from Withings.\nThe scale features a retractable handle for advanced body composition measurements.\nBody Scan can provide readings fo…",
          "url": "https://www.androidcentral.com/withings-body-scan-announce",
          "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/12/withings-body-scan.jpg",
          "publishedAt": "2022-01-04T01:00:02Z",
          "content": "Withings is known for its impressive smart scales that can do more than just tell you your weight. Devices like the Withings Body Cardio smart scale can tell you your BMI, fat percentage, heart healt… [+2509 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Juli Clover",
          "title": "CES 2022: Netgear Launches Nighthawk RAXE300 WiFi 6E Router",
          "description": "Netgear today announced the launch of its latest Nighthawk router, the Nighthawk RAXE300 Tri-Band WiFi 6E, which offers the 6GHz band for WiFi 6E-compatible devices.\n\n\n\n\n\nThe RAXE300 offers up to eight WiFi streams and supports Gigabit+ WiFi speeds up to 7.8G…",
          "url": "https://www.macrumors.com/2022/01/03/netgear-raxe300-wifi-6e-router/",
          "urlToImage": "https://images.macrumors.com/t/kzf8tIaAMi1IBwHm5-Bypdd0RlY=/2000x/article-new/2022/01/netgear-nighthawk-raxe300.jpg",
          "publishedAt": "2022-01-04T01:30:48Z",
          "content": "Netgear today announced the launch of its latest Nighthawk router, the Nighthawk RAXE300 Tri-Band WiFi 6E, which offers the 6GHz band for WiFi 6E-compatible devices.\r\nThe RAXE300 offers up to eight W… [+1232 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "St. Albert TODAY"
          },
          "author": "Canadian Press",
          "title": "Many BlackBerry phones to stop working as company decommissions several services - St. Albert Today",
          "description": "<ol><li>Many BlackBerry phones to stop working as company decommissions several services  St. Albert Today\r\n</li><li>Why Blackberry Is Discontinuing Service For Classic Devices  NBC News\r\n</li><li>Classic BlackBerry phones will stop working Jan. 4  CTV News\r\n…",
          "url": "https://www.stalberttoday.ca/beyond-local/many-blackberry-phones-to-stop-working-as-company-decommissions-several-services-4917963",
          "urlToImage": "https://www.vmcdn.ca/f/files/shared/feeds/cp/2022/01/2022010311014-61d31f2607914b3c67b57bbajpeg.jpg;w=650;h=426;mode=crop",
          "publishedAt": "2022-01-04T00:19:43Z",
          "content": "Many of BlackBerry Ltd.'s mobile phones will stop reliably working on Tuesday after the company decommissions several of its services.\r\nThe Waterloo, Ont.-based business is decommissioning services f… [+3646 chars]"
        }
      ]
    constructor(){
        super();
        console.log("Hello I am a constructor")
        this.state = {
            article: this.articles 
        }
      }

      render(){

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

  export default newses