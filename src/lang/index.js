import Vue from 'vue'
import Cookies from 'js-cookie'
import elementZhLocale from 'element-ui/src/locale/lang/zh-CN'
import elementEnLocale from 'element-ui/src/locale/lang/en'
import zhLocale from './zh-cn.json'
import enLocale from './en.json'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
  },
}

export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) {
    return chooseLanguage
  }

  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
})

export default i18n
