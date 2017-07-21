<template>
    <div id="select-demo" class="item-demo">
        <header>
            <router-link class="back yo-ico" :to="'/'">&#xf1c3;</router-link>
            <label class="title">select</label>
        </header>

        <section class="content">
            <input type="button" class="yo-btn yo-btn-m"  @click="onSelectlist" value="单项选择" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onSelectlist1" value="未分组" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onSelectlist2" value="分组选择" />
        </section>

        <v-select :list="list" display-key="code" display-name="name"
            :current-value="currentValue" :show="showList"></v-select>
        <v-select :list="list1" :current-value="currentValue1"
            :show="showList1" events-name="selectCallback"></v-select>
        <v-select :list="list2"
                  :group="2"
                  :show="showList2"
                  display-key="roomNo"
                  display-name="roomName"
                  group-name="roomTypeName"
                  :current-key="currentRoomNo"
                  :current-value="currentRoomName"
                  events-name="selectGroupCallback">
        </v-select>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vSelect from 'appComponent/select/v-select.vue'
export default {
    data () {
        return {
            list: [{
                code: 1,
                name: "线下客线下客人线下客人线下客人线下客人线下客人线下客人线下客人线下客人线下客人人"
            }, {
                code: 2,
                name: "呼呼呼呼呼呼呼呼呼呼呼呼呼呼呼"
            }, {
                code: 3,
                name: "呼呼呼分销呼呼呼分销呼呼呼分销呼呼呼分销呼呼呼分销"
            }, {
                code: 4,
                name: "淘宝淘宝淘宝淘宝淘宝淘宝淘宝"
            }, {
                code: 5,
                name: "途家途家途家途家途家"
            }, {
                code: 6,
                name: "去出去去出去去出去去出去去出去去出去去出去去出去"
            }, {
                code: 7,
                name: "携程携程携程携程携程携程携程携程"
            }, {
                code: 8,
                name: "艺龙艺龙艺龙艺龙艺龙艺龙艺龙"
            }, {
                code: 9,
                name: "小猪猪小猪猪小猪猪小猪猪小猪猪小猪猪小猪猪小猪猪"
            }],

            list1: ["线下客人", "呼呼呼", "呼呼呼分销", "淘宝", "途家", "去出去", "携程", "艺龙", "小猪猪"],

            list2: [{
                roomTypeNo: "111",
                roomTypeName: "房型一",
                roomNo: "1",
                roomName: "线下客人"
            }, {
                roomTypeNo: "112",
                roomTypeName: "房型二",
                roomNo: "2",
                roomName: "呼呼呼"
            }, {
                roomTypeNo: "333",
                roomTypeName: "房型三",
                roomNo: "3",
                roomName: "呼呼呼分销"
            }, {
                roomTypeNo: "112",
                roomTypeName: "房型二",
                roomNo: "4",
                roomName: "淘宝"
            }, {
                roomTypeNo: "111",
                roomTypeName: "房型一",
                roomNo: "5",
                roomName: "途家"
            }, {
                roomTypeNo: "112",
                roomTypeName: "房型二",
                roomNo: "6",
                roomName: "去出去"
            }, {
                roomTypeNo: "111",
                roomTypeName: "房型一",
                roomNo: "7",
                roomName: "携程"
            }, {
                roomTypeNo: "333",
                roomTypeName: "房型三",
                roomNo: "8",
                roomName: "艺龙"
            }, {
                roomTypeNo: "4444",
                roomTypeName: "房型四",
                roomNo: "9",
                roomName: "小猪猪"
            }]
        }
    },

    components: {
        vSelect
    },

    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'currentValue',
            'currentValue1',
            'currentRoomNo',
            'currentRoomName',
            'showList',
            'showList1',
            'showList2'
        ])
    },

    methods: {
        ...mapActions([
            'onSelectlist', // 映射 this.onSelectlist() 为 this.$store.dispatch('SHOWSELECT')
            'onSelectlist1',
            'onSelectlist2',
            'selectEvent',
            'selectCallback',
            'selectGroupCallback'
        ])
    }
}
</script>
