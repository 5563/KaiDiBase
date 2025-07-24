<template>
     <el-container style="height: 100vh; display: flex; flex-direction: column;">
      <el-header>
        <headerBox />
      </el-header>
      <el-container style="display: flex; flex: 1;">
        <el-aside width="max-content">
          <siderMenu />
        </el-aside>
        <el-main style="flex: 1; padding: 10px;">
            <slot></slot>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup>
import headerBox from './headerBox.vue'
import siderMenu from './siderMenu.vue'
import { ref, provide } from 'vue'
import { ElContainer, ElHeader, ElMain, ElAside } from 'element-plus'

// 从siderMenu组件获取侧边栏折叠状态
const isSidebarCollapsed = ref(false)
provide('isSidebarCollapsed', isSidebarCollapsed)
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
provide('toggleSidebar', toggleSidebar)
// const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
</script>

<style scoped>

</style>
