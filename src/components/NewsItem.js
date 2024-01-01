import React from 'react';

 const NewsItem =(props)=>{

   
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imageUrl ? "https://www.informalnewz.com/wp-content/uploads/2022/10/Sunny-Leone.jpg" : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {new Date(date).toLocaleDateString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
