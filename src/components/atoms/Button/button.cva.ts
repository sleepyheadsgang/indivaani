import { cva } from "class-variance-authority";

const button = cva('', {
  variants: {
    variant: {
      "primary": ["bg-primary text-alt"]
    },
    size: {
      "small": ["text-sm", "px-2", "py-1"],
      "medium": ["text-md", "px-4", "py-2"],
      "large": ["text-lg", "px-6", "py-3"],
    },
    roundness: {
      'full': ['rounded-full'],
      'pill': ['px-4 py-2 rounded-full']
    }
  }
});

export default button;