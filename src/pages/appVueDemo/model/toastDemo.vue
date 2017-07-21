<template>
    <div id="toast-demo" class="item-demo">
        <header>
            <router-link class="back yo-ico" :to="'/'">&#xf1c3;</router-link>
            <label class="title">toast</label>
        </header>

        <section class="content">
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowToast" value="toast 默认位置" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowToast1" value="toast 居上" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowToast2" value="toast 居中" />
        </section>

        <v-toast duration="2000" :show="showToast" position="bottom">toast 默认位置，2后消失~</v-toast>
        <v-toast duration="2000" :show="showToast1" position="top">toast 居上，2后消失~</v-toast>
        <v-toast duration="2000" :show="showToast2" position="center">toast 居中，2后消失~</v-toast>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vToast from 'appComponent/toast/v-toast.vue'
export default {
    components: {
        vToast
    },

    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'showToast',
            'showToast1',
            'showToast2'
        ])
    },

    methods: {
        ...mapActions([
            'onShowToast', // 映射 this.onShowToast() 为 this.$store.dispatch('SHOWTOAST')
            'onShowToast1',
            'onShowToast2'
        ])
    }
}
</script>
