import Layout from '@/layout';

export default [
    {
        path: '/',
        component: Layout,
        children: [
            {
                name: 'main',
                path: '',
                component: () => import('../pages/index.vue')
            }
        ]
    },
    {
        path: '/category',
        component: Layout,
        children: [
            {
                name: 'list',
                path: '/',
                component: () => import('../pages/Board/list/index.vue')
            }
        ]
    },
    {
        path: '*',
        name: 'error',
        component: () => import('../layout/error')
    }
]
