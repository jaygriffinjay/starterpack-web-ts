import type { ComponentType } from 'react';
import { HomePage } from './pages/Home/HomePage';
import { ThemeEditorPage } from './pages/ThemeEditor/ThemeEditorPage';
import { DocsPage } from './pages/Docs/DocsPage';
import { DocsPage2 } from './pages/Docs/DocsPage2';

export interface Route {
  path: string;
  component: ComponentType;
  label: string;
  devOnly?: boolean;
}

export const routes: Route[] = [
  {
    path: '/',
    component: HomePage,
    label: 'Home',
    devOnly: false,
  },
  // Only exists in routes array during dev builds
  ...(import.meta.env.DEV ? [
    {
      path: '/theme-editor',
      component: ThemeEditorPage,
      label: 'Theme Editor',
      devOnly: true,
    },
    {
      path: '/docs',
      component: DocsPage,
      label: 'Documentation',
      devOnly: true,
    },
    {
      path: '/docs/build-log',
      component: DocsPage2,
      label: 'Build Log',
      devOnly: true,
    },
  ] : []),
];

// Returns all routes (already filtered by conditional spread above)
export const getAvailableRoutes = () => routes;
