export const localeList: string[] = ['en', 'es']
// TODO: Add more languages or fix the current one
export const setI18nLanguage = (lang) => {
  // this.$i18n.locale = lang;
  localStorage.setItem('lang', lang)
  // const route = this.$tp(this.$route.path, lang, true);
  // if (this.$router.currentRoute.path !== route) {
  //     this.$router.push({
  //         path: route,
  //     });
  // }
  // if (this.$i18n.locale !== lang) {
  //     this.$i18n.locale = lang;
  // }
  return lang
}

export const loadLanguageAsync = (lang) => {
  // If the same language
  // if (this.$i18n.locale === lang) {
  //     return Promise.resolve(lang);
  // }
  //
  // // If the language was already loaded
  // if (this.$i18n.availableLocales.includes(lang)) {
  //     return Promise.resolve(this.setI18nLanguage(lang));
  // }
  //
  // // If the language hasn't been loaded yet
  // return import(
  //     /* webpackChunkName: "lang-[request]" */ `../i18n/${lang}.json`
  //     ).then(messages => {
  //     this.$i18n.setLocaleMessage(lang, messages.default);
  //     this.$i18n.availableLocales.push(lang);
  //     return Promise.resolve(this.setI18nLanguage(lang));
  // });

  return Promise.resolve(lang)
}
