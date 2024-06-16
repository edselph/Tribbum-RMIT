import React, { useEffect, useState } from "react";
import Heart from "react-animated-heart";
import CommentCard from "./commentCard";
import { v4 as uuidv4 } from 'uuid';
import {
    createPostOrComment,
    addCommentToPost,
    getPostOrCommentById,
    toggleUserLike
} from "@/firebase/entities/post";
import { containsProfanity } from "@/utils/profanityFilter";

const PostCard = ({ post, usr }) => {
    const [isClick, setClick] = useState(post.likedUserIds.includes("currentUserId"));
    const [comment, setComment] = useState("");
    const [postState, setPost] = useState(post);
    const [timeAgo, setTimeAgo] = useState(post.timeAgoText);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Any time post/comment changes, load in the latest version of post
        updatePostState()
    }, [isClick]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const updatePostState = async () => {
        const data = await getPostOrCommentById(postState.id, 'posts');
        setPost(data);
        return data;
    };

    const handleSendComment = async () => {

        if (containsProfanity(comment)) {
            setShowPopup(true);
            return;
        }

        if (!comment.trim()) return; // Avoid sending empty comments

        try {
            // Current timestamp broken down as Firestore expects
            const timestamp = new Date();
            const timeOfSubmission = {
                seconds: Math.floor(timestamp.getTime() / 1000),
                nanoseconds: (timestamp.getTime() % 1000) * 1000000
            };

            const commentData = {   // Also add likedUserList
                likedUserIds: [],
                body: comment,
                parentPostId: post.id,
                timeOfSubmission,
                userId: usr.id
            };
            const newCommentId = await createPostOrComment(commentData, 'comments');

            // Add the new comment ID to the post's commentIds list
            await addCommentToPost(post.id, newCommentId);
            setComment('');

            updatePostState();
        } catch (error) {
            console.error("Error handling the comment submission:", error);
        }
    };

    const onHeartClick = async () => {
        // By default, shows if clicked.
        // Handle like/unlike logic here
        await toggleUserLike(postState.id, "currentUserId");
        setClick(!isClick);
    };

    const navigateToUserProfile = () => {
        window.location.href = `/tribu/profile/${usr.id}`;
    };


    return (
        <div className="post-container bg-white shadow-lg rounded-lg p-4 my-4 w-full mx-auto">

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setShowPopup(false)}>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full z-50" onClick={e => e.stopPropagation()}>
                        <h2 className="text-lg font-semibold mb-4">Atención</h2>
                        <p>En Tribbum, queremos asegurarnos de que todos los usuarios se sientan cómodos y
                            respetados. Por lo tanto, no toleramos el uso de palabras ofensivas o cualquier
                            comportamiento que pueda ser perjudicial para la experiencia y seguridad del usuario.
                            Si no entiendes o no estás de acuerdo con los valores de esta aplicación, te recomendamos
                            que elimines tu cuenta y dejes de participar en ella. Esto te ayudará a encontrar otras
                            alternativas que puedan satisfacer tus necesidades.</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowPopup(false)}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .post-body p,
                .comment-container p {
                    overflow-wrap: break-word;
                    word-break: break-word;
                    white-space: pre-wrap;
                }
            `}</style>
            <div className="post-header flex items-center mb-4">
                {usr.photoUrl && (
                    <img
                        src={usr.photoUrl}
                        alt={`${usr.name} ${usr.surname}`}
                        className="w-10 h-10 rounded-full mr-4"
                        onClick={navigateToUserProfile}
                    />
                )}
                <div>
                    <p className="text-lg font-semibold text-gray-900">{usr.name} {usr.surname}</p>
                    <p className="text-sm font-medium text-gray-500">{timeAgo}</p>
                </div>
            </div>
            <div className="post-body mb-4">
                <p className="text-lg font-semibold text-gray-900">{postState.body}</p>
            </div>
            <div className="post-likes flex items-center mb-4 ml-auto">
                <span className="text-sm font-medium text-gray-700 mr-2">{postState.likedUserIds.length} Likes</span>
                <Heart isClick={isClick} onClick={onHeartClick} />
            </div>
            <div className="post-comments flex items-center">
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
            </div>
            <div className="comment-container mt-4">
                {postState.commentIds.slice().reverse().map((commentId) => (
                    <CommentCard usr={usr} key={commentId} idComment={commentId} />
                ))}
            </div>
        </div>
    );
};

export default PostCard;
