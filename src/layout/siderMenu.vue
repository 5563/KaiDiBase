<template>
  <div class="sidebar-container" :class="{ 'is-collapsed': isSidebarCollapsed }">
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        class="sidebar-menu"
        :collapse="isSidebarCollapsed"
        :unique-opened="true"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <el-menu-item index="dashboard">
          <el-icon><DataLine /></el-icon>
          <template #title>仪表盘</template>
        </el-menu-item>
        
        <el-sub-menu index="users">
          <template #title>
            <el-icon><User /></el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item index="users-list">用户列表</el-menu-item>
          <el-menu-item index="users-roles">角色管理</el-menu-item>
          <el-menu-item index="users-permissions">权限设置</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="content">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>内容管理</span>
          </template>
          <el-menu-item index="content-articles">文章管理</el-menu-item>
          <el-menu-item index="content-categories">分类管理</el-menu-item>
          <el-menu-item index="content-tags">标签管理</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="analytics">
          <template #title>
            <el-icon><TrendCharts /></el-icon>
            <span>数据分析</span>
          </template>
          <el-menu-item index="analytics-visitors">访问统计</el-menu-item>
          <el-menu-item index="analytics-traffic">流量分析</el-menu-item>
          <el-menu-item index="analytics-performance">性能监控</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="settings">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统设置</span>
          </template>
          <el-menu-item index="settings-general">基础设置</el-menu-item>
          <el-menu-item index="settings-security">安全配置</el-menu-item>
          <el-menu-item index="settings-backup">备份恢复</el-menu-item>
        </el-sub-menu>
        
        <el-menu-item index="profile">
          <el-icon><UserFilled /></el-icon>
          <template #title>个人中心</template>
        </el-menu-item>
        
        <el-menu-item index="help">
          <el-icon><QuestionFilled /></el-icon>
          <template #title>帮助支持</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref, provide, inject } from 'vue';
import { 
  DataLine, 
  User, 
  Document, 
  TrendCharts, 
  Setting,
  UserFilled,
  QuestionFilled
} from '@element-plus/icons-vue';

const activeMenu = ref('dashboard');
const isSidebarCollapsed = inject('isSidebarCollapsed');

// 提供这些值给headerBox组件

const toggleSidebar =  provide('toggleSidebar', () =>{});
</script>

<style scoped>
.sidebar-container {
  width: 210px;
  background-color: #304156;
  transition: width 0.28s;
  z-index: 998;
  overflow: hidden;
  height: 100%;
}

.is-collapsed {
  width: 64px;
}

.sidebar-menu {
  height: 100%;
  border-right: none;
}

.sidebar-menu:not(.el-menu--collapse) {
  width: 210px;
}

/* Hide el-menu horizontal scroll */
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
