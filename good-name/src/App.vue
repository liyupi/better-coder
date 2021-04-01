<template>
  <div id="app">
    <!--    头-->
    <div class="header">
      <img class="logo" alt="logo" src="./assets/logo.jpg">
      <span class="title">编程名生成</span>
    </div>
    <!--    表单-->
    <el-form ref="form" :model="form">
      <el-form-item label="个人昵称或IP">
        <el-input v-model="form.name" placeholder="如：鱼皮"></el-input>
      </el-form-item>
      <el-form-item label="编程语言/方向">
        <el-input v-model="form.domain" placeholder="如：Java、全栈、编程"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(false)">一键生成</el-button>
        <el-button type="success" @click="onSubmit(true)" class="one-btn">就它了！</el-button>
      </el-form-item>
    </el-form>
    <!--    展示列表-->
    <div>
      <el-tag v-for="(item,idx) in list" v-bind:key="idx" :type="types[idx % types.length]" class="list-item">{{
          item
        }}
      </el-tag>
    </div>
    <div class="footer">
      <a href="https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png" target="_blank" class="copyright">
        by 程序员鱼皮
      </a>
    </div>
  </div>
</template>

<script>
import {getList} from './data'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      form: {
        name: '',
        domain: '',
      },
      list: [],
      types: ['', 'success', 'info', 'warning', 'danger'],
    }
  },
  methods: {
    onSubmit(single) {
      let {name, domain} = this.form;
      if (!name && !domain) {
        domain = '编程';
      }
      this.list = getList(name, domain);
      if (single) {
        this.list = [this.list[Math.floor(Math.random() * this.list.length)]]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 600px;
  margin: 60px auto 0;
  padding: 0 16px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
}

.logo {
  width: 80px;
}

.title {
  font-size: 2rem;
  margin-left: 1rem;
}

.one-btn {
  margin-left: 2rem !important;
}

.list-item {
  margin: 8px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 5px;
}

.copyright {
  color: #fff;
}

</style>
