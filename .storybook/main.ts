import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.resolve!.alias = {
      ...config.resolve!.alias,
      '@/components': path.resolve(__dirname, '../components'),
      '@/stories': path.resolve(__dirname, '../stories'),
      '@/styles': path.resolve(__dirname, '../styles'),
    };

    // config.module!.rules!.push({
    //   test: /\.css$/,
    //   use: [
    //     {
    //       loader: 'postcss-loader',
    //       options: {
    //         ident: 'postcss',
    //         plugins: [require('tailwindcss'), require('autoprefixer')],
    //       },
    //     },
    //   ],
    //   include: path.resolve(__dirname, '../'),
    // });

    return config;
  },
};
export default config;
