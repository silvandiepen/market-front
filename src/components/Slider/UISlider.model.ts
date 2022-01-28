export interface Slide {
  background: string;
  color: string;
  image?: string;
  content?: {
    title?: string;
    description?: string;
    subtitle?: string;
  };
  isActive?: boolean;
  isNext?: boolean;
  isPrevious?: boolean;
  classes?: string[];
}

export enum SlideClassElements {
  active = "active",
  next = "next",
  prev = "prev",
  slide = "slide",
  dot = "dot",
}

export type SlideClasses = {
  [key in SlideClassElements]: string;
};
