import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  render: (data) => {
    if (data.fullWidth) {
      return (
        <div
          style={{
            width: '55vw',
            textAlign: 'center',
          }}
        >
          <Button {...data} />
        </div>
      );
    }
    return <Button {...data} />;
  },
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout

    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      description: '**options:**',
      type: 'string',
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      table: {
        defaultValue: {
          summary: 'primary',
        },
        type: {
          summary: 'primary | secondary | danger',
        },
      },
    },

    fullWidth: {
      type: 'string',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },

    size: {
      description: '**options:**',
      type: 'string',
      control: 'select',
      options: ['small', 'large'],
      table: {
        defaultValue: {
          summary: 'small',
        },
        type: {
          summary: 'small | large',
        },
      },
    },

    label: {
      type: 'string',
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Button',
        },
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      type: 'string',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Button',
    variant: 'danger',
    label: 'Button Label',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Button',
    fullWidth: true,
  },

  decorators: [
    (Story) => {
      return (
        <div
        // style={{
        //   width: '50vw',
        //   textAlign: 'center',
        // }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
    variant: 'primary',
    onClick: fn(),
  },
};
