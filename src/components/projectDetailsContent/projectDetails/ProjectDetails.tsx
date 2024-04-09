import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { projectsData } from '../../../../data/projectsData';
import ProjectDetailsDescription from '../projectDetailsDescription/ProjectDetailsDescription';
import ProjectDetailsResponsiveImages from '../projectDetailsResponsiveImages/ProjectDetailsResponsiveImages';

function ProjectDetails() {
  const { pathname } = useLocation();
  const projectId: number | undefined = Number(pathname.split('/project')[1]);

  const [projectDetail] = projectsData.filter(
    (project) => project.id === projectId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col w-[100%] min-h-[100vh] overflow-hidden lg:flex-row">
      <ProjectDetailsDescription
        title={projectDetail?.projectTitle}
        description={projectDetail.projectDetail.description}
        languagesAndUtilitiesList={
          projectDetail.projectDetail.languagesAndUtilities
        }
        projectFunctionalities={
          projectDetail.projectDetail.projectFunctionalities
        }
        gitPath={projectDetail.pathToGit}
        deploy={projectDetail.deploy}
      />
      <ProjectDetailsResponsiveImages
        desktopVersionSrc={
          projectDetail.projectDetail.projectImages.desktopVersionSrc
        }
        desktopVersionAlt={
          projectDetail.projectDetail.projectImages.desktopVersionAlt
        }
        tabletVersionSrc={
          projectDetail.projectDetail.projectImages.tabletVersionSrc
        }
        tabletVersionAlt={
          projectDetail.projectDetail.projectImages.tabletVersionAlt
        }
        mobileVersionSrc={
          projectDetail.projectDetail.projectImages.mobileVersionSrc
        }
        mobileVersionAlt={
          projectDetail.projectDetail.projectImages.mobileVersionAlt
        }
      />
    </div>
  );
}

export default ProjectDetails;
