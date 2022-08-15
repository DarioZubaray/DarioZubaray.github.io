import React from 'react';
import { BlogCard } from '../ui/BlogCard';
import { posts } from '../../data/blogger';

export const BlogScreen = () => {
    return (
        <div className="row animate__animated animate__fadeIn">
            {
                posts.items.map((post, i) => (
                    <BlogCard post={post} key={ 'blog-card-' + i } />
                ))
            }
        </div>
    )
}
