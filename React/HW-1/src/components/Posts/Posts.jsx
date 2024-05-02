import React from 'react';
import { posts } from '../../utils/posts';
import Post from '../Post/Post';
import classes from "./Posts.module.css";



const Posts = () => {

    return (
        <>
            <section className={classes.posts}>
                <div className={classes.container}>
                    <h2 className={classes.posts__title}>POSTS</h2>
                    <ul className={classes.posts__list}>
                        {
                            posts && posts.map((post) => (
                                <Post {...post} key={post.id} />
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Posts
