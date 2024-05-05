import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
  it('is first test', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
    expect(screen.getByText(/click me/i).tagName).toBe('BUTTON');
  });

  it('renders name of the Button passing via label prop', () => {
    render(<Button label="Label of the button" />);
    expect(screen.getByText(/Label of the button/i)).toBeInTheDocument();
  });

  it('renders name of the Button passing via children prop', () => {
    render(<Button children="Some text" />);
    expect(screen.getByText(/Some text/i)).toBeInTheDocument();
  });

  it('button has applied fullWidth prop', () => {
    render(<Button fullWidth={true}>This is a button</Button>);
    const button = screen.getByRole('button');
    expect(button.classList).toContain('fly5x3f');
  });

  it('can be focused', () => {
    render(<Button>Focused</Button>);
    const button = screen.getByRole('button', { name: /focused/i });
    expect(document.activeElement).not.toEqual(button);
    button.focus();
    expect(button).toHaveFocus();
    expect(document.activeElement).toEqual(button);
    button.blur();
    expect(button).not.toHaveFocus();
    expect(document.activeElement).not.toEqual(button);
  });

  it('button is disabled', () => {
    render(<Button disabled={true}>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(document.activeElement).not.toEqual(button);
    button.focus();
    expect(button).not.toHaveFocus();
  });

  it('can trigger a function on click event', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('can not trigger a function on click event when disabled', async () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled={true}>
        Click me
      </Button>
    );
    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
