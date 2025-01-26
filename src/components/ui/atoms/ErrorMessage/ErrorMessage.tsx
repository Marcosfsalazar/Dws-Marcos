import React from 'react';
import { ErrorWrapper } from './ErrorMessage.style';

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Something went wrong',
  onRetry,
}) => {
  return (
    <ErrorWrapper>
      <h3>{message}</h3>
      {onRetry && <button onClick={onRetry}>Tentar novamente</button>}
    </ErrorWrapper>
  );
};

export default ErrorMessage;
