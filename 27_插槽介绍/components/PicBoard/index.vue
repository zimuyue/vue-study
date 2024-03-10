<template>
  <div>
    <ul>
      <li v-for="item of picData" :key="item.id">
        <div>
          <h1>{{ item.title }}</h1>
          <slot :url="item.url" :desc="item.desc" :field="item.field"></slot>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PicBoard',
  data () {
    return {
      picData: [
        {
          id: 1,
          title: '日本的机器人，到底有哪些功能？日本为何发展仿生机器人？',
          desc: '在日本，众多人工智能专家都执着于仿真机器人的研究，机器人行业更是被当作日本崛起的救命稻草，日本政府也始终把机器人产业视为自己的朝阳产业。在经过了日本政府整整两代人的引导之后，日本的仿生机器人得到了长足的发展。而完美的人形机器人则是仿生机器人中的终极目标。',
          url: 'https://p6-tt.byteimg.com/origin/pgc-image/8466e7137f9c4ea5ac6939b27bc454e0?from=pc',
          field: 0
        },
        {
          id: 2,
          title: '1948年，上海律师江一平为冈村宁次作无罪辩护，最后是什么下场？',
          desc: '抗战结束后，国际上成立了远东军事法庭来审判在华犯下滔天罪恶的日本战犯，25位战犯被判有罪，其中7人判处绞刑，唯独漏了一个头号战犯冈村宁次。这个在侵华战争中，对华北抗日根据地实行大扫荡，残杀了近270万中国人的穷凶恶极之徒，竟然在蒋介石的庇护下逃过了国际军事法庭的制裁。',
          url: 'https://p3-tt.byteimg.com/origin/pgc-image/51607fa292f84d30938d354a5787ea20?from=pc'
        },
        {
          id: 3,
          title: '中国评分最高的10部反腐剧，《人民的名义》第6，《大江东去》第5',
          desc: '这部电视剧第一集讲述了一起发生在闹市区的“红旗爆炸案”，当时正值下班高峰期，一段拥堵路段中，一辆本田轿车发生爆炸，女车主被炸得身体分离，并波及无辜。这部剧其实改编于真实事件，案件的真凶为一省级高官，剧中那个被当场炸死的年轻女性“柳萍”，在现实中死得更为惨烈。',
          url: 'https://p3-tt.byteimg.com/origin/pgc-image/7014283b4271455f9eef73818a864631?from=pc',
          field: 2
        },
        {
          id: 4,
          title: '6种健康花，家里养一盆，格调高寿命长，干净，健康，运气好',
          desc: '室内养花一般讲究是健康漂亮，美观百搭，要有气质，最好还能净化空气，今天给大家推荐一些健康又好养，颜值还高的绿植，客厅里养一盆，格调升高，全家都健康，看看是哪些花吧。',
          url: 'https://p3-tt.byteimg.com/origin/pgc-image/d7056a7a1f1b4b96b8335e1656319059?from=pc',
          field: 1
        },
      ]
    }
  }
}
</script>

<style>

</style>