import { makeStyles, makeResetStyles, shorthands, mergeClasses } from '@griffel/react';
import { ButtonState } from './button.types';

const useButtonBaseStyles = makeResetStyles({
  fontFamily: 'sans-serif',
  display: 'inline-flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  justifyContent: 'center',
  textDecorationLine: 'none',
  verticalAlign: 'middle',
  margin: 0,
  overflow: 'hidden',
  outlineStyle: 'none',
  borderRadius: '10px',
  padding: '10px',
  color: 'white',
  boxShadow: '5px 5px 5px gray',

  ':hover': {
    cursor: 'pointer',
  },

  ':hover:active': {
    outlineStyle: 'none',
  },

  ':focus-visible': {
    ...shorthands.outline(
      '2px',
      'solid',
      'black'
    ),
    outlineOffset: '2px'
  },


  transitionDuration: '100ms',
  transitionTimingFunction: 'ease-in-out',
  transitionProperty: 'background-color, border-color, color',

});

const useButtonVariantStyles = makeStyles({
  primary: {
    backgroundColor: 'blue',
    ...shorthands.border(
      'none'
    ),
    ':hover': {
      opacity: '0.8'
    },

    ':hover:active': {
      ...shorthands.borderColor('transparent'),
      backgroundColor: 'Highlight',
      boxShadow: 'none',
    },

    '@media (forced-colors: active)': {
      backgroundColor: 'Highlight',
      ...shorthands.borderColor('HighlightText'),
      color: 'HighlightText',
      forcedColorAdjust: 'none',

      ':hover': {
        backgroundColor: 'HighlightText',
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
      },

      ':hover:active': {
        backgroundColor: 'HighlightText',
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
      },
    },
  },
  secondary: {
    backgroundColor: 'green',
    ...shorthands.border(
      'none'
    ),

    ':hover': {
      opacity: '0.8'
    },

    ':hover:active': {
      backgroundColor: '#03c703',
      boxShadow: 'none'
    },

    // High contrast styles
    '@media (forced-colors: active)': {
      ':focus': {
        ...shorthands.borderColor('ButtonText'),
      },
      ':hover': {
        backgroundColor: 'HighlightText',
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
        forcedColorAdjust: 'none',
      },
      ':hover:active': {
        backgroundColor: 'HighlightText',
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
        forcedColorAdjust: 'none',
      },
    },
  },
  danger: {
    backgroundColor: '#b11f1f',
    ...shorthands.border(
      'none'
    ),

    ':hover': {
      opacity: '0.8'
    },

    ':hover:active': {
      backgroundColor: 'rgb(185 100 100)',
      boxShadow: 'none',
    },

    '@media (forced-colors: active)': {
      backgroundColor: 'Highlight',
      ...shorthands.borderColor('HighlightText'),
      color: 'HighlightText',
      forcedColorAdjust: 'none',

      ':hover': {
        backgroundColor: 'HighlightText',
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
      },

      ':hover:active': {
        backgroundColor: 'HighlightText',
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
      },
    },
  }
});

const useButtonSizeStyles = makeStyles({
  small: {
    minWidth: '100px',
    fontSize: '15px',
  },
  large: {
    minWidth: '120px',
    fontSize: '20px'
  },
});

const useButtonDisabledStyles = makeStyles({
  // Base styles
  base: {
    cursor: 'not-allowed',

    ':hover': {
      cursor: 'not-allowed',
    },

    ':hover:active': {
      cursor: 'not-allowed',
    },
  },

  // High contrast styles
  highContrast: {
    '@media (forced-colors: active)': {
      backgroundColor: 'ButtonFace',
      ...shorthands.borderColor('GrayText'),
      color: 'GrayText',

      ':focus': {
        ...shorthands.borderColor('GrayText'),
      },

      ':hover': {
        backgroundColor: 'ButtonFace',
        ...shorthands.borderColor('GrayText'),
        color: 'GrayText',
      },

      ':hover:active': {
        backgroundColor: 'ButtonFace',
        ...shorthands.borderColor('GrayText'),
        color: 'GrayText',
      },
    },
  },

  primary: {
    backgroundColor: '#f4f4f4',
    color: 'GrayText',
    boxShadow: 'none',
    ...shorthands.border('1px', 'solid', 'gray'),

    ':hover': {
      color: 'GrayText',
      opacity: 1
    },

    ':hover:active': {
      ...shorthands.borderColor('gray'),
      backgroundColor: '#f4f4f4',
    },
  },

  secondary: {
    backgroundColor: '#f4f4f4',
    color: 'GrayText',
    boxShadow: 'none',
    ...shorthands.border('1px', 'solid', 'gray'),

    ':hover': {
      color: 'GrayText',
      opacity: 1
    },

    ':hover:active': {
      ...shorthands.borderColor('gray'),
      backgroundColor: '#f4f4f4',
    },
  },

  danger: {
    backgroundColor: '#f4f4f4',
    color: 'GrayText',
    boxShadow: 'none',
    ...shorthands.border('1px', 'solid', 'gray'),

    ':hover': {
      color: 'GrayText',
      opacity: 1
    },

    ':hover:active': {
      ...shorthands.borderColor('gray'),
      backgroundColor: '#f4f4f4',
    },
  },
});

const useButtonFullwidthStyles = makeStyles({
  fullWidth: {
    width: '100%',
  }
})

export const useButtonStyles = (state: ButtonState): ButtonState => {
  const baseClassName = useButtonBaseStyles();
  const variantStyles = useButtonVariantStyles();
  const sizeStyles = useButtonSizeStyles();
  const disabledStyles = useButtonDisabledStyles();
  const fullWidthStyle = useButtonFullwidthStyles()

  // To do in future
  // const iconBaseClassName = useIconBaseClassName();

  const { variant, size, fullWidth, disabled } = state;

  state.className = mergeClasses(
    baseClassName,
    fullWidth && fullWidthStyle.fullWidth,
    variant && variantStyles[variant],
    size && sizeStyles[size],
    disabled && variant && disabledStyles[variant],
    disabled && disabledStyles.base,
    disabled && disabledStyles.highContrast,
  );

  return state;
};
