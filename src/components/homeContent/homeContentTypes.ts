import { Variants } from 'framer-motion';

export interface RepresentationTextVariantType extends Variants {
  initial: {
    opacity?: number;
    scale?: number;
  };
  animate: {
    opacity?: number;
    scale?: number;
    transition?: {
      duration?: number;
    };
  };
}

export interface AboutVariantType extends Variants {
  initial: {
    y?: number;
  };
  animate: {
    y?: number;
    transition?: {
      duration?: number;
      delay?: number;
    };
  };
}

export interface AboutImageVariantType extends Variants {
  initial: {
    x?: number;
    opacity?: number;
  };
  animate: {
    x?: number;
    opacity?: number;
    transition?: {
      duration?: number;
      delay?: number;
    };
  };
}

export interface AboutTextVariantType extends Variants {
  initial: {
    x?: number;
    opacity?: number;
  };
  animate: {
    x?: number;
    opacity?: number;
    transition?: {
      duration?: number;
      delay?: number;
    };
  };
}

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
