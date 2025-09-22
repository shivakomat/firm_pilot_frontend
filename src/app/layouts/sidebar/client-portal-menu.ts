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
        label: 'MENUITEMS.PORTAL.PROJECTS.TEXT',
        icon: 'bx-briefcase',
        link: '/client-portal/projects',
    },
    {
        id: 4,
        label: 'MENUITEMS.PORTAL.INTAKE.TEXT',
        icon: 'bx-edit',
        link: '/client-portal/tax-intake',
    },
    {
        id: 5,
        label: 'MENUITEMS.PORTAL.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/client-portal/chat',
    },
    {
        id: 6,
        isLayout: true
    },
    {
        id: 7,
        label: 'MENUITEMS.PORTAL.LOGOUT.TEXT',
        icon: 'bx-log-out',
        link: 'logout',
        isLogout: true
    }
];
