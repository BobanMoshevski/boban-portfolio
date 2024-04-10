import {
  AboutInformationType,
  ProjectsDataType,
} from '../src/util/projectsDataTypes/projectsDataTypes';

export const aboutInformation: AboutInformationType = {
  aboutText:
    'My name is Boban Moshevski. You being here means that you want to get to know about me and my experiences. My skills include HTML, CSS, SCSS, Less, Bootstrap, Tailwand, Javascript, JQuery, Typescript, React js, React Query, Jest, React Router, Next js, Node js, GraphQL as well as the fundamentals of Java. My curiosity and dedication provided me with the perfect platform to develop myself in all of these different proffessions, as I try to constantly improve myself. I bring passion into work, as well as never give-up attitude to the challenges.',
  imagePath: './boban-image/Boban.jpg',
  imageName: 'Boban image',
};

export const projectsData: ProjectsDataType[] = [
  {
    id: 1,
    projectTitle: 'Landing page for educational company',
    projectCart: {
      imageSrc: './projects-images/project-1/project-img.png',
      imageAlt: 'Landing page for educational company image',
      description:
        'A static webpage designed to inform the user of the upcoming events hosted by the company.',
    },
    to: '/project1',
    projectDetail: {
      projectImages: {
        desktopVersionSrc:
          './projects-images/project-1/desktop-project-image.png',
        desktopVersionAlt: 'Project desktop image',
        tabletVersionSrc:
          './projects-images/project-1/tablet-project-image.png',
        tabletVersionAlt: 'Project tablet image',
        mobileVersionSrc:
          './projects-images/project-1/mobile-project-image.png',
        mobileVersionAlt: 'Project mobile image',
      },
      description:
        'Development of a landing page, which is designed by a UX/UI designer. The landing page is about events. The events type is meet-ups which are organized by Creative Hub. The landing page is responsive on Desktop, Tablet and Mobile.',
      languagesAndUtilities: ['HTML', 'CSS', 'Bootstrap 4'],
    },
    pathToGit:
      'https://github.com/BobanMoshevski/Landing-Page-For-Educational-Company',
    deploy: 'https://landing-page-for-educational-company.netlify.app/',
  },
  {
    id: 2,
    projectTitle: 'Shop Section for Events Landing page',
    projectCart: {
      imageSrc: './projects-images/project-2/project-img.png',
      imageAlt: 'Shop Section for Events Landing page image',
      description:
        'A dynamic landing page, allowing the user to get informed about upcoming events, add to cart, and buy tickets through the website. The ecommerce functionality is implemented using JavaScript.',
    },
    to: '/project2',
    projectDetail: {
      projectImages: {
        desktopVersionSrc:
          './projects-images/project-2/desktop-project-image.png',
        desktopVersionAlt: 'Project desktop image',
        tabletVersionSrc:
          './projects-images/project-2/tablet-project-image.png',
        tabletVersionAlt: 'Project tablet image',
        mobileVersionSrc:
          './projects-images/project-2/mobile-project-image.png',
        mobileVersionAlt: 'Project mobile image',
      },
      description:
        "The meet-ups are live events and occur at different time on different places & the design will be implemented on the Creative Hub's existing page. These events will take place at various locations in different cities across Macedonia. These meet-ups are Industry-oriented and the industries are connected to the Academies that Creative Hub offers. Those would be: UX/UI Design, Front-end development, Digital Marketing, JAVA, Power Bi, Human Resources and Graphic Design. The shop sections for landing page is responsive on desktop, tablet and mobile and have functionality.",
      languagesAndUtilities: ['HTML', 'CSS', 'Bootstrap 4', 'JavaScript'],
      projectFunctionalities: [
        'Register',
        'Log in',
        'Academies page',
        'Cart modal',
        'Add to cart',
      ],
    },
    pathToGit:
      'https://github.com/BobanMoshevski/Shop-Section-For-Events-Landing-Page',
    deploy: 'https://shop-section-for-events-landing-page.netlify.app/',
  },
  {
    id: 3,
    projectTitle: 'Marketplace',
    projectCart: {
      imageSrc: './projects-images/project-3/project-img.png',
      imageAlt: 'Marketplace image',
      description:
        'Marketplace application with sign up, and login functionalities, as well as various functions allowing users to buy, edit, add and delete products. Built using the React framework.',
    },
    to: '/project3',
    projectDetail: {
      projectImages: {
        desktopVersionSrc:
          './projects-images/project-3/desktop-project-image.png',
        desktopVersionAlt: 'Project desktop image',
        tabletVersionSrc:
          './projects-images/project-3/tablet-project-image.png',
        tabletVersionAlt: 'Project tablet image',
        mobileVersionSrc:
          './projects-images/project-3/mobile-project-image.png',
        mobileVersionAlt: 'Project mobile image',
      },
      description:
        'Explore React Marketplace, a dynamic application featuring seamless sign-up and login functionalities. This platform empowers users to effortlessly buy, edit, add, and delete products. Leveraging the React framework, the app promises a smooth and interactive experience for users engaging in diverse marketplace activities. Local project.',
      languagesAndUtilities: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Material UI',
        'Jest',
        'Node js',
        'Express',
        'JSON Web Token',
      ],
      projectFunctionalities: [
        'Register',
        'Log in',
        'Authentication & Authorization',
        'Cart modal',
        'Add/Edit/Delete to cart',
        'Dark/Light mode',
        'Sorting products',
      ],
    },
    pathToGit: 'https://github.com/BobanMoshevski/marketplace',
    deploy: '',
  },
  {
    id: 4,
    projectTitle: 'Travel List',
    projectCart: {
      imageSrc: './projects-images/project-4/project-img.png',
      imageAlt: 'Travel list image',
      description:
        'The travel list project is a simple tool to jot down, organize, and easily delete items for your trips. It helps streamline your travel preparations by allowing you to collect essential items, and activities, and then conveniently delete them as you tick off your checklist. Travel planning made efficient and hassle-free!',
    },
    to: '/project4',
    projectDetail: {
      projectImages: {
        desktopVersionSrc:
          './projects-images/project-4/desktop-project-image.png',
        desktopVersionAlt: 'Project desktop image',
        tabletVersionSrc:
          './projects-images/project-4/tablet-project-image.png',
        tabletVersionAlt: 'Project tablet image',
        mobileVersionSrc:
          './projects-images/project-4/mobile-project-image.png',
        mobileVersionAlt: 'Project mobile image',
      },
      description:
        'Introducing Travel list, a straightforward project designed for easy itemization, organization, and deletion of travel essentials. This tool simplifies your travel preparations, allowing you to compile crucial items and activities. As you check items off your list, Travel list lets you conveniently delete them, making travel planning efficient and hassle-free!',
      languagesAndUtilities: ['HTML', 'CSS', 'JavaScript', 'React'],
      projectFunctionalities: [
        'Add/Delete item to list',
        'Sorting items',
        'Clearing the list',
        'Calculating statistics',
      ],
    },
    pathToGit: 'https://github.com/BobanMoshevski/travel-list',
    deploy: 'https://travel-list01.netlify.app/',
  },
  {
    id: 5,
    projectTitle: 'Eat and split the bill',
    projectCart: {
      imageSrc: './projects-images/project-5/project-img.png',
      imageAlt: 'Eat and split the bill',
      description:
        'Eat and split the bill, simplifies group dining expenses by instantly dividing the bill. Input your orders, customize splits, and effortlessly know who owes what. Enjoy stress-free dining with Eat and split the bill, the quickest way to share costs and keep things simple.',
    },
    to: '/project5',
    projectDetail: {
      projectImages: {
        desktopVersionSrc:
          './projects-images/project-5/desktop-project-image.png',
        desktopVersionAlt: 'Project desktop image',
        tabletVersionSrc:
          './projects-images/project-5/tablet-project-image.png',
        tabletVersionAlt: 'Project tablet image',
        mobileVersionSrc:
          './projects-images/project-5/mobile-project-image.png',
        mobileVersionAlt: 'Project mobile image',
      },
      description:
        'Eat and split the bill, takes the hassle out of group dining expenses by swiftly dividing the bill. Input your orders, personalize expense splits, and effortlessly stay in the know about who owes what. Dive into carefree dining experiences with Eat and split the bill, the easiest way to split costs and keep group finances hassle-free.',
      languagesAndUtilities: ['HTML', 'CSS', 'JavaScript', 'React'],
      projectFunctionalities: [
        'Add new friend to friends list',
        'Calculating statistics',
      ],
    },
    pathToGit: 'https://github.com/BobanMoshevski/eat-and-split-the-bill',
    deploy: 'https://eat-and-split-bill01.netlify.app/',
  },
  {
    id: 6,
    projectTitle: 'Movies watch list',
    projectCart: {
      imageSrc: './projects-images/project-6/project-img.png',
      imageAlt: 'Movies watch list image',
      description:
        'The Movie Watch List is a user-friendly web application designed to help movie enthusiasts organize and track the movies they want to watch, have watched, and their top favorites. The application provides a comprehensive platform for users to manage their movie preferences efficiently.',
    },
    to: '/project6',
    projectDetail: {
      projectImages: {
        desktopVersionSrc:
          './projects-images/project-6/desktop-project-image.png',
        desktopVersionAlt: 'Project desktop image',
        tabletVersionSrc:
          './projects-images/project-6/tablet-project-image.png',
        tabletVersionAlt: 'Project tablet image',
        mobileVersionSrc:
          './projects-images/project-6/mobile-project-image.png',
        mobileVersionAlt: 'Project mobile image',
      },
      description:
        'The Movie Watch List is a user-friendly web application designed to help movie enthusiasts organize and track the movies they want to watch, have watched, and their top favorites. The application provides a comprehensive platform for users to manage their movie preferences efficiently.',
      languagesAndUtilities: [
        'HTML',
        'CSS',
        'Bootstrap 5',
        'JavaScript',
        'jQuery',
      ],
      projectFunctionalities: [
        'Add to Watch List: Users can easily browse through a vast database of movies and add them to their watch list with just a click of a button. Each movie entry includes essential information such as title, genre, release year, director, and a brief synopsis.',
        'Watched List: Once users have watched a movie from their watch list, they can mark it as watched. The movie will then be moved to their watched list, providing a clear distinction between movies yet to be seen and those already viewed.',
        'Top Movies List: Users can curate a personalized list of their top favorite movies. By marking certain movies as favorites, users can create a dedicated list showcasing their most beloved films.',
        'Search Functionality: The application offers a robust search feature that allows users to easily find specific movies within the database. Users can search by movie title.',
      ],
    },
    pathToGit: 'https://github.com/BobanMoshevski/movies-watch-list',
    deploy: 'https://movies-watch-list01.netlify.app/',
  },
];
