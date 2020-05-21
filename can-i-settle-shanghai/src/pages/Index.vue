<template>
    <div id="index">
        <div class="big-title">🐟 上海应届生落户积分计算器</div>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">最高学历</van-divider>
        <van-radio-group v-model="scores[0]" @change="doChange">
            <van-radio name="27">博士27分</van-radio>
            <van-radio name="24">硕士24分</van-radio>
            <van-radio name="21">本科21分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">毕业学校</van-divider>
        <p><a href="https://baijiahao.baidu.com/s?id=1608454748391259077&wfr=spider&for=pc">查看高校分类</a></p>
        <van-radio-group v-model="scores[1]" @change="doChange">
            <van-radio name="15">第一类高校及研究生培养单位 15分</van-radio>
            <van-radio name="12">第二类高校及研究生培养单位 12分</van-radio>
            <van-radio name="8"> 其他高校及研究生培养单位 8分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">最高学历毕业学校在沪</van-divider>
        <van-radio-group v-model="scores[2]" @change="doChange">
            <van-radio name="2">上海 2分</van-radio>
            <van-radio name="0">非上海 0分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">学习成绩</van-divider>
        <van-radio-group v-model="scores[3]" @change="doChange">
            <van-radio name="8">一级（成绩综合排名前25％）8分</van-radio>
            <van-radio name="6">二级（成绩综合排名26％-50％）6分</van-radio>
            <van-radio name="4">三级（成绩综合排名51％-75％）4分</van-radio>
            <van-radio name="2">四级（成绩综合排名76％-100％）2分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">外语水平</van-divider>
        <van-radio-group v-model="scores[4]" @change="doChange">
            <van-radio name="8">CET-6级证书或成绩达到425分、专业英语八级 8分</van-radio>
            <van-radio name="7">CET-4级证书或成绩达到425分、专业英语四级 或 外语类、艺术类、体育类专业外语课程合格 7分</van-radio>
            <van-radio name="0">均不符合 0分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">计算机水平</van-divider>
        <van-radio-group v-model="scores[5]" @change="doChange">
            <van-radio name="7">毕业研究生 或
                理科类计算机高级水平或免予此项要求的专业（本科2013年前入学毕业生：数学类、电子信息科学类、电气信息类、管理科学与工程类；本科2013年（含）后入学毕业生：数学类、电子信息类、电气类、自动化类、计算机类、管理科学与工程类）
                或 文科类专业计算机中级或省级二级水平 7分
            </van-radio>
            <van-radio name="6">理科类专业计算机中级或省级二级水平 或 文科类专业计算机初级或省级一级水平 或 艺术类、体育类专业相关课程合格 6分</van-radio>
            <van-radio name="0">均不符合 0分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">荣誉称号及竞赛获奖</van-divider>
        <van-popup v-model="show" position="bottom">
            <div class="contest-info">
                <p class="title">一、校级及以上级“三好学生”、“优秀学生”、“优秀学生干部”、“优秀毕业生”</p>
                <p>经认定的国家级 10分</p>
                <p>省（自治区、直辖市）级 5分</p>
                <p>学校级（每次1分，不超过2分） 1分</p>
                <p class="title">
                    二、在全国大学生“挑战杯”赛、全国“互联网+”大学生创新创业大赛、全国大学生（研究生）数学建模竞赛、中国研究生电子设计竞赛、全国大学生电子设计竞赛、全国大学生英语竞赛、全国大学生“飞思卡尔杯”智能汽车竞赛等全国性比赛（含地方赛区，不含专项竞赛）获奖。</p>
                <p>⑴ 上述全国性比赛奖项：</p>
                <p>一等奖 10分 二等奖 8分 三等奖 6分</p>
                <p>⑵ 上述全国性比赛地方赛区奖项：</p>
                <p>一等奖 5分 二等奖 3分 三等奖 1分</p>
            </div>
        </van-popup>
        <van-field v-model="scores[6]" type="digit" label="总分数" placeholder="自行计算，不超过15分">
            <template #button>
                <van-button size="small" type="primary" @click="show = true">查看详情</van-button>
            </template>
        </van-field>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">发明专利</van-divider>
        <van-radio-group v-model="scores[7]" @change="doChange">
            <van-radio name="5">最高学历就读期间参加学校科学研究活动并获得相应的发明专利 5分</van-radio>
            <van-radio name="0">无发明专利 0分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">就业项目</van-divider>
        <van-radio-group v-model="scores[8]" @change="doChange">
            <van-radio name="5">国家就业项目服务期满 或 上海高校毕业生参加西部计划服务期满 5分</van-radio>
            <van-radio name="0">无 0分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">用人单位要素分</van-divider>
        <van-radio-group v-model="scores[9]" @change="doChange">
            <van-radio name="5">用人单位招聘高校毕业生行为诚信规范，并与毕业生直接签订录用协议 5分</van-radio>
            <van-radio name="0">无 0分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">用人单位引进重点领域人才</van-divider>
        <van-radio-group v-model="scores[10]" @change="doChange">
            <van-radio name="3">引进重点领域人才用人单位录用上海市重点发展领域所需学科(专业)毕业生 或 用人单位录用上海市重点发展领域所需学科中的教育部、上海市、上海市教委重点学科毕业研究生
            </van-radio>
            <van-radio name="6">以上二者均符合 6分</van-radio>
            <van-radio name="0">无 0分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">承担重大项目</van-divider>
        <van-radio-group v-model="scores[11]" @change="doChange">
            <van-radio name="3">用人单位承担国家和上海经济社会发展重大项目且录用的毕业生专业与行业相匹配 或 用人单位为远郊地区教育、卫生、农业等社会公益事业单位 3分</van-radio>
            <van-radio name="6">以上二者均符合 6分</van-radio>
            <van-radio name="0">无 0分</van-radio>
        </van-radio-group>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">自主创业</van-divider>
        <p>毕业生须为符合相关要求创业企业的法定代表人且为原始发起人（不含股份转让、后期补入资金的创业情况），在企业中持股比例不低于10%。</p>
        <van-radio-group v-model="scores[12]" @change="doChange">
            <van-radio name="5">在校或休学期间创业，企业经营情况良好 5分</van-radio>
            <van-radio name="0">无 0分</van-radio>
        </van-radio-group>
        <p><a href="https://zhuanlan.zhihu.com/p/55046777">重点学科等落户详细信息请点击（可能会清空当前选择）</a></p>
        <van-button :type="total >= 72 ? 'primary' : 'info'" class="fixed-btn">当前分数：{{total}}</van-button>
    </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        scores: [],
        show: false,
      };
    },
    computed: {
      total() {
        let total = 0;
        for (const score of this.scores) {
          if (score) {
            total += parseInt(score);
          }
        }
        return total;
      }
    },
    methods: {
      doChange(name) {
        console.log(name);
      }
    }
  }
</script>

<style scoped>
    #index {
        padding: 15px 15px 60px;
    }

    p {
        font-size: 14px;
    }

    .van-radio {
        margin: 5px 0;
        font-size: 14px;
    }

    .big-title {
        font-size: 16px;
        text-align: center;
    }

    .fixed-btn {
        position: fixed;
        bottom: 15px;
        right: 15px;
    }

    .contest-info {
        padding: 15px;
        color: #888;
    }

    .contest-info .title {
        color: #323233;
    }
</style>