import React from 'react';

export const Error = ({status}) => {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card card-body text-center">
                    {
                        status ?
                        (
                            <>
                                <h1>{status}</h1>
                                <p className="text-center">Could not load my page</p>
                            </>
                        )
                        :
                        (<p className="text-center">Could not get this page</p>)
                    }
                </div>
            </div>
        </div>
    )
}
