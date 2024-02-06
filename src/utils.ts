// import { composeRenderProps } from 'react-aria-components';
import { cva } from '../styled-system/css';

// function twMerge(...classes) {
//   return [...new Set(classes.join(' ').split(' '))].join(' ').trim();
// }

// function twMerge(...classes: (string | undefined)[]) {
//   return Array.from(new Set(classes.join(' ').split(' '))).join(' ').trim();
// }

export const focusRing = cva({
  base: {
    outlineColor: 'blue.600',
    outlineStyle: 'solid',
    _dark: { outlineColor: 'blue.500' },
    // _forcedColors: { outline: '[Highlight]' },
    outlineOffset: '2px',
  },
  variants: {
    isFocusVisible: {
      false: { outlineWidth: '0px' },
      true: { outlineWidth: '2px' },
    },
  },
});

// export function composeTailwindRenderProps<T>(className: string | ((v: T) => string) | undefined, tw: string): string | ((v: T) => string) {
//   return composeRenderProps(className, (className) => twMerge(tw, className));
// }
