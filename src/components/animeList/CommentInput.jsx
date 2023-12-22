'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Rating from './Rating';

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState('');
  const [created, setCreated] = useState(false);
  const [error, setError] = useState('');

  const [rating, setRating] = useState('');

  const countRef = useRef(0);

  useEffect(() => {
    if (rating) countRef.current++;
  }, [rating]);

  const router = useRouter();

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    if (comment.length < 3) {
      setError('Comment must be at least 3 characters');
      return;
    }
    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
      rating,
    };
    const response = await fetch('/api/v1/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const postComment = await response.json();

    if (postComment.isCreated) {
      setCreated(true);
      setComment('');
      setRating(0);
      setError('');
      router.refresh();
    }
    return;
  };
  return (
    <div className="flex flex-col gap-2 max-w-[350px]">
      {created && <p className="text-color-secondary">Comment posted</p>}
      <label htmlFor="comment">Comment</label>
      <Rating maxRating={5} onSetRating={setRating} />
      {comment.length < 3 && <p className="text-color-secondary">{error}</p>}
      <textarea
        value={comment}
        placeholder="Write a comment..."
        name="comment"
        id="comment"
        cols="30"
        rows="3"
        className="rounded-xl text-color-dark p-2"
        onChange={handleComment}
      />
      <button
        className="bg-color-secondary text-color-light rounded-xl p-2"
        onClick={handlePost}>
        Post
      </button>
    </div>
  );
};

export default CommentInput;
