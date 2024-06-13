// CommentCard.js
import React, { useEffect, useState } from 'react';
import { getPostOrCommentById } from '@/firebase/entities/post';
import timeAgo from '@/utils/dateConversion'; // Assuming you have a utility to handle time ago format

const CommentCard = ({ idComment, usr }) => {
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
        <div className="comment bg-gray-100 p-3 rounded-lg shadow flex items-start mb-2">
            <style jsx>{`
                .comment-body {
                    overflow-wrap: break-word;
                    word-break: break-word;
                    white-space: pre-wrap;
                }
            `}</style>
            {usr.photoUrl && (
                <img
                    src={usr.photoUrl}
                    alt={`${usr.name} ${usr.surname}`}
                    className="w-8 h-8 rounded-full mr-3"
                />
            )}
        
            <div>
                <p className="text-sm font-semibold text-gray-900">{usr.name} {usr.surname}</p>
                <p className="comment-body text-gray-800">{comment.body}</p>
                <p className="comment-time text-gray-500 text-xs">{comment.timeAgoText}</p>
            </div>
        </div>
    );
};

export default CommentCard;
