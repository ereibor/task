import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { Post } from '../types/Post';

interface PostCardProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
  isDeleting: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, onEdit, onDelete, isDeleting }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {post.title}
        </h3>
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => onEdit(post)}
            className="p-2 text-blue-500 hover:bg-blue-50 rounded-md transition-colors"
            title="Edit post"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => onDelete(post.id)}
            disabled={isDeleting}
            className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50"
            title="Delete post"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-500">ID: {post.id}</span>
      </div>
    </div>
  );
};

export default PostCard;