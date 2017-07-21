<template>
    <div id="dialog-demo" class="item-demo">
        <header>
            <router-link class="back yo-ico" :to="'/'">&#xf1c3;</router-link>
            <label class="title">dialog</label>
        </header>

        <section class="content">
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowDialog" value="默认弹窗" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowDialog1" value="无标题弹窗" />
        </section>

        <v-dialog
            :show="showDialog"
            :buttons="btns"
            title="提示">这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示。。。</v-dialog>
        <v-dialog
            :show="showDialog1"
            :buttons="btn">这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示。。。</v-dialog>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vDialog from 'appComponent/dialog/v-dialog.vue'
export default {
    data () {
        return {
            btns: [{
                type: 'cancel',
                // name: '关闭',
                eventName: 'onClose'
            }, {
                type: 'sure',
                // name: '确认',
                eventName: 'onSure'
            }],
            btn: [{
                type: 'cancel',
                // name: '关闭',
                eventName: ''
            }]
        }
    },

    components: {
        vDialog
    },

    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
        ...mapGetters([
            'showDialog',
            'showDialog1'
        ])
    },

    methods: {
        ...mapActions([
            'onShowDialog', // 映射 this.onShowDialog() 为 this.$store.dispatch('SHOWDIALOG')
            'onShowDialog1',
            'onClose',
            'onSure'
        ])
    }
}
</script>
