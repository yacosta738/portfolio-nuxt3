export interface IIcons {
    name: string;
    icon: string;
}

export default class Icon implements IIcons {
    constructor(public name: string, public icon: string) {
    }
}

export const ICONS: Icon[] = [
    {
        name: 'search',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park-outline" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17z"></path><path d="M26.657 14.343A7.975 7.975 0 0 0 21 12c-2.21 0-4.21.895-5.657 2.343" stroke-linecap="round"></path><path d="M33.222 33.222l8.485 8.485" stroke-linecap="round"></path></g></svg>'
    },
    {
        name: 'close',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park-outline" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8l32 32"></path><path d="M8 40L40 8"></path></g></svg>'
    },
    {
        name: 'calendar',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park-outline" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><path d="M5 19h38v21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V19z"></path><path d="M5 9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v10H5V9z"></path><path d="M16 4v8" stroke-linecap="round"></path><path d="M32 4v8" stroke-linecap="round"></path><path d="M28 34h6" stroke-linecap="round"></path><path d="M14 34h6" stroke-linecap="round"></path><path d="M28 26h6" stroke-linecap="round"></path><path d="M14 26h6" stroke-linecap="round"></path></g></svg>'
    },
    {
        name: 'github',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park-outline" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M29.344 30.477c2.404-.5 4.585-1.366 6.28-2.638C38.52 25.668 40 22.314 40 19c0-2.325-.881-4.495-2.407-6.333c-.85-1.024 1.636-8.667-.573-7.638c-2.21 1.03-5.45 3.308-7.147 2.805A20.712 20.712 0 0 0 24 7c-1.8 0-3.532.223-5.147.635C16.505 8.232 14.259 6 12 5.029c-2.26-.97-1.026 6.934-1.697 7.766C8.84 14.605 8 16.729 8 19c0 3.314 1.79 6.668 4.686 8.84c1.93 1.446 4.348 2.368 7.054 2.822"></path><path d="M19.74 30.662c-1.158 1.275-1.738 2.486-1.738 3.633v8.716"></path><path d="M29.344 30.477c1.098 1.44 1.647 2.734 1.647 3.88v8.654"></path><path d="M6 31.216c.899.11 1.566.523 2 1.24c.652 1.074 3.074 5.062 5.825 5.062h4.177"></path></g></svg>'
    },
    {
        name: 'instagram',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" fill="currentColor"></path></svg>'
    },
    {
        name: 'twitter',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor"></path></svg>'
    },
    {
        name: 'linkedin',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor"></path></svg>'
    },
    {
        name: 'codepen',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ph" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path d="M235.9 94l-100-56.7a15.9 15.9 0 0 0-15.8 0L20.1 94a8 8 0 0 0-4.1 7v64a8 8 0 0 0 4.1 7l100 56.7a15.9 15.9 0 0 0 15.8 0l100-56.7a8 8 0 0 0 4.1-7v-64a8 8 0 0 0-4.1-7zM224 151.3L191.8 133l32.2-18.3zm-48.4-27.5L136 101.3V55.7l79.8 45.3zm-47.6 27L96.6 133l31.4-17.8l31.4 17.8zm-8-95.1v45.6l-39.6 22.5L40.2 101zm-88 59L64.2 133L32 151.3zm48.4 27.5l39.6 22.5v45.6L40.2 165zm55.6 68.1v-45.6l39.6-22.5l40.2 22.8z" fill="currentColor"></path></svg>'
    },
    {
        name: 'vuejs',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M2 3h3.5L12 15l6.5-12H22L12 21L2 3m4.5 0h3L12 7.58L14.5 3h3L12 13.08L6.5 3z" fill="currentColor"></path></svg>'
    },
    {
        name: 'graph-ql',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 5.37l-.44-.06L6 14.9c.24.21.4.48.47.78h11.06c.07-.3.23-.57.47-.78l-5.56-9.59l-.44.06M6.6 16.53l4.28 2.53c.29-.27.69-.43 1.12-.43c.43 0 .83.16 1.12.43l4.28-2.53H6.6M12 22a1.68 1.68 0 0 1-1.68-1.68l.09-.56l-4.3-2.55c-.31.36-.76.58-1.27.58a1.68 1.68 0 0 1-1.68-1.68c0-.79.53-1.45 1.26-1.64V9.36c-.83-.11-1.47-.82-1.47-1.68A1.68 1.68 0 0 1 4.63 6c.55 0 1.03.26 1.34.66l4.41-2.53l-.06-.45c0-.93.75-1.68 1.68-1.68c.93 0 1.68.75 1.68 1.68l-.06.45l4.41 2.53c.31-.4.79-.66 1.34-.66a1.68 1.68 0 0 1 1.68 1.68c0 .86-.64 1.57-1.47 1.68v5.11c.73.19 1.26.85 1.26 1.64a1.68 1.68 0 0 1-1.68 1.68c-.51 0-.96-.22-1.27-.58l-4.3 2.55l.09.56A1.68 1.68 0 0 1 12 22M10.8 4.86L6.3 7.44l.02.24c0 .71-.44 1.32-1.06 1.57l.03 5.25l5.51-9.64m2.4 0l5.51 9.64l.03-5.25c-.62-.25-1.06-.86-1.06-1.57l.02-.24l-4.5-2.58z" fill="currentColor"></path></svg>'
    },
    {
        name: 'netlify',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--bx" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M17.13 9.68L22 11.8v-.11c-.07-.24-.28-.45-.7-.87l-2-2l-2.07.87z" fill="currentColor"></path><path d="M12.2 7.24a1.31 1.31 0 0 1 .16.47l3 1.29a1.11 1.11 0 0 1 .29-.14l.48-3l-2-2l-1.95 3.3s0 .05.02.08z" fill="currentColor"></path><path d="M10.61 7a1.1 1.1 0 0 1 1-.2h.05l2.16-3.34l-.66-.66c-.42-.42-.63-.63-.87-.7a1 1 0 0 0-.63 0c-.24.07-.45.28-.87.7l-3 3c.31.14 2.5 1.06 2.78 1.19z" fill="currentColor"></path><path d="M7.49 12.29h.27a1.45 1.45 0 0 1 .29 0l2.38-3.68v-.06a1 1 0 0 1-.27-.95L9 7l-1.7-.73L5 8.61l2.51 3.66z" fill="currentColor"></path><path d="M15.11 9.85v-.08a.59.59 0 0 1 0-.14l-2.86-1.27h-.05a1.05 1.05 0 0 1-.88.47h-.17s-.05 0-.06.05L8.73 12.5v.05l6.33-2.7s.05.02.05 0z" fill="currentColor"></path><path d="M16.47 8.94a.83.83 0 0 1 .26.19l2-.84l-1.89-1.87l-.4 2.47z" fill="currentColor"></path><path d="M14.18 14.48A.91.91 0 0 1 15 14v-.05l.54-3.37l-.09-.08L9 13.15a2.76 2.76 0 0 1 .08.27z" fill="currentColor"></path><path d="M2 11.95z" fill="currentColor"></path><path d="M14.14 15.13L8.92 14v.06L13.47 21l.42-.43c.15-.92.71-4.33.78-4.72a.9.9 0 0 1-.53-.72z" fill="currentColor"></path><path d="M15.79 15.45a.88.88 0 0 1-.36.27l-.64 3.94L18.43 16z" fill="currentColor"></path><path d="M16.86 10.32a.07.07 0 0 0-.06 0a.92.92 0 0 1-.61.34v.06l-.55 3.4a.88.88 0 0 1 .34.62h.06l2.95.61l2.28-2.28a4.22 4.22 0 0 0 .65-.74z" fill="currentColor"></path><path d="M8.3 14.59a1.27 1.27 0 0 1-.86 0l-1.22 1.9l4.69 4.68a2.68 2.68 0 0 0 .87.71a1 1 0 0 0 .63 0a1.86 1.86 0 0 0 .7-.54l-4.69-6.8z" fill="currentColor"></path><path d="M13.01 21.41z" fill="currentColor"></path><path d="M6.39 13.59s.06 0 .06-.05s0 0-.06 0l-4.14-.86a7.07 7.07 0 0 0 .51.54l1.36 1.36l2.27-1z" fill="currentColor"></path><path d="M6.67 12.93a1.05 1.05 0 0 1 .2-.27v-.06C6.1 11.4 5.3 10.24 4.5 9.07l-1.75 1.75c-.42.42-.63.63-.7.87A.75.75 0 0 0 2 12l4.67 1z" fill="currentColor"></path><path d="M6.84 14.26a.61.61 0 0 1-.07-.1L4.59 15l1.08 1.1l1.17-1.82s.01-.02 0-.02z" fill="currentColor"></path></svg>'
    },
    {
        name: 'gridsome',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--file-icons" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M258.827 509.357C129.245 512.528.175 412.685.175 257.133C-4.98 128.9 102.76 5.06 254.315 2.57c58.963.093 63.202 83.154 3.712 88.7C151.696 95.66 86.724 177.022 89.88 255.716c0 102.32 83.746 166.923 166.614 164.894c81.485-2.247 139.647-58.516 158-117.517h-16.926c-25.463 0-46.108-20.348-46.108-45.444c0-25.1 20.646-45.443 46.112-45.443h67.198c24.408 0 45.018 18.687 46.686 42.338c9.213 118.238-98.863 250.575-252.628 254.813zm43.215-251.644c0-35.117-38.277-57.185-68.734-39.626s-30.457 61.693 0 79.252s68.734-4.509 68.734-39.626z" fill="currentColor"></path></svg>'
    },
    {
        name: 'nuxtjs',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M21.8 18.36L16.03 8.08c-.1-.08-.4-.65-1-.65c-.25 0-.6.1-.96.65l-.74 1.18l-2.02-3.61c-.05-.1-.4-.65-1-.65c-.25 0-.65.1-.95.65L2.18 18.31c-.05.1-.35.69-.05 1.19c.1.25.4.5 1.06.5h17.66c.1 0 .75 0 1.05-.5c.1-.24.2-.64-.1-1.14m-13.7-.05l-.15.55H3.24l7.12-12.52l2.3 4.13l-4.56 7.84m1.11.55l4.11-7.2l4.18 7.2H9.21m9.53 0l-.2-.55L14 10.46l1.03-1.73l5.72 10.13h-2.01z" fill="currentColor"></path></svg>'
    }
];