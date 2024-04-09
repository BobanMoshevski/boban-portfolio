import { Variants } from 'framer-motion';

export interface ProjectDetailsDescriptionType {
  title?: string;
  description?: string;
  languagesAndUtilitiesList?: string[];
  projectFunctionalities?: string[];
  gitPath?: string;
  deploy?: string;
}

export interface ProjectDetailsResponsiveImagesType {
  desktopVersionSrc?: string;
  desktopVersionAlt?: string;
  tabletVersionSrc?: string;
  tabletVersionAlt?: string;
  mobileVersionSrc?: string;
  mobileVersionAlt?: string;
}

export interface AnimationVariantType extends Variants {
  initial: {
    x?: number;
    y?: number;
    opacity?: number;
  };
  animate: {
    x?: number;
    y?: number;
    opacity?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}
