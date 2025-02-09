import i18n from '@/i18n/index'

export function translateRouteTitleI18n(title: any) {
  // 判断是否存在国际化配置，如果没有原生返回
  const hasKey = i18n.global.te('route.' + title)
  if (hasKey) {
    const translatedTitle = i18n.global.t('route.' + title)
    return translatedTitle
  }
  return title
}
