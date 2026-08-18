import React from 'react';
import { useTranslation } from 'react-i18next';

export const Error = ({status}) => {
    const { t } = useTranslation();
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card card-body text-center">
                    {
                        status ?
                        (
                            <>
                                <h1>{status}</h1>
                                <p className="text-center">{t('error.couldNotLoad')}</p>
                            </>
                        )
                        :
                        (<p className="text-center">{t('error.couldNotGet')}</p>)
                    }
                </div>
            </div>
        </div>
    )
}
