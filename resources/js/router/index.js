import Router from 'vue-router';
import Avaliator from '../components/Avaliator.vue';
import Dashboard from "../components/Dashboard";

export default new Router({
    mode:'history',
    routes:[
        {
            path:'*',
            component: Avaliator,
        },
        {
            path:'/dashboard',
            name: 'dashboard',
            component: Dashboard,
        }
    ]
})
