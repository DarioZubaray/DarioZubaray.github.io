import React, { useState, useEffect } from "react";
import { GithubProfileCard } from "../ui/GithubProfileCard";
import { GithubReposCard } from "../ui/GithubReposCard";

export const GithubScreen = () => {
    const [data, setData] = useState({
        user: { name: ''}, repos: [], status: false
    });

    useEffect(() => {
        const fetchData = async () => {
        const userResult = await fetch('https://api.github.com/users/DarioZubaray');
        const statusResult = userResult.status !== 200 ? userResult.status : false;

        const userJson = await userResult.json();
    
        const reposResult = await fetch('https://api.github.com/users/DarioZubaray/repos?per_page=6&sort=created');
        const reposJson = await reposResult.json();

        setData({user: userJson, repos: reposJson, status: statusResult});
        };

        fetchData();
    }, []);

    const {user, repos, status} = data;

    if (status) {
        return <h1>Error</h1> 
    }
    return (
        <div className="row">
            <div className="col-md-4">
                {
                    user && <GithubProfileCard user={user} />
                }
            </div>
            <div className="col-md-8">
                {
                    repos && <GithubReposCard repos={repos} />
                }
            </div>
        </div>
    )
};
