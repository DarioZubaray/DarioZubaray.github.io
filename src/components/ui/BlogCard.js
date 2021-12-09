import React, { useEffect, useState } from 'react';
import moment from 'moment';
import noImage from '../../static/blogger.png';
import noInternetConnection from '../../static/no-internet.png';

export const BlogCard = ({post}) => {
    // TODO: add loader while checking 
    // if there is intenet connection 
    // and there is an image available in post.images object
    const [connectionAvailable, setConnectionAvailable] = useState(false);
    useEffect(() => {
        setConnectionAvailable(navigator.onLine);
    }, []);

    const [imageAvailable, setImageAvailable] = useState(false);
    useEffect(() => {
        setImageAvailable(!!post.images[0]);
    }, [setImageAvailable, post.images]);

    console.log(`connection available: ${connectionAvailable}`);
    console.log(`image available: ${imageAvailable}`);

    const [isLoaded, setIsLoaded] = useState(false);
    const handleOnLoad = () => {
        console.log('handleOnLoad');
        setIsLoaded(!isLoaded);
    }

    return (
        <div className="col-md-4 mt-2 rounded">
            <div className="card h-100 rounded">
                <div className="overflow">
                    {
                        imageAvailable
                        ? (
                            connectionAvailable
                            ? (
                            <img
                                src={post.images[0].url}
                                alt={post.title}
                                className="card-img-top rounded"
                                onLoad={ handleOnLoad }
                            />
                            )
                            : (<img
                                src={noInternetConnection}
                                alt="blogger post"
                                className="card-img-top rounded" />)
                        
                        )
                        : (<img
                            src={noImage}
                            alt="blogger post"
                            className="card-img-top rounded" />)
                    }
                </div>
                <div className="card-body">
                    <h4>{post.title}</h4>
                    <p>{moment(post.published).fromNow()}</p>
                </div>
                <div className="card-footer">
                    <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary btn-block">Read</a>
                </div>
            </div>
        </div>
    )
}
