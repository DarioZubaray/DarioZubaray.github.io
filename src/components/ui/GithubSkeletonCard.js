import React from 'react';
import Skeleton from 'react-loading-skeleton';

const GithubSkeletonCard = () => {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body text-center">
            <Skeleton circle={true} height={250} width={250} />
            <Skeleton height={30} width={220} />
            <Skeleton height={36} width={`80%`} />
            <Skeleton width={`60%`} />
          </div>
        </div>

        <div className="col-md-8">
          <div className="card card-body">
            {
              Array(6).fill().map((item, index) => (
                <div className="card rounded my-2" key={ 'skeleton-' + index }>
                  <div className="card-body">
                    <Skeleton height={30} width={20} /><span> </span>
                    <br/>
                    <Skeleton height={30} width={220} />
                    <br/>
                    <Skeleton height={30} width={220} />
                    <br/>
                    <Skeleton height={36} width={`80%`} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  };
  export default GithubSkeletonCard;