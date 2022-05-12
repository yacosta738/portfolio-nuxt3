import type SocialMedia from './social-media';
import type Menu from './menu';

export const email = 'yunielacosta738@gmail.com';
export const socialMedia: SocialMedia[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yacosta738',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yacosta738',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yacosta738',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/yacosta738',
  },
  {
    name: 'Codepen',
    url: 'https://codepen.io/yacosta738',
  },
];
export const navMenus: Menu[] = [
  {
    name: 'index',
    title: 'about',
    hash: '#about',
    dataCypress: 'about',
  },
  {
    name: 'index',
    title: 'experience',
    hash: '#jobs',
    dataCypress: 'jobs',
  },
  {
    name: 'index',
    title: 'work',
    hash: '#projects',
    dataCypress: 'projects',
  },
  {
    name: 'index',
    title: 'last-articles',
    hash: '#last3articles',
    dataCypress: 'last3articles',
  },
  {
    name: 'index',
    title: 'contact',
    hash: '#contact',
    dataCypress: 'contact',
  },
  {
    name: 'blog',
    title: 'blog',
    hash: '',
    dataCypress: 'blog',
  },
];
export const navDelay = 1000;
export const loaderDelay = 2000;

export default { email, socialMedia, navMenus, navDelay, loaderDelay };
