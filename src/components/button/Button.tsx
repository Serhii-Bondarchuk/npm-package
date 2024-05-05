import React from 'react';
import { ButtonType } from './button.types';
import { useButtonStyles } from './useButtonStyles';

const Button = ({
  onClick,
  children,
  variant = 'primary',
  size = 'small',
  label = 'Button',
  fullWidth = false,
  styles,
  disabled,
  id,
  ...props
}: ButtonType) => {
  const { className } = useButtonStyles({
    onClick,
    children,
    variant,
    size,
    label,
    fullWidth,
    styles,
    disabled,
    id,
  });

  // const buttonAttr = {
  //   tabIndex: 0,
  // };

  return (
    <>
      <button
        onClick={onClick}
        className={className}
        style={styles}
        disabled={disabled}
        data-test="button_test"
        id={id}
        // {...buttonAttr}
        {...props}
      >
        {children || label}
      </button>
    </>
  );
};

export default Button;
