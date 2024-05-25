import React, { useEffect, useState } from "react";
import Heart from "react-animated-heart";
import CommentCard from "./commentCard";
import { v4 as uuidv4 } from 'uuid';
import {
    createPostOrComment,
    addCommentToPost,
    getPostOrCommentById
} from "@/firebase/entities/post";

const PostCard = ({ post }) => {
    const [isClick, setClick] = useState(post.likedUserIds.includes("currentUserId"));
    const [comment, setComment] = useState("");
    const [postState, setPost] = useState(post);
    const [timeAgo, setTimeAgo] = useState(post.timeAgoText);

    useEffect(() => {

        // Any time post/comment changes, load in the latest version of post
        console.log(isClick)

    }, [])

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const updatePostState = async () => {
        const data = await getPostOrCommentById(postState.id, 'posts');
        console.log(data)
        setPost(data)
        return data;
    };

    const handleSendComment = async () => {
        if (!comment.trim()) return; // Avoid sending empty comments

        try {
            // Current timestamp broken down as Firestore expects
            const timestamp = new Date();
            const timeOfSubmission = {
                seconds: Math.floor(timestamp.getTime() / 1000),
                nanoseconds: (timestamp.getTime() % 1000) * 1000000
            };

            const commentData = {
                body: comment,
                parentPostId: post.id,
                timeOfSubmission,
                userId: 'sample-user-id' // ACTUAL USER ID
            };
            const newCommentId = await createPostOrComment(commentData, 'comments');

            // Add the new comment ID to the post's commentIds list

            console.log("Post id??", post.id)
            await addCommentToPost(post.id, newCommentId);
            setComment('');

            updatePostState()

        } catch (error) {
            console.error("Error handling the comment submission:", error);
        }
    };

    const onHeartClick = () => {
        // By default, shows if clicked.
        // Handle like/unlike logic here

        setClick(!isClick);
    };


    return (
        <div className="post-container bg-white shadow-lg rounded-lg p-4 my-4">
            <div className="post-body mb-4">
                <p className="text-lg font-semibold text-gray-900">{postState.body}</p>
                <p className="text-sm font-medium text-gray-500">{timeAgo}</p>
            </div>
            <div className="post-likes flex items-center mb-4">
                <span className="text-sm font-medium text-gray-700 mr-2">{postState.likedUserIds.length} Likes</span>
                <Heart isClick={isClick} onClick={onHeartClick} />
            </div>
            <div className="post-comments">
                <input
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Type your comment here"
                    className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-l-lg p-2 flex-grow"
                />
                <button
                    onClick={() => {
                        handleSendComment();
                        setComment("");
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-lg transition-colors duration-150"
                >
                    Send
                </button>

                {/* Map CommentCards */}


                <div className="comment-container">
                    {postState.commentIds.slice().reverse().map((commentId) => (
                        <CommentCard key={commentId} idComment={commentId} />
                    ))}
                </div>



            </div>
        </div>
    );
};

export default PostCard;
