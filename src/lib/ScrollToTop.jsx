import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollToTop;
