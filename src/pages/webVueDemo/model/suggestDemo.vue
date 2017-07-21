<template>
    <div id="suggest-demo" class="item-demo">
        <h1>suggest筛选器</h1>
        <h2>概述</h2>
        <p>suggest筛选器</p>
        <h2>实例</h2>
        <div class="sug-demo">
            <p>第一个suggest筛选器：</p>
            <p>当前选中值：{{suggestValue}}</p>
            <v-suggest
                :list="list"
                suggest-key="name"
                :query-value="suggestValue"
                place-holder="请输入suggest值"
                event-name="onSelectSuggestOne"></v-suggest>
        </div>
        <div class="sug-demo">
            <p>第二个suggest筛选器：</p>
            <p>当前选中值：{{suggestTwoValue}}</p>
            <v-suggest
                :list="list"
                suggest-key="name"
                :query-value="suggestTwoValue"
                place-holder="请输入suggest值"
                event-name="onSelectSuggestTwo"></v-suggest>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vSuggest from 'webComponent/suggest/v-suggest.vue'
export default {
    data () {
        return {
            list: [{
                "code": "sanke",
                "name": "线下客人"
            }, {
                "code": "dianpuzhixiao",
                "name": "呼呼呼"
            }, {
                "code": "gyzhixiao",
                "name": "呼呼呼分销"
            }, {
                "code": "free",
                "name": "呼呼呼置换房"
            }, {
                "code": "smartsell",
                "name": "智能售"
            }, {
                "code": "pms",
                "name": "供应商对接"
            }, {
                "code": "ququuq",
                "name": "去出去网"
            }, {
                "code": "meituan",
                "name": "美团"
            }, {
                "code": "ctrip",
                "name": "携程"
            }]
        }
    },

    components: {
        vSuggest
    },

    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'suggestValue',
            'suggestTwoValue'
        ])
    },

    methods: {
        ...mapActions([
            'onSelectSuggestOne', // 映射 this.onSelectSuggestOne() 为 this.$store.dispatch('SELECTSUGGEST_ONE')
            'onSelectSuggestTwo'
        ])
    }
}
</script>

<style scoped lang="sass">
    .sug-demo {
        position: relative;
        margin-top: 20px;
    }
</style>
