<template>
  <div class="rule-container">
    <button @click="$router.go(-1)">{{ configTexts['back'] }}</button>
  </div>
</template>

<script>
import { getLangFromParams } from '@utils/params.js';
import language from '../../js/language.json';
export default {
  name: 'Rule',
  data() {
    return {
      lang: '',
      configTexts: null
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
    }
  }
};
</script>

<style lang="less">
@import './index';
</style>
