<template >
  <div>
    <h1>
      {{mes}}
    </h1>
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
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  layout: 'blog',
  components:{
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

