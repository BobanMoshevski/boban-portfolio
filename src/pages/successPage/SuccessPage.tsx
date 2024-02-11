import { Link } from 'react-router-dom';
import MainNavigation from '../../components/mainNavigation/MainNavigation';

function SuccessPage() {
  return (
    <>
      <MainNavigation />
      <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-5xl">Thank you for sending!</h2>
        <Link className="btn btn-square btn-outline mt-4 p-2" to="/">
          Back home
        </Link>
      </div>
    </>
  );
}

export default SuccessPage;
