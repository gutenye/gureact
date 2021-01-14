import { setLocale } from 'yup'

// formikSetLocale('zh-CN')
export default function formikSetLocale(name) {
  if (name !== 'zh-CN') throw new Error(`unkown locale name: '${name}'`)
  /* eslint-disable no-template-curly-in-string */
  setLocale({
    mixed: {
      default: '${path}无效',
      required: '${path}是必填项',
      oneOf: '${path}必须是这些中的一个: ${values}',
      notOneOf: '${path}不能是下面这些: ${values}',
      notType: '${path}必须是`${type}`类型',
    },
    string: {
      required: 'a',
      length: '${path}必须是${length}个字符',
      min: '${path}至少为${min}个字符',
      max: '${path}最多为${max}个字符',
      matches: '${path}必须符合这个`${regex}`正则表达式',
      email: '${path}是无效的Email',
      url: '${path}是无效的URL',
      trim: '${path}前后必须没有空格',
      lowercase: '${path}必须是小写',
      uppercase: '${path}必须是大写',
    },
    number: {
      min: '${path}必须大于等于${min}',
      max: '${path}必须小于等于${max}',
      less: '${path}必须小于${less}',
      more: '${path}必须大于${more}',
      notEqual: '${path}不能等于${notEqual}',
      positive: '${path}必须是正数',
      negative: '${path}必须是负数',
      integer: '${path}必须是整数',
    },
    date: {
      min: '${path}必须是${min}之后',
      max: '${path}必须是${max}之前',
    },
    boolean: {},
    object: {
      noUnknown: '${path}不是指定的',
    },
    array: {
      min: '${path}最少需要${min}个',
      max: '${path}不能超过${max}个',
    },
  })
}
