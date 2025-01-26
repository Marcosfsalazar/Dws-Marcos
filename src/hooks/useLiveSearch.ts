import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from './usePosts';
import { Post } from '../types/Post';

export function useLiveSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: allPosts, isLoading, error } = usePosts();
  const [results, setResults] = useState<Post[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!allPosts) return;

    if (!searchTerm) {
      setResults([]);
      return;
    }

    const lower = searchTerm.toLowerCase();
    const filtered = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lower) ||
        post.content.toLowerCase().includes(lower),
    );
    setResults(filtered);
  }, [searchTerm, allPosts]);

  function handleSelectPost(id: string) {
    navigate(`/post/${id}`);
  }

  return {
    searchTerm,
    setSearchTerm,
    results,
    isLoading,
    error,
    handleSelectPost,
  };
}
