import { useLocation } from 'react-router-dom';
import MainNavigation from '../../components/mainNavigation/MainNavigation';
import ErrorMessage from '../../components/errorContetnt/ErrorMessage';

function ErrorPage() {
  const { pathname } = useLocation();
  const isErrorPage = pathname === '/error';

  return (
    <>
      <MainNavigation />
      <ErrorMessage isErrorPage={isErrorPage} />
    </>
  );
}

export default ErrorPage;
