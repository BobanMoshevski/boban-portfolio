import { projectsData } from '../../../../data/projectsData';
import ProjectCart from '../projectCart/ProjectCart';
import './Portfolio.css';

function Portfolio() {
  const projects = projectsData;

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <h2 className="text-center pt-16 pb-10 text-4xl">Portfolio</h2>

      <div className="grid grid-cols-1 mx-auto overflow-hidden p-5 gap-5 project-cart sm:w-[100%] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCart key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
