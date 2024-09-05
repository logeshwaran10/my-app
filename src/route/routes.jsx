import PageOne from "../container/PageOne";
import PageTwo from "../container/PageTwo";
import PageThree from "../container/PageThree";

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
