import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import en from 'date-fns/locale/en-US';
import DOMPurify from 'dompurify';

import { init } from 'ityped';
import type { Configuration } from 'ityped';

export const isClient = (): boolean => process.client;
export const isServer = (): boolean => process.server;

// Sets target="_blank" rel="noopener noreferrer" on external links
export const handleExternalLinks = () => {
  const allLinks = Array.from(document.querySelectorAll('a'));
  if (allLinks.length > 0) {
    allLinks.forEach(link => {
      if (isClient() && link.host !== window.location.host) {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
      }
    });
  }
};

export const inlineLinks = (className: string) => {
  const elements = Array.from(document.querySelectorAll(className));
  const allLinks = new Array<HTMLElement[]>();
  elements.forEach(el => allLinks.push(Array.from(el.querySelectorAll('a'))));
  if (allLinks.length > 0) {
    allLinks.forEach(links => {
      links.forEach(link => link.classList.add('inline-link'));
    });
  }
};

export const urlize = (term: string): string => {
  if (term) return term.trim().toLowerCase().replace(/\s+/g, '-');
  else return '';
};

export const addEventToClassName = (
  className: string,
  func: Function,
  event = 'click'
): void => {
  if (isClient()) {
    const elements = Array.from(document.querySelectorAll(className));
    elements.forEach(element => element.addEventListener(event, () => func()));
  }
};
// this function get string with text [-YEAR-{2017}] and return the years of experience
export const yearsOfExperience = (text: string): string => {
  const mask: RegExpMatchArray | null = text?.match('{[0-9]+}');
  const year: number = mask
    ? Number.parseInt(mask[0].replace('{', '').replace('}', ''))
    : 1993;
  const currentYear: number = new Date()?.getFullYear();
  return text?.replace(`[-YEAR-{${year}}]`, `${currentYear - year}`);
};

export const formatDate = (
  date: string,
  dateFormat = 'MMMM, yyyy',
  locale = 'en'
): string => {
  let lc = en;
  switch (locale) {
    case 'en':
      lc = en;
      break;
    case 'es':
      lc = es;
      break;
    default:
      lc = en;
  }
  const dateT = date ? Date.parse(date) : new Date();
  return format(dateT, dateFormat, { locale: lc });
};
/**
 * Capitalize first char of string
 * @param {string} s String to capitalize
 * @returns {string}
 */
export const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
/**
 * markdownfy the string
 * @param {string} str String to markdownfy
 * @returns {string}
 */
export const markdownfy = (str: string): string =>
  isClient() ? DOMPurify.sanitize(str) : '';

export const typed = (
  element: string | Element,
  config: Configuration = { showCursor: false, strings: ['Yuniel', 'Acosta'] }
) => {
  const elementNODE =
    typeof element === 'string' ? document.querySelector(element) : element;
  if (elementNODE) elementNODE.innerHTML = '';

  if (elementNODE) init(elementNODE, config);
};
