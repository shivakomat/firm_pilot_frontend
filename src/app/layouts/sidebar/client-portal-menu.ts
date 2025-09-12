import { MenuItem } from './menu.model';

export const CLIENT_PORTAL_MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.PORTAL.DASHBOARD.TEXT',
        icon: 'bx-home-circle',
        link: '/client-portal/dashboard',
    },
    {
        id: 2,
        label: 'MENUITEMS.PORTAL.DOCUMENTS.TEXT',
        icon: 'bx-file',
        link: '/client-portal/documents',
    },
    {
        id: 3,
        label: 'MENUITEMS.PORTAL.INTAKE.TEXT',
        icon: 'bx-edit',
        link: '/client-portal/intake',
    },
    {
        id: 4,
        label: 'MENUITEMS.PORTAL.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/client-portal/chat',
    },
    {
        id: 5,
        isLayout: true
    },
    {
        id: 6,
        label: 'MENUITEMS.PORTAL.LOGOUT.TEXT',
        icon: 'bx-log-out',
        link: '/auth/login'
    }
];
