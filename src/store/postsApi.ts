import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post, CreatePostRequest, UpdatePostRequest } from '../types/Post';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // Fetch posts with limit and search
    getPosts: builder.query<Post[], { limit?: number; search?: string }>({
      query: ({ limit = 10, search = '' }) => {
        const params = new URLSearchParams();
        params.append('_limit', limit.toString());
        if (search) {
          params.append('title_like', search);
        }
        return `posts?${params}`;
      },
      providesTags: ['Post'],
    }),
    
    // Create new post
    createPost: builder.mutation<Post, CreatePostRequest>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Post'],
    }),
    
    // Update existing post
    updatePost: builder.mutation<Post, UpdatePostRequest>({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['Post'],
    }),
    
    // Delete post
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;