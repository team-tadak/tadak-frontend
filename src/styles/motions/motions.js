const STAGGER_CHILDREN_ONE = 0.5;
const FADE_IN_DURATION = 0.8;

export const defaultEasing = [FADE_IN_DURATION, 0.2, 0.3, 0.5];

export const staggerOne = {
  animate: { transition: { staggerChildren: STAGGER_CHILDREN_ONE } },
};

export const staggerHalf = {
  animate: { transition: { staggerChildren: STAGGER_CHILDREN_ONE / 2 } },
};
export const staggerQuarter = {
  animate: { transition: { staggerChildren: STAGGER_CHILDREN_ONE / 4 } },
};

export const defaultFadeInVariants = {
  initial: {
    opacity: 0,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity",
  },
  animate: {
    opacity: 1,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity",
  },
  exit: {
    opacity: 0,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity",
  },
};

export const defaultFadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: FADE_IN_DURATION },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: FADE_IN_DURATION },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: FADE_IN_DURATION },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInScaleVariants = {
  initial: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInSlideToRightVariants = {
  initial: {
    opacity: 0,
    x: -30,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInSlideToLeftVariants = {
  initial: {
    opacity: 0,
    x: 30,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: FADE_IN_DURATION, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};
