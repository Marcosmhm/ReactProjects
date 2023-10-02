import { useEffect } from "react";

const InfiniteScroll = ({ onScrollEnd, isLoading }) => {
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    onScrollEnd();
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);
};

export default InfiniteScroll;