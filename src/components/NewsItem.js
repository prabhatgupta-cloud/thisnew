import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
   

    render() {

        let {title , description , imagurl } = this.props;
        return (
            <div >
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src= {imagurl}alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-sn btn-primary">Read more....</a>
                    </div>
                </div>
            </div>
        )
    }
}
