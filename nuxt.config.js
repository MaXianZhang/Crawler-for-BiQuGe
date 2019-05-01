
// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
const routerBase = {
  router: {
    base: '/MyBlog/'
  }
}
//  : {}

module.exports = {
  ...routerBase,
  plugins: [
    '~/plugins/vue-markdown',
    '~/plugins/element-ui'
  ]
}