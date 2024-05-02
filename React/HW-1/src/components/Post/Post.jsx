import React from 'react';
import logo from '../../images/post-image.png';
import classes from "./Post.module.css";

const Post = ({ title, description }) => {
  return (
    <li className={classes.post__item}>
      <div className={classes.post__wrap}>
        <h3 className={classes.post__title}>title: {title}</h3>
        <p className={classes.post__descr}>description: {description}</p>
      </div>
      <div className={classes.post__image}>
        <img src={logo} alt={title} />
      </div>

    </li>
  )
}

export default Post
