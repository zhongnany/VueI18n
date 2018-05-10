import zh from './zh';
import en from './en';

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const messages = {
  zh,
  en
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

export default i18n;