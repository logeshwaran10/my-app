import PageOne from "../container/pageOne";
import PageTwo from "../container/pageOne";
import PageThree from "../container/pageOne";

const routes = [
    {
        path: '/',
        component: <PageOne/>
    },
    {
        path: '/pageOne',
        component: <PageOne/>
    },
    {
        path: '/pageTwo',
        component: <PageTwo/>
    },
    {
        path: '/pageThree',
        component: <PageThree/>
    }
];

export default routes;