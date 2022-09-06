import React from 'react'

const NewsItems = (props) => {
    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
        <div className='my-4'>
            <div className="card">

                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>

                    <span className=" badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>  {source}
                    </span>

                </div>
                <img src={!imageurl ? "https://cdn.cnn.com/cnnnext/dam/assets/220829222414-01-flood-mississippi-0829-super-tease.jpg" : imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn  btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems
