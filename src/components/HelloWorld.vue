<template>
  <div class="header">
    <div class="header-main toggle" >
      <ul class="nav-left">
        <li>
          <router-link type="ios-paper" to="/">{{ $t('name') }}</router-link>
          <p>{{ $t('wbnr') }}</p>
          <input type="text" :placeholder="$t('name')">
        </li>
      </ul>
      <ul class="nav-right">
        <li>
          <a href="javascript:void 0" @click="toZh">中文 </a> 
          <span style="color:#fff"> / </span>
          <a href="javascript:void 0" @click="toEn"> EN</a>
        </li>
      </ul>  
    </div>    
  </div>
</template>
<script>
  import Vue from 'vue' 
  export default {
    data(){
      return {
        // this.$t("wbnr")
        txt: this.$t("wbnr"),
      }
    },  
    methods: {
      toEn: function () {
        this.$i18n.locale = 'en';
        // sessionStorage.setItem("lang", this.$i18n.locale);
        // location.reload();
      },
      toZh: function () {
        this.$i18n.locale = 'zh';
        // sessionStorage.setItem("lang", this.$i18n.locale);
        // location.reload();
      },
    },
  }
</script>
<style>
  li{
    list-style:none;
    display: inline-block;
  }
</style>
