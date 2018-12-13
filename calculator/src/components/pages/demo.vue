<template>
    <div class="wrap">
        <span @click="openContent">open</span>
        <transition name="fade">
            <div v-show="showContent" class="content">
                <span @click="closeContent">close</span>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name:'keyboard',
    props: ['value'],
    data() {
        return {
            showContent: false
        }
    },
    methods: {
        openContent(){
            this.showContent = true;
        },
        closeContent(){
            console.log(this.showContent)
            this.showContent = false;
        }
    }
}
</script>

<style lang="scss">
.wrap {
    .content {
        width: 100%;
        height: 1200px;
        margin: 0;
        padding: 0;
        background-color: #eee;
        position: fixed;
        bottom: 0;
        left: 0;
    }
}
.fade-enter {
    transform: translateY(1200px);
}
.fade-enter-active {
    transition: all 0.5s;
}
.fade-leave-active {
    transition: opacity 0.25s ease-out;
}
.fade-leave-to {
    opacity: 0;
}



</style>