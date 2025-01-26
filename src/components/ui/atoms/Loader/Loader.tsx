import React from 'react';
import { LoaderWrapper, Spinner } from './Loader.style';

export interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = 'Loading...' }) => {
  return (
    <LoaderWrapper>
      <Spinner />
      <span>{text}</span>
    </LoaderWrapper>
  );
};

export default Loader;
