import axios from 'axios';
import { Author } from '../types/Author';

const API_BASE = import.meta.env.VITE_API_BASE;

export async function getAllAuthors(): Promise<Author[]> {
  const response = await axios.get(`${API_BASE}/authors`);
  return response.data;
}

export async function getAuthorById(id: string) {
  const response = await axios.get<Author>(`${API_BASE}/authors/${id}`);
  return response.data;
}
