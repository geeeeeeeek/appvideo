import { createI18n } from 'vue-i18n'
// 引入同级目录下文件
const modules = import.meta.globEager('./*')

//假设你还有其他目录下的语言文件 它的路径是 src/views/home/locales/en-US.ts
//那么你就可以 使用 :lower:（小写） :upper:（大写） 来引入文件
// const viewModules = import.meta.globEager('../views/**/locales/[[:lower:]][[:lower:]]-[[:upper:]][[:upper:]].ts')
function getLangAll(): any {
  let message: any = {}
  getLangFiles(modules, message)
  return message
}

/**
 * 获取所有语言文件
 * @param {Object} mList
 */
function getLangFiles(mList: any, msg: any) {
  for (let path in mList) {
    if (mList[path].default) {
      //  获取文件名
      let pathName = path.substr(path.lastIndexOf('/') + 1, 5)

      if (msg[pathName]) {
        msg[pathName] = {
          ...mList[pathName],
          ...mList[path].default
        }
      } else {
        msg[pathName] = mList[path].default
      }
    }
  }
}

//注册i8n实例并引入语言文件
const i18n = createI18n({
  legacy: false, // 使用Composition API，这里必须设置为false
  globalInjection: true,
  global: true,
  locale: 'zh-CN', // 语言切换, 中文zh-CN 英文en-US
  messages: getLangAll()
})

export default i18n
