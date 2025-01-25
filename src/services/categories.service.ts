import axios from 'axios';
import { Category } from '../types/Category';

const API_BASE = import.meta.env.VITE_API_BASE;

export async function getAllCategories(): Promise<Category[]> {
  const response = await axios.get(`${API_BASE}/categories`);
  return response.data;
}

export async function getCategoryById(id: string) {
  const response = await axios.get<Category>(`${API_BASE}/categories/${id}`);
  return response.data;
}
