<template>
  <header class="header-container">
    <div class="header-left">
      <div class="logo-container">
        <el-icon><Monitor /></el-icon>
        <h1 class="logo-text">后台管理系统</h1>
      </div>
      <el-icon class="toggle-sidebar" @click="toggleSidebar">
        <Fold v-if="!isSidebarCollapsed" />
        <Expand v-else />
      </el-icon>
      <div class="breadcrumb-container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>仪表盘</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="header-right">
      <el-input
        class="search-input"
        placeholder="搜索..."
        prefix-icon="Search"
        v-model="searchQuery"
        clearable
      />
      <div class="header-actions">
        <el-tooltip content="全屏" placement="bottom">
          <el-icon class="action-icon" @click="toggleFullScreen">
            <FullScreen />
          </el-icon>
        </el-tooltip>
        <el-tooltip content="通知" placement="bottom">
          <el-badge :value="3" class="notification-badge">
            <el-icon class="action-icon"><Bell /></el-icon>
          </el-badge>
        </el-tooltip>
        <el-dropdown trigger="click">
          <div class="user-info">
            <el-avatar :size="32" src="https://placeholder.pics/svg/32x32" />
            <span class="username">管理员</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="User">个人信息</el-dropdown-item>
              <el-dropdown-item icon="Setting">设置</el-dropdown-item>
              <el-dropdown-item divided icon="SwitchButton">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, inject } from 'vue';
import { 
  Monitor, 
  Fold, 
  Expand, 
  FullScreen, 
  Bell
} from '@element-plus/icons-vue';

const searchQuery = ref('');
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false));
const toggleSidebar = inject('toggleSidebar', () => {});

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};
</script>

<style scoped>
.header-container {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  width: 100%;
  z-index: 998;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  padding-right: 15px;
  margin-right: 15px;
  border-right: 1px solid #dcdfe6;
}

.logo-text {
  margin: 0 0 0 8px;
  font-size: 18px;
  font-weight: 600;
  color: #303133;
}

.toggle-sidebar {
  font-size: 20px;
  cursor: pointer;
  margin-right: 15px;
  color: #606266;
}

.breadcrumb-container {
  margin-left: 8px;
}

.header-right {
  display: flex;
  align-items: center;
}

.search-input {
  width: 200px;
  margin-right: 20px;
}

.header-actions {
  display: flex;
  align-items: center;
}

.action-icon {
  font-size: 20px;
  cursor: pointer;
  padding: 0 10px;
  color: #606266;
}

.notification-badge {
  margin-right: 5px;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 8px;
  margin-left: 10px;
}

.username {
  margin-left: 8px;
  font-size: 14px;
  color: #303133;
}
</style>
