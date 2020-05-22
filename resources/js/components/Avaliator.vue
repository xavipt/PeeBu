<template>
    <div class="container h-90 w-100">
        <div class="row h-100 w-100">
            <div class="col-md-12 p-4 w-100">
                <h2>Classifique as suas transações</h2>
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
                    <tr v-for="transaction in transactions">
                        <th scope="row">{{transaction.id}}</th>
                        <td>{{transaction.entity}}</td>
                        <td>{{transaction.amount}}</td>
                        <td>{{transaction.type}}</td>
                        <td>{{transaction.source}}</td>
                        <td>{{transaction.createdAt}}</td>
                        <td>
                            <div class="row">
                                <div class="col-md-12 p-1">
                                    <table>
                                        <th class="noBorder pt-0"><i class="fas fa-cut fa-2x p-1"></i></th>
                                        <th class="noBorder pt-0"><i class="fas fa-utensils fa-2x p-1"></i></th>
                                        <th class="noBorder pt-0"><i class="fas fa-heart fa-2x p-1"></i></th>
                                        <th class="noBorder pt-0"><i class="fas fa-gamepad fa-2x p-1"></i></th>
                                        <th class="noBorder pt-0"><i class="fas fa-plus fa-2x p-1"></i></th>
                                    </table>
                                </div>
                                <div class="col-md-12 p-1">
                                    <table>
                                        <th class="noBorder pt-0"><i class="fas fa-home fa-2x p-1"></i></th>
                                        <th class="noBorder pt-0"><i class="fas fa-paw fa-2x p-1"></i></th>
                                        <th class="noBorder pt-0"><i class="fas fa-wrench fa-2x p-1"></i></th>
                                        <th class="noBorder pt-0"><i class="fas fa-shopping-cart fa-2x p-1"></i></th>
                                        <th class="noBorder pt-0"><i class="fas fa-tshirt fa-2x p-1"></i></th>
                                        <th class="noBorder pt-0"><i class="fas fa-laptop-code fa-2x p-1"></i></th>
                                    </table>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return{


            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        computed:{
            transactions(){
                return this.$store.getters.transactions
            }
        },
    }
</script>
