

<template>

<div id="sidebar-demo" class="item-demo">
    <h1>sidebar侧边栏</h1>
    <div class="content">
        <h2>概述</h2>
        <p>侧边栏展示，可以支持最多两层结构</p>
        <h2>实例</h2>
        <div class="side-demo">
            <p>一层侧边栏</p>
            <v-sidebar :configs="oneList" :current-key="oneKey" event-name="onSlectItemOne"></v-sidebar>
        </div>
        <div class="side-demo">
            <p>两层侧边栏</p>
            <v-sidebar :configs="twoList" :current-key="twoKey" event-name="onSlectItemTwo"></v-sidebar>
        </div>
        <div class="side-demo">
            <p>带数字的侧边栏</p>
            <v-sidebar :configs="thridList" :current-key="thridKey" event-name="onSlectItemThrid"></v-sidebar>
        </div>
    </div>

</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vSidebar from 'webComponent/sidebar/v-sidebar.vue'
export default {
    data() {
            return {
                oneList: [{
                    key: 'one',
                    name: '空心锁',
                    iconUnicode: '&#xf1ad;',
                    open: true,
                    show: true
                }, {
                    key: 'two',
                    name: '实心锁',
                    iconUnicode: '&#xf1ac;',
                    open: true,
                    show: true
                }, {
                    key: 'thrid',
                    name: '门锁异常',
                    iconUnicode: '&#xf345;',
                    open: true,
                    show: true
                }, {
                    key: 'fouth',
                    name: '门锁电量低',
                    iconUnicode: '&#xf346;',
                    open: true,
                    show: true
                }],
                twoList: [{
                    key: 'one',
                    name: '栏目一',
                    iconUnicode: '&#xf1a5;',
                    open: true,
                    show: true
                }, {
                    key: 'two',
                    name: '栏目二',
                    iconUnicode: '&#xf1a5;',
                    open: true,
                    subItem: [{
                        subKey: "two_one",
                        parentKey: 'two',
                        subName: "菜单一",
                        show: true
                    }, {
                        subKey: "two_two",
                        parentKey: 'two',
                        subName: "菜单二",
                        show: true
                    }],
                    show: true
                }],
                thridList: [{
                    key: 'one',
                    name: '通知公告',
                    count: 10,
                    iconUnicode: '&#xf1aa;',
                    open: true,
                    show: true
                }, {
                    key: 'two',
                    name: '未读消息',
                    iconUnicode: '&#xf1c9;',
                    count: 100,
                    open: true,
                    show: true
                }, {
                    key: 'thrid',
                    name: '已读消息',
                    iconUnicode: '&#xf1ca;',
                    count: 3,
                    open: true,
                    show: true
                }]
            };
        },

        components: {
            vSidebar
        },

        computed: {
            // 使用对象展开运算符将 getters 混入 computed 对象中
            ...mapGetters([
                'oneKey',
                'twoKey',
                'thridKey'
            ])
        },

        methods: {
            ...mapActions([
                'onSlectItemOne', // 映射 this.onSlectItemOne() 为 this.$store.dispatch('SELECTITEM_ONE')
                'onSlectItemTwo',
                'onSlectItemThrid'
            ])
        }
}

</script>

<style scoped lang="sass">
    .side-demo {
        position: relative;
        display:inline-block;
        margin-left: 20px;
        width: 250px;
        height: 300px;
        .v-sidebar {
            position: absolute;
            top: 30px;
            left: 0;
            height: 250px;
        }
    }
</style>
