import { Outlet } from 'react-router-dom';
import MainNavigation from '../../components/mainNavigation/MainNavigation';

function RootLayout() {
  return (
    <div className="min-h-[90vh]">
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default RootLayout;
