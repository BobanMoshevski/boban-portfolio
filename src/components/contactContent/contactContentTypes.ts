import { Variants } from 'framer-motion';

export interface AnimationType extends Variants {
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

export interface InformationPropsType {
  info: string;
  infoText: string;
  margin: boolean;
}

export interface LabelFormPropsType {
  labelFor: string;
  onChange: (e: string) => void;
}
