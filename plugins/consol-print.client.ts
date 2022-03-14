import { defineNuxtPlugin } from '#app'
import { useGeneralStore } from '~/stores'

export default defineNuxtPlugin((nuxtApp) => {
  const store = useGeneralStore()
  if (process.client) {
    document.addEventListener('DOMContentLoaded', () => {
      store.updateShowNavbar(true)
      try {
        const isSafari = /^((?!chrome|android).)*safari/i.test(
          navigator.userAgent,
        )
        console.log({ isSafari })
        if (!isSafari) {
          const imageUrl
                        = `${window.location.origin}/images/you-are-the-best.png`
          const css = `padding:200px 0 0 0;text-align:bottom;font-size: 1.5rem;background:url(${imageUrl}) no-repeat left top;background-size:200px`
          console.log(
            '%c So, you\'re reading the console messages - how geeky! 🤓',
            css,
          )
        }
      }
      catch (error) {
        console.log('====================================================')
        console.log(error)
        console.log('====================================================')
      }
    })
  }
})
