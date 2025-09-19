import React, { useState } from 'react';
import { Save } from 'lucide-react';
import type { Post } from '../types/Post';

interface PostFormProps {
  initialPost?: Partial<Post>;
  onSubmit: (post: { title: string; body: string }) => void;
  onCancel: () => void;
  isLoading: boolean;
  submitLabel: string;
}

const PostForm: React.FC<PostFormProps> = ({ 
  initialPost = {}, 
  onSubmit, 
  onCancel, 
  isLoading, 
  submitLabel 
}) => {
  const [title, setTitle] = useState(initialPost.title || '');
  const [body, setBody] = useState(initialPost.body || '');

  const handleSubmit = () => {
    if (!title.trim() || !body.trim()) return;
    onSubmit({ title: title.trim(), body: body.trim() });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter post title..."
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <textarea
          id="body"
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter post content..."
          required
        />
      </div>
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading || !title.trim() || !body.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
        >
          <Save size={16} />
          {isLoading ? 'Saving...' : submitLabel}
        </button>
      </div>
    </div>
  );
};

export default PostForm;