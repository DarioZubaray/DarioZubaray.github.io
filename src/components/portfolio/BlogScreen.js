import React from 'react';
import { BlogCard } from '../ui/BlogCard';
import { posts } from '../../data/blogger';

export const BlogScreen = () => {
    return (
        <div className="row">
            {
                posts.items.map((post, i) => (
                    <BlogCard post={post} key={i} />
                ))
            }
        </div>
    )
}
