import { NavLink } from 'react-router-dom';

function ErrorMessage({ isErrorPage }: { isErrorPage: boolean }) {
  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col justify-center items-center">
      <h2 className="text-5xl text-lime-50">
        {isErrorPage ? 'Something went wrong!' : 'Page not found!'}
      </h2>
      <NavLink
        to="/"
        className="bg-gray-300 text-gray-900 hover:bg-gray-700 hover:text-gray-100 shadow-lg shadow-gray-500 rounded p-2 mt-10"
      >
        Back to home page
      </NavLink>
    </div>
  );
}

export default ErrorMessage;
