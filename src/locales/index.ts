import { MessageSchema } from '@/locales/schema'
import { createI18n } from 'vue-i18n'

import kz from './kz'
import ru from './ru'

type TLanguageCode = 'ru-RU' | 'kk-KZ'

const i18nInstance = createI18n<MessageSchema, TLanguageCode>({
  legacy: false,
  locale: 'ru-RU',
  fallbackLocale: 'kk-KZ',
  messages: {
    'ru-RU': ru,
    'kk-KZ': kz,
  },
})

export type { TLanguageCode }
export default i18nInstance
