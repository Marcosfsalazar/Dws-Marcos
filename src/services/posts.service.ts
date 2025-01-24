import axios from 'axios';
import { Post } from '../types/Post';

const API_BASE = import.meta.env.BASE_URL;

export async function getAllPosts() {
  const response = await axios.get(`${API_BASE}/posts`);
  return response.data;
}

export async function getPostById(id: string) {
  const response = await axios.get<Post>(`${API_BASE}/posts/${id}`);
  return response.data;
}
