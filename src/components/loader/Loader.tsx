import { useEffect } from 'react';
import { StyledLoader } from './loader-styles';

export default function Loader({ isLoading }: { isLoading: boolean }) {
  useEffect(() => {
    console.log(isLoading);
  });
  if (!isLoading) return null;

  return (
    <StyledLoader>
      <div className={`spinner ${isLoading ? 'spinner--run' : ''}`}></div>
    </StyledLoader>
  );
}
