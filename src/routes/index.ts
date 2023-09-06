import { lazy } from 'react';

const Conversations = lazy(() => import('../pages/Conversations'));
const Profile = lazy(() => import('../pages/profile'));
const Settings = lazy(() => import('../pages/setting'));
const BuildChatbox = lazy(() => import('../pages/BuildChatbot'));
const PricingPlan = lazy(() => import('../pages/PricingPlan'));
const Notfound = lazy(() => import('../pages/Notfound'));

const coreRoutes = [
  {
    path: '/build-chatbots',
    title: 'Build-chatbots',
    component: BuildChatbox,
  },
  {
    path: '/conversations',
    title: 'Conversations',
    component: Conversations,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/price',
    title: 'PricingPlan',
    component: PricingPlan,
  },
  {
    path: '*',
    title: 'Notfound',
    component: Notfound,
  },
];

const routes = [...coreRoutes];
export default routes;