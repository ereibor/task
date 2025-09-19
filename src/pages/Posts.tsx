import React, { useState } from 'react';
import { Plus, AlertCircle } from 'lucide-react';
import {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from '../store/postsApi';
import type { Post } from '../types/Post';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import Toast from '../components/Toast';

const Posts: React.FC = () => {
  // Local state management
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [postsLimit, setPostsLimit] = useState(10);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  // RTK Query hooks - renamed error to isError to follow RTK Query conventions
  const { data: posts = [], isLoading, isError } = useGetPostsQuery({
    limit: postsLimit,
    search: searchTerm,
  });

  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  // Show toast notification
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
  };

  // Handle creating a new post
  const handleCreatePost = async (postData: { title: string; body: string }) => {
    try {
      await createPost({
        ...postData,
        userId: 1, // Default user ID
      }).unwrap();
      setShowCreateForm(false);
      showToast('Post created successfully!', 'success');
    } catch (error) {
      console.error('Create post error:', error);
      showToast('Failed to create post. Please try again.', 'error');
    }
  };

  // Handle updating an existing post
  const handleUpdatePost = async (postData: { title: string; body: string }) => {
    if (!editingPost) return;
    
    try {
      await updatePost({
        id: editingPost.id,
        ...postData,
        userId: editingPost.userId,
      }).unwrap();
      setEditingPost(null);
      showToast('Post updated successfully!', 'success');
    } catch (error) {
      console.error('Update post error:', error);
      showToast('Failed to update post. Please try again.', 'error');
    }
  };

  // Handle deleting a post
  const handleDeletePost = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    try {
      await deletePost(id).unwrap();
      showToast('Post deleted successfully!', 'success');
    } catch (error) {
      console.error('Delete post error:', error);
      showToast('Failed to delete post. Please try again.', 'error');
    }
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  // Handle pagination
  const handleLoadMore = () => {
    setPostsLimit(prev => prev + 10);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Post Manager</h1>
          <p className="text-gray-600">Manage your posts with full CRUD functionality</p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex-1">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              onClear={handleClearSearch}
            />
          </div>
          <button
            onClick={() => setShowCreateForm(true)}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2 justify-center"
          >
            <Plus size={20} />
            Create Post
          </button>
        </div>

        {/* Create Post Form */}
        {showCreateForm && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
            <PostForm
              onSubmit={handleCreatePost}
              onCancel={() => setShowCreateForm(false)}
              isLoading={isCreating}
              submitLabel="Create Post"
            />
          </div>
        )}

        {/* Edit Post Form */}
        {editingPost && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
            <PostForm
              initialPost={editingPost}
              onSubmit={handleUpdatePost}
              onCancel={() => setEditingPost(null)}
              isLoading={isUpdating}
              submitLabel="Update Post"
            />
          </div>
        )}

        {/* Posts List */}
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <div className="text-center py-12">
            <div className="text-red-500 mb-4">
              <AlertCircle size={48} className="mx-auto mb-2" />
              <p className="text-lg">Failed to load posts</p>
              <p className="text-sm text-gray-600">Please try again later</p>
            </div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found</p>
            {searchTerm && (
              <p className="text-sm text-gray-400 mt-2">
                Try adjusting your search terms
              </p>
            )}
          </div>
        ) : (
          <>
            <div className="grid gap-6 mb-8">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onEdit={setEditingPost}
                  onDelete={handleDeletePost}
                  isDeleting={isDeleting}
                />
              ))}
            </div>

            {/* Load More Button */}
            {!searchTerm && posts.length >= postsLimit && (
              <div className="text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Load More Posts
                </button>
              </div>
            )}
          </>
        )}

        {/* Toast Notifications */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Posts;