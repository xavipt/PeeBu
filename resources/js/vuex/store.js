import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        transactions:[],
    },
    getters:{
        transactions: state =>{
            return state.transactions;
        }
    },
    mutations:{
        loadTransactions(state) {
            axios
                .get('https://5e5d229a97d2ea00147971d0.mockapi.io/sq/transactions')
                .then(transactions => transactions.data)
                .then(transactions => {
                    state.transactions = transactions;
                    for(var i =0; i< state.transactions.length; i++){
                        state.transactions[i].classificated = false;
                        state.transactions[i].categorie = "";
                    }
                })
        }
    },
    actions:{
        loadTransactions(context){
            context.commit('loadTransactions')
        }
    },
})
