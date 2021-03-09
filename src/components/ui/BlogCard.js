import React from 'react';
import moment from 'moment';

export const BlogCard = ({post}) => {
    return (
        <div className="col-md-4 mt-2 rounded">
            <div className="card h-100 rounded">
                <div className="overflow">
                    {
                        post.images[0] ? 
                        ( <img src={post.images[0].url} alt={post.title} className="card-img-top rounded" /> )
                        : (<img src="/static/img/blogger.png" alt="blogger post" className="card-img-top rounded" />)
                    }
                </div>
                <div className="card-body">
                    <h4>{post.title}</h4>
                    <p>{moment(post.published).fromNow()}</p>
                </div>
                <div className="card-footer">
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-block">Read</a>
                </div>
            </div>
        </div>
    )
}
