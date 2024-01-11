import React, { useState, useEffect, useContext } from 'react';
import './ScrollToTop.scss';
import { LoadingDataContext } from '../../components/Context/Context';

const ScrollToTop = () => {
  const { loadingData } = useContext(LoadingDataContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
      <svg
        className={ loadingData ? "loading" : "scroll-button"  } 
        onClick={scrollToTop}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="110px"
        height="110px"
      >
        <path
          className="arrow"
          d="M 27.84375 11 C 27.351563 11.078125 26.992188 11.503906 27 12 L 27 20 L 5 20 C 4.449219 20 4 20.449219 4 21 L 4 29 C 4 29.550781 4.449219 30 5 30 L 27 30 L 27 38 C 27.007813 38.375 27.222656 38.710938 27.558594 38.875 C 27.894531 39.039063 28.292969 39.003906 28.59375 38.78125 L 45.59375 25.78125 C 45.832031 25.589844 45.96875 25.304688 45.96875 25 C 45.96875 24.695313 45.832031 24.410156 45.59375 24.21875 L 28.59375 11.21875 C 28.382813 11.046875 28.113281 10.96875 27.84375 11 Z"
        />
      </svg>
  );
};

export default ScrollToTop;
