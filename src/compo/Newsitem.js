import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
    let { title, description,imageurl,newsurl } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageurl?"https://static.zawya.com/view/acePublic/alias/contentid/OWU3OTBiZmItZDFlNi00/17/switzerland-health-virus-who-pharmaceutical.jpeg?f=3%3A2":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
