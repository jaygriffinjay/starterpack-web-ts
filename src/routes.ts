import type { ComponentType } from 'react';
import { HomePage } from './pages/Home/HomePage';
import { ThemeEditorPage } from './pages/ThemeEditor/ThemeEditorPage';

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
  {
    path: '/theme-editor',
    component: ThemeEditorPage,
    label: 'Theme Editor',
    devOnly: true,  // Only available in dev mode
  },
];

// Filter routes based on environment
export const getAvailableRoutes = () => {
  return routes.filter(route => 
    !route.devOnly || import.meta.env.DEV
  );
};
