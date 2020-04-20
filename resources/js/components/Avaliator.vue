<template>
    <div class="container h-90 w-100">
        <div class="row h-100 w-100">
            <div class="stickyBottom p-4">
                <button v-on:click="topFunction" type="button" class="btn btn-dark btn-circle btn-lg"><i class="fas fa-arrow-up text-white"></i></button>
            </div>

            <div class="col-md-12 p-4 w-100">
                <h2>Classifique as suas transações</h2>
            </div>
            <div class="col-md-4 p-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Transações classificadas</span>
                    <span class="badge badge-secondary bg-dark badge-pill">{{classifiedTransactions}}</span>
                </h4>
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Transações por classificar</span>
                    <span class="badge badge-secondary bg-dark badge-pill">{{notclassifiedTransactions}}</span>
                </h4>
            </div>
            <div class="col-md-12 w-100 h-100">
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Entidade</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Fonte</th>
                        <th scope="col">Data</th>
                        <th scope="col">Acções</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(transaction, indexI) in transactions" :key="indexI">
                        <th scope="row">{{transaction.id}}</th>
                        <td>{{transaction.entity}}</td>
                        <td>{{transaction.amount}}</td>
                        <td>{{transaction.type}}</td>
                        <td>{{transaction.source}}</td>
                        <td>{{transaction.createdAt}}</td>
                        <td>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-2 p-1" v-for="(button, indexJ) in buttons">
                                        <button :key="indexJ" class="btn buttonDimensions btn-light border border-dark"
                                                :class="{'btn-dark':(transaction.i == indexI &&transaction.j == indexJ)}"
                                                v-on:click="classificate(transaction,button.categorie,indexI,indexJ)">
                                            <i :class=button.icon></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="col-md-12 w-100 p-4">
                    <button type="button" class="btn btn-dark">Validar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                classifiedTransactions: 0,
                buttons:[
                    {
                        categorie:'cabeleireiro',
                        icon: 'fas fa-cut fa-lg p-1'
                    },
                    {
                        categorie:'restauracao',
                        icon: 'fas fa-utensils fa-lg p-1'
                    },
                    {
                        categorie:'saude',
                        icon: 'fas fa-heart fa-lg p-1'
                    },
                    {
                        categorie:'entretenimento',
                        icon: 'fas fa-gamepad fa-lg p-1'
                    },
                    {
                        categorie:'escola',
                        icon: 'fas fa-laptop-code fa-lg p-1'
                    },
                    {
                        categorie:'casa',
                        icon: 'fas fa-home fa-lg p-1'
                    },
                    {
                        categorie:'animais',
                        icon: 'fas fa-paw fa-lg p-1'
                    },
                    {
                        categorie:'mecanica',
                        icon: 'fas fa-wrench fa-lg p-1'
                    },
                    {
                        categorie:'supermercado',
                        icon: 'fas fa-shopping-cart fa-lg p-1'
                    },
                    {
                        categorie:'roupas',
                        icon: 'fas fa-tshirt fa-lg p-1'
                    },
                    {
                        categorie:'outro',
                        icon: 'fas fa-plus fa-lg p-1'
                    },
                ]
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        computed:{
            transactions(){
                return this.$store.getters.transactions
            },
            notclassifiedTransactions(){
                return this.$store.getters.transactions.length
            },
        },
        methods: {
            classificate: function (transaction,categorie,indexI,indexJ) {

                if(this.transactions[transaction.id -1].classified){
                    Vue.set(this.transactions[transaction.id -1], 'i', indexI)
                    Vue.set(this.transactions[transaction.id -1], 'j', indexJ)
                    Vue.set(this.transactions[transaction.id -1], 'classified', true)
                    Vue.set(this.transactions[transaction.id -1], 'categorie', categorie)
                }else{
                    Vue.set(this.transactions[transaction.id -1], 'i', indexI)
                    Vue.set(this.transactions[transaction.id -1], 'j', indexJ)
                    Vue.set(this.transactions[transaction.id -1], 'classified', true)
                    Vue.set(this.transactions[transaction.id -1], 'categorie', categorie)
                    this.classifiedTransactions ++;
                    this.notclassifiedTransactions --;
                }

            },
            topFunction: function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        }
    }
</script>
