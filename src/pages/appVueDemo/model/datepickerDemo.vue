<style scoped lang="sass">
    .datepicker-demo {
        font-size: .16rem;
        input {
            width: 1.6rem;
            height: .3rem;
            padding: 0 10px;
            line-height: .3rem;
            text-align: left;
            border: 1px solid #ddd;
            border-radius: 2px;
        }
        .item {
            .label {
                display: inline-block;
                width: .8rem;
                text-align: right;
            }
            text-align: left;
            padding: .1rem;
        }
    }
</style>
<template>
    <div id="datepicker-demo" class="item-demo">
        <header>
            <router-link class="back yo-ico" :to="'/'">&#xf1c3;</router-link>
            <label class="title">datepicker</label>
        </header>

        <section class="content datepicker-demo">
            <div class="item">
                <label class="label">默认今天：</label>
                <input type="text" readonly v-model="defaultDate" @click="onShowDefaultDate"/>
            </div>
            <div class="item">
                <label class="label">日期：</label>
                <input type="text" readonly v-model="date" @click="onShowDate"/>
            </div>
            <div class="item">
                <label class="label">时分日期：</label>
                <input type="text" readonly v-model="dateTime" @click="onShowDateTime"/>
            </div>
            <div class="item">
                <label class="label">日期限制：</label>
                <input type="text" readonly v-model="limitDate" @click="onShowLimitDate"/>
            </div>
        </section>

        <v-datepicker :show="showDefaultDate" :value="defaultDate" events-name="onSelectDefualtDate"></v-datepicker>
        <v-datepicker :show="showDate" :value="date" format="yyyy-MM-dd" events-name="onSelectDate"></v-datepicker>
        <v-datepicker :show="showDateTime" :value="dateTime" format="yyyy-MM-dd hh:mm" events-name="onSelectDateTime"></v-datepicker>
        <v-datepicker :show="showLimitDate" :value="limitDate" min-date="2016-11-20" events-name="onSelectLimitDate"></v-datepicker>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vDatepicker from 'appComponent/datepicker/v-datepicker.vue'
export default {
    data () {
        return {

        }
    },

    components: {
        vDatepicker
    },

    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'date',
            'dateTime',
            'limitDate',
            'defaultDate',
            'showDate',
            'showDateTime',
            'showLimitDate',
            'showDefaultDate'
        ])
    },

    methods: {
        ...mapActions([
            'onShowDate', // 映射 this.onSelectlist() 为 this.$store.dispatch('SHOWSELECT')
            'onShowDateTime',
            'onShowLimitDate',
            'onShowDefaultDate',
            'onSelectDate',
            'onSelectDateTime',
            'onSelectLimitDate',
            'onSelectDefualtDate'
        ])
    }
}
</script>
