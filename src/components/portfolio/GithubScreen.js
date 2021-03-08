import React, { useState, useEffect } from "react";
import { Error } from "../shared/Error";
import { GithubProfileCard } from "../ui/GithubProfileCard";
import { GithubReposCard } from "../ui/GithubReposCard";
import GithubSkeletonCard from "../ui/GithubSkeletonCard";

export const GithubScreen = () => {
    const [data, setData] = useState({
        user: { name: ''}, repos: [], status: false
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
        const userResult = await fetch('https://api.github.com/users/DarioZubaray');
        const statusResult = userResult.status !== 200 ? userResult.status : false;

        const userJson = await userResult.json();
    
        const reposResult = await fetch('https://api.github.com/users/DarioZubaray/repos?per_page=6&sort=created');
        const reposJson = await reposResult.json();

        setData({user: userJson, repos: reposJson, status: statusResult});
        setLoading(false);
        };

        fetchData();
    }, []);

    const {user, repos, status} = data;

    if (status) {
        return <Error status={status} />
    }

    return (
        <>
            {loading && <GithubSkeletonCard />}
            {!loading &&
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
            }
        </>
    )
};
