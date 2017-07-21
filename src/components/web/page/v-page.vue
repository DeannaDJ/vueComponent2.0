

<template>

<div class="v-page" v-show="showPage">

    <ul>
        <li v-if="showTotal">
            <span class="total-count">共{{total}}条</span>
        </li>
        <li v-if="prev" :class="{'active':currentPage==1}">
            <span v-if="currentPage==1" v-text="prev" class="current prev"></span>
            <a v-else="currentPage==1" v-text="prev" href="javascript:;" class="page-link prev" @click="onPrev"></a>
        </li>
        <li v-if="first" :class="{'active':currentPage==1}">
            <span v-if="currentPage==1" v-text="first" class="current first"></span>
            <a v-else="currentPage==1" v-text="first" href="javascript:;" class="page-link first" @click="onJumpPage(1)"></a>
        </li>
        <li v-for="page in pages" :class="{'active':currentPage==page,'disabled':page==ellipse}">
            <span v-if="page==ellipse" v-text="ellipse" class="ellipse"></span>
            <span v-if="currentPage==page&&page!=ellipse" v-text="page" class="current"></span>
            <a v-if="currentPage!=page&&page!=ellipse" v-text="page" href="javascript:;" class="page-link" @click="onJumpPage(page)"></a>
        </li>
        <li v-if="last" :class="{'active':currentPage==totalPages}">
            <span v-if="currentPage==totalPages" v-text="last" class="current last"></span>
            <a v-else="currentPage==totalPages" v-text="last" href="javascript:;" class="page-link last" @click="onJumpPage(totalPages)"></a>
        </li>
        <li v-if="next" :class="{'active':currentPage==totalPages}">
            <span v-if="currentPage==totalPages" v-text="next" class="current next"></span>
            <a v-else="currentPage==totalPages" v-text="next" href="javascript:;" class="page-link next" @click="onNext"></a>
        </li>
        <li v-if="showSize">
            <div class="option-size"></div>
        </li>
    </ul>
</div>

</template>

<script>

// page样式
import './static/style';

// page.js
import page from './static/page.js'
export default page

</script>
