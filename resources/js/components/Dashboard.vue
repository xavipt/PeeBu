<template>
    <div class="container-fluid h-90 w-100">
        <div class="row h-100 w-100">
            <div class="col-md-6">
                <graph-bar

                    :height="400"
                    :axis-min="0"
                    :axis-max="50"
                    :labels="[
                            '2020'
                            ]"
                    :values="values">
                    <note :text="'Despesas por categoria'"></note>
                    <tooltip :names="names" :position="'left'"></tooltip>
                    <legends :names="names" :filter="true"></legends>
                </graph-bar>
            </div>
            <div class="col-md-6">
                <div class="col-md-12">
                    <span>Top 5 despesas</span>
                </div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in this.top5">
                        {{item[0]}}
                        <span class="badge badge-primary badge-pill">{{item[1]}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                names: this.$store.getters.categories,
                values: this.$store.getters.countsOfCategories,
                top5: this.$store.getters.top5,
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        computed:{

        },
        methods: {

        }
    }
</script>

