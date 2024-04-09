import { Link } from 'react-router-dom';
import { InformationPropsType } from '../contactContentTypes';

function Information({ info, infoText, margin }: InformationPropsType) {
  const contactName: boolean = info === 'name';
  const contactPhone: boolean = info === 'phone';
  const contactEmail: boolean = info === 'email';
  const contactGithub: boolean = info === 'github';
  const contactLinkedin: boolean = info === 'linkedin';
  const isGithubOrLinkedin: boolean = info === 'github' || info === 'linkedin';

  return (
    <div className={`flex flex-wrap items-center ${margin ? 'my-4' : 'my-0'}`}>
      {contactName && (
        <svg
          className="h-4 w-4 md:h-5 md:w-5 text-gray-100"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />{' '}
          <circle cx="12" cy="7" r="4" />{' '}
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      )}

      {contactPhone && (
        <svg
          className="h-4 w-4 md:h-5 md:w-5 text-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      )}

      {contactEmail && (
        <svg
          className="h-4 w-4 md:h-5 md:w-5 text-gray-100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{' '}
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )}

      {contactGithub && (
        <svg
          className="h-4 w-4 md:h-5 md:w-5 text-gray-100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )}

      {contactLinkedin && (
        <svg
          className="h-4 w-4 md:h-5 md:w-5 text-gray-100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{' '}
          <rect x="2" y="9" width="4" height="12" />{' '}
          <circle cx="4" cy="4" r="2" />
        </svg>
      )}

      <h5 className="ml-3 text-white text-base sm:text-lg lg:text-xl">
        {infoText}
      </h5>
      {isGithubOrLinkedin && (
        <Link
          className="ml-2 text-white text-base sm:text-lg lg:text-xl"
          to={
            contactGithub
              ? 'https://github.com/BobanMoshevski'
              : 'https://www.linkedin.com/in/boban-moshevski-b63b93262/'
          }
          target="_blank"
        >
          {contactGithub
            ? 'www.github.com/BobanMoshevski'
            : 'https://www.linkedin.com/in/boban-moshevski'}
        </Link>
      )}
    </div>
  );
}

export default Information;
