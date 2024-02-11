export interface ProjectsType {
  id?: number;
  projectTitle?: string;
  projectCart?: {
    imageSrc: string;
    imageAlt: string;
    description: string;
  };
  to?: string;
  projectDetail?: {
    projectImages?: {
      desktopVersionSrc: string;
      desktopVersionAlt: string;
      tabletVersionSrc: string;
      tabletVersionAlt: string;
      mobileVersionSrc: string;
      mobileVersionAlt: string;
    };
    description: string;
  };
}
