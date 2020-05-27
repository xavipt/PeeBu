<template>
    <div class="container h-90 w-100">
        <div class="row h-100 w-100">
            <div class="col-md-12 p-4 w-100 h-10">
                <h2>Classifique as suas transações</h2>
            </div>
                <div class="col-md-5 p-4 h-10">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Transações classificadas</span>
                        <span class="badge badge-secondary bg-dark badge-pill">{{classifiedTransactions}}</span>
                    </h4>

                </div>
                <div class="col-md-5 p-4 h-10">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Transações por classificar</span>
                        <span class="badge badge-secondary bg-dark badge-pill">{{notclassifiedTransactions}}</span>
                    </h4>
                </div>
                <div class="col-md-2 h-10">
                        <button v-on:click="validate" type="button" class="btn btn-dark btn-lg float-right">Validar</button>
                </div>
            <div class="col-md-12 w-100 h-80">
                <v-data-table
                    :headers="headers"
                    :items="transactions"
                    :items-per-page="5"
                    class="elevation-1"
                >
                    <template v-slot:item="row" >
                        <tr>
                            <td>{{row.item.id}}</td>
                            <td>{{row.item.entity}}</td>
                            <td>{{row.item.amount}}</td>
                            <td>{{row.item.type}}</td>
                            <td>{{row.item.source}}</td>
                            <td>{{row.item.createdAt}}</td>
                            <td>
                                <div class="row">
                                    <div class="col-md-2 p-0" style="padding-bottom: 4px!important;" v-for="(button, indexJ) in buttons">
                                        <button :key="indexJ" class="btn buttonDimensions btn-light border border-dark"
                                                :class="{'btn-dark':(row.item.i == row.item.id && row.item.j == indexJ)}"
                                                v-on:click="classificate(row.item,button.categorie,row.item.id,indexJ)">
                                            <i :class=button.icon></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                classifiedTransactions: 0,
                notclassifiedTransactions: 0,
                buttons: [
                    {
                        categorie: 'cabeleireiro',
                        icon: 'fas fa-cut fa-lg p-1'
                    },
                    {
                        categorie: 'restauracao',
                        icon: 'fas fa-utensils fa-lg p-1'
                    },
                    {
                        categorie: 'saude',
                        icon: 'fas fa-heart fa-lg p-1'
                    },
                    {
                        categorie: 'entretenimento',
                        icon: 'fas fa-gamepad fa-lg p-1'
                    },
                    {
                        categorie: 'escola',
                        icon: 'fas fa-laptop-code fa-lg p-1'
                    },
                    {
                        categorie: 'casa',
                        icon: 'fas fa-home fa-lg p-1'
                    },
                    {
                        categorie: 'animais',
                        icon: 'fas fa-paw fa-lg p-1'
                    },
                    {
                        categorie: 'mecanica',
                        icon: 'fas fa-wrench fa-lg p-1'
                    },
                    {
                        categorie: 'supermercado',
                        icon: 'fas fa-shopping-cart fa-lg p-1'
                    },
                    {
                        categorie: 'roupas',
                        icon: 'fas fa-tshirt fa-lg p-1'
                    },
                    {
                        categorie: 'outro',
                        icon: 'fas fa-plus fa-lg p-1'
                    },
                ],
                headers: [
                    {
                        text: 'Id',
                        align: 'start',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Entidade', value: 'entity' },
                    { text: 'Quantidade', value: 'amount' },
                    { text: 'Tipo', value: 'type' },
                    { text: 'Fonte', value: 'source' },
                    { text: 'Data', value: 'createdAt' },
                    { text: 'Acções', value: 'acoes' },
                ],
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        computed:{
            transactions(){

                return this.$store.getters.transactions
            },

        },
        methods: {
            classificate: function (transaction,categorie,indexI,indexJ) {
                    console.log(transaction)
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
                    this.notclassifiedTransactions = this.transactions.length - this.classifiedTransactions;
                }

            },
            topFunction: function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                for (var i =0; i < this.transactions.length; i++ ){
                    Vue.set(this.transactions[i], 'categorie', "casa")
                    Vue.set(this.transactions[i], 'classified', true)
                }

            },
            validate: function(){
                /*
                var aux = true;
                for (var i =0; i < this.transactions.length; i++ ){
                    if(!this.transactions[i].classified){
                        aux = false;
                    }
                }
                if(aux){
                    //this.$store.push({name:''})
                }else{
                    this.$notify({
                        group: 'error',
                        title: 'Error',
                        text: 'Faltam Classificar '+ this.notclassifiedTransactions + ' transacções',
                        type: 'error',
                    });
                }
                 */
                this.$store.push({name:''})
            }
        }
    }
</script>
