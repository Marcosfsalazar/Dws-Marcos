import axios from 'axios';
import { Post } from '../types/Post';

const API_BASE = import.meta.env.VITE_API_BASE;

export async function getAllPosts() {
  const response = await axios.get(`${API_BASE}/POSTS`);
  return response.data;
}

export async function getPostById(id: string) {
  const response = await axios.get<Post>(`${API_BASE}/POSTS/${id}`);
  return response.data;
}
