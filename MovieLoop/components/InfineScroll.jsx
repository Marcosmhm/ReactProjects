import { useEffect } from "react";

const InfiniteScroll = ({ onScrollEnd, isLoading }) => {
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    onScrollEnd();
  };

  useEffect(() => {
    let isAborted = false

    if (!isAborted) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    
    return () => {
      isAborted = true
    }
  }, [isLoading]);
};

export default InfiniteScroll;