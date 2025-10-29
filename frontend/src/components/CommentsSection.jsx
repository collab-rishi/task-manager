import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const CommentsSection = ({ taskId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all comments
  const fetchComments = async () => {
    try {
      const response = await axiosInstance.get(`${API_PATHS.TASKS.GET_COMMENTS}/${taskId}`);
      setComments(response.data.comments || []);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [taskId]);

  // Add new comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    try {
      setLoading(true);
      await axiosInstance.post(`${API_PATHS.TASKS.GET_COMMENTS}/${taskId}`, { content: newComment });
      setNewComment("");
      fetchComments();
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setLoading(false);
    }
  };

  // Edit comment
  const handleEditComment = async (commentId) => {
    if (!editingContent.trim()) return;
    try {
      setLoading(true);
      await axiosInstance.put(`${API_PATHS.TASKS.GET_COMMENTS}/${taskId}/${commentId}`, {
        content: editingContent,
      });
      setEditingCommentId(null);
      setEditingContent("");
      fetchComments();
    } catch (error) {
      console.error("Error editing comment:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete comment
  const handleDeleteComment = async (commentId) => {
    try {
      setLoading(true);
      await axiosInstance.delete(`${API_PATHS.TASKS.GET_COMMENTS}/${taskId}/${commentId}`);
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="font-semibold mb-2">Comments</h3>

      {/* Add comment input */}
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 border rounded p-2 mr-2"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>

      {/* Comments list */}
      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet.</p>
      ) : (
        <ul>
          {comments.map((c) => (
            <li key={c._id} className="border-b py-2">
              {editingCommentId === c._id ? (
                <div className="flex mb-2">
                  <input
                    type="text"
                    className="flex-1 border rounded p-2 mr-2"
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                  />
                  <button
                    onClick={() => handleEditComment(c._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingCommentId(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-700">{c.content}</p>
                  <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
                    <span>{c.author} • {new Date(c.createdAt).toLocaleString()}</span>
                    <div>
                      <button
                        onClick={() => {
                          setEditingCommentId(c._id);
                          setEditingContent(c.content);
                        }}
                        className="mr-2 text-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteComment(c._id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsSection;
