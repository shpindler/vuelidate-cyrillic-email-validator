import { helpers } from 'vuelidate/lib/validators'

export const email = helpers.regex(
  'isEmailValidator',
  /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([а-яА-Яa-zA-Z\-0-9]+\.)+[а-яА-Яa-zA-Z]{2,}))$)/
)
