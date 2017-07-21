<template>
    <div id="wrapper">
        <section class="app-demo">
            <header class="demo-header">appComponent</header>
            <ul>
                <li>
                    <router-link class="item" :to="'/toast'">
                        toast component<i class="skip yo-ico">&#xf1c1;</i>
                    </router-link>
                </li>
                <li>
                    <router-link class="item" :to="'/select'">
                        select component<i class="skip yo-ico">&#xf1c1;</i>
                    </router-link>
                </li>
                <li>
                    <router-link class="item" :to="'/dialog'">
                        dialog component<i class="skip yo-ico">&#xf1c1;</i>
                    </router-link>
                </li>
                <li>
                    <router-link class="item" :to="'/action'">
                        action component<i class="skip yo-ico">&#xf1c1;</i>
                    </router-link>
                </li>
                <li>
                    <router-link class="item" :to="'/canlendar'">
                        canlendar component<i class="skip yo-ico">&#xf1c1;</i>
                    </router-link>
                </li>
                <li>
                    <router-link class="item" :to="'/datepicker'">
                        datepicker component<i class="skip yo-ico">&#xf1c1;</i>
                    </router-link>
                </li>
            </ul>
        </section>
        <keep-alive>
            <transition name="slider-left">
                <router-view class="view"></router-view>
            </transition>
        </keep-alive>
    </div>
</template>

<script>

export default {
    data () {
        return {

        }
    },

    methods: {
    }
}
</script>
