// CommentCard.js
import React, { useEffect, useState } from 'react';
import { getPostOrCommentById } from '@/firebase/entities/post';
import timeAgo from '@/utils/dateConversion'; // Assuming you have a utility to handle time ago format

const CommentCard = ({ idComment }) => {
    const [comment, setComment] = useState({});

    useEffect(() => {
        const fetchComment = async () => {
            const commentData = await getPostOrCommentById(idComment, 'comments');
            if (commentData) {
                setComment({
                    ...commentData,
                    timeAgoText: timeAgo(commentData.timeOfSubmission?.seconds || 0)
                });
            }
        };

        fetchComment();
    }, [idComment]);

    return (
        <div className="comment bg-gray-100 p-3 rounded-lg shadow">
            <p className="comment-body text-gray-800">{comment.body}</p>
            <p className="comment-time text-gray-500 text-xs">{comment.timeAgoText}</p>
        </div>
    );
};

export default CommentCard;
