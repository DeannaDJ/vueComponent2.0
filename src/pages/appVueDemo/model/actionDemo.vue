<template>
    <div id="action-demo" class="item-demo">
        <header>
            <router-link class="back yo-ico" :to="'/'">&#xf1c3;</router-link>
            <label class="title">action</label>
        </header>

        <section class="content">
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowAction" value="默认样式" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowAction1" value="按钮居中样式" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowAction2" value="带取消按钮样式" />
        </section>

        <v-action :show="actionShow" :action-list="actionList"></v-action>
        <v-action :show="actionShow1" position="center" :action-list="actionList"></v-action>
        <v-action :show="actionShow2" :cancel="true" :action-list="actionList"></v-action>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vAction from 'appComponent/action/v-action.vue'
export default {
    data () {
        return {
            actionList: [{
                name: '实例菜单一',
                eventName: 'actionEvent'
            }, {
                name: '实例菜单二',
                eventName: 'actionEvent'
            }, {
                name: '实例菜单三',
                eventName: 'actionEvent'
            }]
        }
    },

    components: {
        vAction
    },

    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'actionShow',
            'actionShow1',
            'actionShow2'
        ])
    },

    methods: {
        ...mapActions([
            'onShowAction', // 映射 this.onShowAction() 为 this.$store.dispatch('SHOWACTION')
            'onShowAction1',
            'onShowAction2'
        ])
    }
}
</script>
