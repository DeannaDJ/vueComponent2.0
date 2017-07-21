<template>
    <div id="loading-demo" class="item-demo">
        <h1>loading加载器</h1>
        <h2>概述</h2>
        <p>loading加载器</p>

        <h2>实例</h2>
        <div class="select-btn loading-demo">
            <label>加载按钮：</label>
            <input type="button" class="form-control input-sm btn-success w120" @click="onShowLoading" value="局部加载loading">
            <input type="button" class="form-control input-sm btn-success w120" @click="onShowLoadingTwo" value="全局加载loading">
            <v-loading :show="showLoading"></v-loading>
        </div>
        <v-loading :show="showLoadingTwo"></v-loading>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vLoading from 'webComponent/loading/v-loading.vue'
export default {
    data () {
        return {

        }
    },

    components: {
        vLoading
    },

    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'showLoading',
            'showLoadingTwo'
        ])
    },

    methods: {
        ...mapActions([
            'onShowLoading', // 映射 this.onShowLoading() 为 this.$store.dispatch('SHOWLOADING')
            'onShowLoadingTwo'
        ])
    }
}
</script>

<style scoped lang="sass">
    .loading-demo {
        &.select-btn {
            padding: 20px;
            position:relative;
            width:500px;
            height:500px;
        }
    }
</style>
