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
    
    .key {
        border-radius: 50% ;
        background-color: #ddd;
        display: inline-block;
        width: 200px;
        height: 200px;
        line-height: 200px;
        margin: 40px;
        text-align: center;
        font-size: 36px;
    }
  }

</style>