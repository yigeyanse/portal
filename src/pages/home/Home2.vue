<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-logo topbar-btn">
        <img src="../assets/images/hp_logo.png">
        <span class="topbar-logo-text" v-show="!collapsed">
          HPPS PORTAL
        </span>
        <span style="display: inline-block;margin-left: 30px">|</span>
      </div>
      <div class="topbar-title">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Work Place</a></li>
          <li><a href="">KMS</a></li>
          <li><a href="">Admin</a></li>
        </ul>
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-user"></i> {{nickname}}  <i
            class="iconfont icon-down"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="jumpTo('/user/profile')"><span style="color: #555;font-size: 14px;">个人信息</span></div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="jumpTo('/user/changepwd')"><span style="color: #555;font-size: 14px;">修改密码</span></div>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <!--中间-->
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <aside>
        <!--展开折叠开关-->
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="fa fa-bars" v-show="!collapsed"></i>
          <i class="fa fa-bars fa-rotate-90" v-show="collapsed"></i>
        </div>
        <!--导航菜单-->
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu :default-active="defaultActiveIndex" router :collapse="collapsed" @select="handleSelect">
            <template v-for="(item,index) in menus" v-if="item.menuShow">
              <el-submenu v-if="!item.leaf" :index="index+''">
                <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
                <el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow"
                              :class="$route.path==term.path?'is-active':''">
                  <i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path"
                            :class="$route.path==item.children[0].path?'is-active':''">
                <i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-scrollbar>
        <el-card class="filter-card box-card">
          <div slot="header" class="clearfix">
            <span>Filter</span>
          </div>
          <ft></ft>
        </el-card>
      </aside>

      <!--右侧内容区-->
      <!--右侧内容区-->
      <section class="content-container" v-loading="$store.state.loading"
               element-loading-text="拼命加载中"
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(255, 255, 255, 0)"
      >
        <el-scrollbar>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </el-scrollbar>
      </section>
    </el-col>

  </el-row>
</template>

<script>
  import {bus} from "../bus.mock";
  import API from "../api/api_user";
  import ft from "./Filter";

  export default {
    name: "home",
    components: { ft },
    created() {
      bus.$on("setNickName", text => {
        this.nickname = text;
      });

      bus.$on("goto", url => {
        if (url === "/login") {
          localStorage.removeItem("access-user");
        }
        this.$router.push(url);
      });
      this.defaultActiveIndex = this.$route.path
    },
    data() {
      return {
        defaultActiveIndex: "0",
        nickname: "",
        collapsed: false,
        menus: []
      };
    },
    methods: {
      handleSelect(index) {
        this.defaultActiveIndex = index;
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },
      jumpTo(url) {
        if (url.indexOf("http") != -1) {
        } else {
          this.defaultActiveIndex = url;
          this.$router.push(url); //用go刷新
        }

      },
      logout() {
        let that = this;
        this.$confirm("确认退出吗?", "提示", {
          confirmButtonClass: "el-button--warning"
        })
          .then(() => {
            //确认
            that.loading = true;
            //
            localStorage.removeItem("access-token");
            localStorage.removeItem("menus")
            API.logout('').then(function (res) {
              that.$message.error({showClose: true, message: res.msg, duration: 2000});
            })
            that.$router.go("/login"); //用go刷新
          })
          .catch(() => {

          });
      },

    },
    mounted() {
      this.menus = JSON.parse(window.localStorage.getItem('menus'));
      // if (user) {
      //   user = JSON.parse(user);
      //   this.nickname = user.nickname || '';
      // }
      let that = this;
      API.tokenUser().then(function (result) {
        that.nickname = result.username
      }).catch(
        () => {
          localStorage.removeItem("access-token");
          that.$router.go("/login"); //用go刷新
        }
      );
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;

    .topbar-wrap {
      height: 50px;
      line-height: 50px;
      background: #017DBB;
      padding: 0px;
      .topbar-btn {
        color: #fff;
      }
      .topbar-logo {
        display: inline-block;
      }
      .topbar-logo-text {
        line-height: 26px;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        padding-left: 15px;
        padding-right: 15px;
      }
      .topbar-logo img{
        height: 30px;
        margin-left: 20px;
        vertical-align: middle;
      }
      .topbar-title {
        text-align: left;
        padding-left: 10px;
        display: inline-block;
        ul{
          display: inline;
        }
        li{
          list-style: none;
          display: inline;
          padding-right: 10px;
          a{
            width: 100px;
            text-align: center;
            display: inline-block;
            font-size: 14px;
            font-weight: 600;
            color: #fff;
            &:hover{
              background: #0096D6;
            }
          }
        }
      }
      .topbar-account {
        float: right;
        padding-right: 12px;
      }
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        padding-left: 10px;
      }
    }
    .main {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 50px;
      bottom: 0px;
      overflow: hidden;
      background: #f2f2f2;
    }

    aside {
      min-width: 50px;
      background: #ffffff;
      box-shadow: 0px 0px 4px 0px rgba(0, 24, 34, 0.11);
      margin-bottom: 10px;
      &::-webkit-scrollbar {
        display: none;
      }

      .el-scrollbar{
        height: 280px;
      }

      .el-menu {
/*        height: 100%; !*写给不支持calc()的浏览器*!
        height: -moz-calc(100% - 80px);
        height: -webkit-calc(100% - 80px);
        height: calc(100% - 80px);*/
        border-radius: 0px;
        background-color: #ffffff;
        border-right: 0px;

        &.showSidebar {
          overflow-x: hidden;
          overflow-y: auto;
        }
      }

      .el-submenu .el-menu-item {
        min-width: 68px;;
      }
      .el-menu {
        width: 200px;
      }
      .el-menu--collapse {
        width: 68px;
        text-align: center;
        .fa {
          vertical-align: middle;
          margin-right: 0px;
          font-size: 18px;
        }
      }

      .el-menu .el-menu-item,
      .el-submenu .el-submenu__title {
        height: 46px;
        line-height: 46px;
      }
    }

    .menu-toggle {
      background: #fff;
      text-align: center;
      height: 36px;
      line-height: 36px;
      border-bottom: 1px solid #efefef;
      color: #444;
      font-weight: 600;
      font-size: 14px;
    }

    .content-container {
      background: #fff;
      flex: 1;
      padding: 10px;
      padding-bottom: 1px;
      margin: 10px;

      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
      .el-scrollbar{
        height: 100%;
      }
    }
  }
</style>
<style lang="scss">
  .el-card{
    height: 100%; //写给不支持calc()的浏览器
    height: -moz-calc(100% - 317px);
    height: -webkit-calc(100% - 317px);
    height: calc(100% - 317px);
    border: 0px !important;
    border-radius: 0px !important;
    .el-card__header{
      background: #017DBB;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      border-bottom: 0px;
    }
  }

  .el-scrollbar__wrap {
    overflow-x: hidden !important;
  }

  .el-scrollbar__bar.is-horizontal {
    display: none !important;
  }

  aside .el-scrollbar__bar.is-vertical {
    display: none !important;
  }

  .filter-card{
    width: 200px;
    .el-card__body {
      padding: 10px 10px 0px 12px !important;
    }
    .el-card__header {
      padding: 12px 20px;
    }
    .el-form-item__label {
      font-size: 13px;
    }
  }
</style>
