import React, { Component } from 'react'

import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": "",
          "title": "Taylor Swift-Travis Kelce rumors: Pop star set to attend Jets vs. Chiefs on Sunday night, per report - CBS Sports",
          "description": "Welcome to New York [Taylor], it's been waiting for you",
          "url": "https://www.cbssports.com/nfl/news/taylor-swift-travis-kelce-rumors-pop-star-set-to-attend-jets-vs-chiefs-on-sunday-night-per-report/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/28/b724bc78-63ff-43c1-a310-67b41f0b5bf9/thumbnail/1200x675/6ecc7ac3fc40995970c0882493de4444/taylor-swift.jpg",
          "publishedAt": "2023-09-28T17:40:50Z",
          "content": "After attending the Chiefs' Week 3 game at Arrowhead Stadium in Kansas City, pop star Taylor Swift plans to make another NFL appearance this weekend in support of tight end\u00A0Travis Kelce, who she is r\u2026 [+1166 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": "",
          "title": "2023 Ryder Cup schedule: U.S., Europe teams set matchups, pairings, tee times for Day 1 on Friday - CBS Sports",
          "description": "Jordan Spieth and Justin Thomas will sit for the first session of the 2023 Ryder Cup",
          "url": "https://www.cbssports.com/golf/news/2023-ryder-cup-schedule-u-s-europe-teams-set-matchups-pairings-tee-times-for-day-1-on-friday/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/28/04c70cb7-2adf-44fd-915d-5ed83ac0b1e2/thumbnail/1200x675/f0ba1b1cefeb15c4d82473127ea6e25d/tommy-rory-2023-ryder.jpg",
          "publishedAt": "2023-09-28T17:25:00Z",
          "content": "The 2023 Ryder Cup is nearing its start, and just about 12 hours before play begins, the Day 1 pairings and tee times are officially (and finally) out. Most notable is that Zach Johnson mixed it up a\u2026 [+6655 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sports Illustrated"
          },
          "author": "Ian Casselberry",
          "title": "Cubs Broadcasters Complain About Braves Stopping Game to Honor Ronald Acu\u00F1a Jr. - Sports Illustrated",
          "description": "The game was at stake in the 10th inning.",
          "url": "https://www.si.com/mlb/2023/09/28/cubs-broadcasters-complain-stopping-game-honor-ronald-acu\u00F1a-jr",
          "urlToImage": "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAxMTE0OTIxNTE2MTQ4NjAx/usatsi_21518015_168402041_lowres.jpg",
          "publishedAt": "2023-09-28T11:16:03Z",
          "content": "The\u00A0Braves\u00A0got a big win Wednesday night, topping the\u00A0Cubs\u00A06\u20135 in 10 innings. Leading to Atlanta's game-winning run was a stolen base by\u00A0Ronald Acu\u00F1a Jr.\u00A0that put him in scoring position.\u00A0\r\nAcu\u00F1a's s\u2026 [+1132 chars]"
        }
      ]
    constructor (){
        super();
        console.log("hello wao")
        
        this.state = { 
            articles: this.articles ,
            loding: false

        }
    }

    render() {
        return (

            <div className="container my-5">
                <h2>BharatNews</h2>
                <div className="row">

                    <div className="col-md-4">
                        <NewsItem title="myT" description ="dsc" imagurl="https://sportshub.cbsistatic.com/i/r/2023/09/28/b724bc78-63ff-43c1-a310-67b41f0b5bf9/thumbnail/1200x675/6ecc7ac3fc40995970c0882493de4444/taylor-swift.jpg"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                </div>
            </div>


        )
    }
}
