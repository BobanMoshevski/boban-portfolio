import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../../components/homeContent/about/About';
import Portfolio from '../../components/homeContent/portfolio/Portolio';

function HomePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <About />
      <Portfolio />
    </>
  );
}

export default HomePage;
