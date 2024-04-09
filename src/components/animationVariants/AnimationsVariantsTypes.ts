export interface AnimationVariants {
  initial?: {
    x?: number[];
    y?: number[];
  };
  animate?: {
    transition?: {
      ease?: string[] | string;
    };
  };
}
