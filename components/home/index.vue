<template>
  <div class="container">
    <button @click="handleRules">{{ configTexts['go'] }}</button>
  </div>
</template>

<script>
import { getLangFromParams } from '@utils/params.js';
import language from '../../js/language.json';
export default {
  name: 'Home',
  data() {
    return {
      lang: '',
      country: '',
      configTexts: {},
      loading: false
    };
  },
  created() {
    this.getLanauge();
  },
  methods: {
    getLanauge() {
      let lang = getLangFromParams() || 'en';
      this.lang = lang;
      if (lang === 'ar' || lang === 'EG' || lang === 'eg') {
        document.body.style.direction = 'rtl';
      }
      let finalLang = language[lang] || language['en'];
      document.title = finalLang.title;
      this.configTexts = finalLang;
    },
    handleRules() {
      this.$router.push({ path: '/rule' });
    }
  }
};
</script>

<style lang="less">
@import './index';
</style>
