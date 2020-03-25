import Router from 'vue-router';
import Avaliator from '../components/Avaliator.vue';

export default new Router({
    mode:'history',
    routes:[
        {
            path:'*',
            component: Avaliator,
        }
    ]
})
