

<template>

<div v-if="display" class="v-toast" :class="[showName, pt]">
    <span><slot></slot></span>
</div>

</template>

<script>

// toast样式
import './static/style.vue';

// toast.js
import toast from './static/toast.js'
export default toast

</script>
