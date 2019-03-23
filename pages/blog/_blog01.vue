<template >
  <div>
    <Nav></Nav>
    <vue-markdown>
      # 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
    </vue-markdown>
    <nuxt-link to="/blog/">Blog</nuxt-link>

    <h1>
      {{mes}}
    </h1>
  </div>
</template>

<script>
import Nav from '~/templates/nav'
import VueMarkdown from 'vue-markdown'

export default {
  components:{
    Nav,
    VueMarkdown
  },
  data: () => ({
    mes: 'blog01'
  }),
  render:(h) => {
    console.log(1)
    return h('div', 'my prporse')
  },
}
</script>

