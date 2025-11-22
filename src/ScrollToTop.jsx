// // src/components/ScrollToTop.js
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = () => {
//   // Extracts the `pathname` from the location object.
//   const { pathname } = useLocation();

//   // Automatically scrolls to the top whenever the `pathname` changes.
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]); // This effect runs every time the `pathname` changes.

//   return null; // This component doesn't render anything.
// };

// export default ScrollToTop;