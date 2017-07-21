<style scoped lang="sass">

.calendar-demo {
    .pos-relative {
        position: relative;
    }
    &.form-inline {
        .v-calendar {
            display: inline-block;
        }
        .label {
            font-size: 14px;
            display:inline-block;
            width: 50px;
            height: 30px;
            line-height: 30px;
            color: #333333;
        }
    }
    .item {
        width:230px;
        display:inline-block;
        margin-right: 20px;
    }
    .input-text {
        position: absolute;
        top: 1px;
        left: 7px;
        background: #fff;
        width: 40px;
    }
    .input-sm {
        width: 160px;
        color: #555555;
        background-color: #ffffff;
        background-image: none;
        border: 1px solid #dddddd;
        height: 30px;
        padding: 5px 10px;
        line-height: 1.5;
        border-radius: 2px;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
    }
}

</style>

<template>

<div id="calendar-demo" class="item-demo">
    <h1>首页</h1>
    <h2>介绍</h2>
    <p>详情概述</p>
    <h2>实例</h2>
    <div class="calendar-demo form-inline">
        <div class="item">
            <label class="label">入住：</label>
            <v-calendar :value="ciDate" format="yyyy-MM-dd" event-name="onSelectCiDate">
                <span slot="input" class="pos-relative calendar-input">
                        <input type="text" readonly class="input-sm" v-model="ciDate">
                    </span>
            </v-calendar>
        </div>
        <div class="item">
            <label class="label">离店：</label>
            <v-calendar :value="coDate" :min-date-time="minCoDate" :max-date-time="maxCoDate"
                format="yyyy-MM-dd" event-name="onSelectCoDate">
                <span slot="input" class="pos-relative calendar-input">
                        <input type="text" readonly class="input-sm" v-model="coDate">
                    </span>
            </v-calendar>
        </div>
    </div>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vCalendar from 'webComponent/calendar/v-calendar.vue'
export default {
    data() {
            return {

            }
        },

        components: {
            vCalendar
        },

        computed: {
            // 使用对象展开运算符将 getters 混入 computed 对象中
            ...mapGetters([
                'ciDate',
                'coDate',
                'minCoDate',
                'maxCoDate'
            ])
        },

        methods: {
            ...mapActions([
                'onSelectCiDate', // 映射 this.onSelectCiDate() 为 this.$store.dispatch('SELECTCIDATE')
                'onSelectCoDate',
                'getDisDate',
                'toTwoNumber'
            ])
        }
}

</script>
