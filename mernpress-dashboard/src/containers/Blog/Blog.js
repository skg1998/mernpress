import React from 'react';
import Post from './BlogCard';
import Grid from '@material-ui/core/Grid';

const Blog = (props) => {
    const { posts } = props;
    console.log('post', posts, posts[0].data);
    return (
        <>
            <Grid container spacing={3}>
                {posts[0].data.map((post) => (
                    <Grid item xs={3}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Blog;