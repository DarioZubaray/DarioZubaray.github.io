import React from 'react';
import { useTranslation } from 'react-i18next';

export const GithubProfileCard = ({user}) => {
    const { t } = useTranslation();
    return (
        <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url}
                    alt="Github avatar"
                    className="rounded-circle"
            />
            <p>{user.bio}</p>
            <a href={user.blog} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary my-2">{t('github.myBlog')}</a>
            <a href={user.html_url} target="_balnk" rel="noopener noreferrer" className="btn btn-outline-secondary">{t('github.goToGithub')}</a>
        </div>
    )
}
