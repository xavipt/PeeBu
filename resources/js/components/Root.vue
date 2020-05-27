<template>
    <div class="h-100 w-100">
        <notifications group="error"
                       position="top center"
                       />
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed:{
        transactions(){
            return this.$store.getters.transactions
        }
    },
    beforeCreate() {
        this.$store.dispatch('loadTransactions');
    },
}
</script>
