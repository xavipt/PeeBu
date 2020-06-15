import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        transactions:[],
        notclassifiedTransactions:'',
        countsOfCategories:[0,0,0,0,0,0,0,0,0,0,0],
        top5:[],
        categories: [
            "cabeleireiro",
            "restauracao",
            "saude",
            "entretenimento",
            "escola",
            "casa",
            "animais",
            "mecanica",
            "supermercado",
            "roupas",
            "outro"
        ],
    },
    getters:{
        transactions: state =>{
            return state.transactions;
        },
        c: state =>{
            return state.notclassifiedTransactions;
        },
        categories: state=>{
            return state.categories;
        },
        countsOfCategories: state=>{
            return state.countsOfCategories;
        },
        top5: state=>{
          return state.top5;
        },

    },
    mutations:{
        loadTransactions(state) {
            axios
                .get('https://5e5d229a97d2ea00147971d0.mockapi.io/sq/transactions')
                .then(transactions => transactions.data)
                .then(transactions => {
                    state.transactions = transactions;
                    for(var i =0; i< state.transactions.length; i++){
                        state.transactions[i].classified = false;
                        state.transactions[i].categorie = "";
                    }
                    state.notclassifiedTransactions = transactions.length;
                })
        },
        fillTransactionsArrays(state,countsOfCategories){
            for(var i = 0; i < countsOfCategories.length; i++){
                state.countsOfCategories[i] = [countsOfCategories[i]];
            }
        },
        fillTop5(state,top5){
            state.top5 = top5.sort(function(a, b){return b[1]-a[1]});
            state.top5 = state.top5.slice(0, 5);
            console.log(state.top5)
        }
    },
    actions:{
        loadTransactions(context){
            context.commit('loadTransactions')
        },
        fillTransactionsArrays(context,countsOfCategories){
            context.commit('fillTransactionsArrays',countsOfCategories)
        },
        fillTop5(context,top5){
            context.commit('fillTop5',top5)
        },
    },
})
