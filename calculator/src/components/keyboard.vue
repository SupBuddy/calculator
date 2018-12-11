<template>
    <div class="wrap">
        <div @click="getVal" :value="value" class="key">{{value}}</div>
    </div>
</template>

<script>
export default {
    name:'keyboard',
    props: ['value'],
    data() {
        return {
            
        }
    },
    methods: {
        getVal(e){
            console.log(this.value)
            let value = this.value;
            this.$store.commit('calculate',value)
        }
    }
}
</script>

<style lang="scss">
.wrap {
    border: 1px solid;
    .key {
        display: inline-block;
        width: 70px;
        height: 70px;
        line-height: 70px;
        text-align: center;
    }
  }

</style>