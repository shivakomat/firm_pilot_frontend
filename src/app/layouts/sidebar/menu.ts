import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        link: '/dashboards/default',
    },
    {
        id: 8,
        isLayout: true
    },
    // {
    //     id: 40,
    //     label: 'MENUITEMS.PROJECTS.TEXT',
    //     icon: 'bx-briefcase-alt-2',
    //     subItems: [
    //         {
    //             id: 41,
    //             label: 'MENUITEMS.PROJECTS.LIST.GRID',
    //             link: '/projects/grid',
    //             parentId: 40
    //         },
    //         {
    //             id: 42,
    //             label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
    //             link: '/projects/list',
    //             parentId: 40
    //         },
    //         {
    //             id: 43,
    //             label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
    //             link: '/projects/overview',
    //             parentId: 40
    //         },
    //         {
    //             id: 44,
    //             label: 'MENUITEMS.PROJECTS.LIST.CREATE',
    //             link: '/projects/create',
    //             parentId: 40
    //         }
    //     ]
    // },
    // {
    //     id: 45,
    //     label: 'MENUITEMS.TASKS.TEXT',
    //     icon: 'bx-task',
    //     link: '/tasks/list',
    //     // subItems: [
    //     //     {
    //     //         id: 46,
    //     //         label: 'MENUITEMS.TASKS.LIST.TASKLIST',
    //     //         link: '/tasks/list',
    //     //         parentId: 45
    //     //     },
    //     //     {
    //     //         id: 48,
    //     //         label: 'MENUITEMS.TASKS.LIST.CREATETASK',
    //     //         link: '/tasks/create',
    //     //         parentId: 45
    //     //     }
    //     // ]
    // },
    // {
    //     id: 49,
    //     label: 'MENUITEMS.CONTACTS.TEXT',
    //     icon: 'bxs-user-detail',
    //     link: '/contacts/list',
    //     // subItems: [
    //     //     {
    //     //         id: 50,
    //     //         label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
    //     //         link: '/contacts/grid',
    //     //         parentId: 49
    //     //     },
    //     //     {
    //     //         id: 51,
    //     //         label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
    //     //         link: '/contacts/list',
    //     //         parentId: 49
    //     //     },
    //     //     {
    //     //         id: 52,
    //     //         label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
    //     //         link: '/contacts/profile',
    //     //         parentId: 49
    //     //     }
    //     // ]
    // },
    {
        id: 50,
        label: 'MENUITEMS.CLIENTS.TEXT',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 51,
                label: 'MENUITEMS.CLIENTS.TEXT',
                link: '/clients/list',
                parentId: 50
            },
            {
                id: 52,
                label: 'MENUITEMS.INVITATIONS.TEXT',
                link: '/invitations',
                parentId: 50
            },
            {
                id: 53,
                label: 'MENUITEMS.TAXCONSULTANT.LIST.INTAKEFORMS',
                link: '/tax-consultant/intake-forms',
                parentId: 50
            },
            {
                id: 54,
                label: 'MENUITEMS.TAXCONSULTANT.LIST.CLIENTDOCUMENTS',
                link: '/tax-consultant/client-documents',
                parentId: 50
            }
        ]
    },
    {
        id: 10,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'bx-calendar',
        link: '/calendar',
    },
    {
        id: 30,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'bx-envelope',
        link: '/email/inbox',
        // subItems: [
        //     {
        //         id: 31,
        //         label: 'MENUITEMS.EMAIL.LIST.INBOX',
        //         link: '/email/inbox',
        //         parentId: 30
        //     },
        //     {
        //         id: 32,
        //         label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
        //         link: '/email/read/1',
        //         parentId: 30
        //     },
        //     {
        //         id: 33,
        //         label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
        //         badge: {
        //             variant: 'success',
        //             text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
        //         },
        //         parentId: 30,
        //         subItems: [
        //             {
        //                 id: 34,
        //                 label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
        //                 link: '/email/basic',
        //                 parentId: 30
        //             },
        //             {
        //                 id: 35,
        //                 label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
        //                 link: '/email/alert',
        //                 parentId: 30
        //             },
        //             {
        //                 id: 36,
        //                 label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
        //                 link: '/email/billing',
        //                 parentId: 30
        //             }
        //         ]
        //     }
        // ]
    },
    {
        id: 37,
        label: 'MENUITEMS.INVOICES.TEXT',
        icon: 'bx-receipt',
        link: '/invoices/list',
        // subItems: [
        //     {
        //         id: 38,
        //         label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
        //         link: '/invoices/list',
        //         parentId: 37
        //     },
        //     {
        //         id: 39,
        //         label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
        //         link: '/invoices/detail',
        //         parentId: 37
        //     },
        // ]
    },
    {
        id: 30,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/chat',
    },
];

