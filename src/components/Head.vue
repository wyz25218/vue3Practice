<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div class="my-menu">
        <slot><img src="" alt=""></slot>
        <el-menu-item v-for="(item, index) in list" :key="item" :index="index">{{item}}</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      require: true
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleSelect(index) {
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-menu {
  display: flex;
}
</style>
