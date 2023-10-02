import { useEffect } from "react";

const handleScroll = ({ fetchFunction, isLoading }) => {
  if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
    return;
  }
  return () => fetchFunction;
};
export default handleScroll