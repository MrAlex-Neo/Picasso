// InfiniteScrollPosts.js
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from '../../redux/api';
import { useSpring, animated, config } from 'react-spring';
import { Container, Paper } from '@mui/material';
import { useInView } from 'react-intersection-observer';

import './MainPage.css';

const InfiniteScrollPosts = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [visiblePosts, setVisiblePosts] = React.useState(10);
  const [ref, inView] = useInView();

  const loadMorePosts = useCallback(() => {
    if (inView && posts) {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
    }
  }, [inView, posts]);

  const animatedProps = useSpring({
    width: '100%',
    config: config.molasses,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container className="scroll-container">
      <animated.div style={animatedProps}>
        <Paper elevation={3} className="paper">
          {Array.from({ length: visiblePosts }).map((_, index) => (
            <div key={index} >
              {posts?.map((post, idx) => (
                <div key={idx}>
                  <h2>{post.id}. {post.title}</h2>
                  <div className='flex'>
                     <p>{post.body}</p>
                    <Link className="linkBox" to={`/posts/${post.id}`}>
                      <p className="link">просмотр</p> 
                    </Link>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          ))}
        </Paper>
      </animated.div>
      <div ref={ref} style={{ height: '10px' }} />
    </Container>
  );
};

export default InfiniteScrollPosts;
