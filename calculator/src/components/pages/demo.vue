<template>
    <div class="wrap">
        <p>test</p>
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
    
}

</style>