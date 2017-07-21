<style scoped lang="sass">
    .canlendar-demo {
        font-size: .16rem;
        .ci-co {
            height: .3rem;
            line-height: .3rem;
        }
        input {
            width: 1.2rem;
            text-align: center;
        }
    }
</style>
<template>
    <div id="canlendar-demo" class="item-demo">
        <header>
            <router-link class="back yo-ico" :to="'/'">&#xf1c3;</router-link>
            <label class="title">canlendar</label>
        </header>

        <section class="content canlendar-demo">
            <label class="label">点击日期选择起始日期</label>
            <div class="ci-co" @click="onShowCanlendar">
                <input type="text" readonly v-model="startDate"/>至
                <input type="text" readonly v-model="endDate"/>
            </div>
        </section>

        <v-canlendar :show="showCanlendar" :start="startDate" :end="endDate"></v-canlendar>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vCanlendar from 'appComponent/canlendar/v-canlendar.vue'
export default {
    data () {
        return {
            beginDate: '2016-10-10'
        }
    },

    components: {
        vCanlendar
    },

    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'showCanlendar',
            'startDate',
            'endDate'
        ])
    },

    methods: {
        ...mapActions([
            'onShowCanlendar', // 映射 this.onShowAction() 为 this.$store.dispatch('SHOWACTION')
            'onSelectCanlendar',
            'onHideCanlendar'
        ])
    }
}
</script>
