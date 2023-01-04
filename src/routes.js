import React from 'react';

const Home = React.lazy(() => import('./Pages/Home'));
const Playground = React.lazy(() => import('./Pages/Playground'));
const Page404 = React.lazy(() => import('./Pages/Page404'));


const routes =[
    {
        path: '/',
        component: <Home/>,
    },
    {
        path: '/code/:folderId/:playgroundId',
        component: <Playground/>,
    },
    {
        path: '*',
        component: <Page404/>,
    }
]

export default routes;