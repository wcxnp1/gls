<template>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      viewportWidth: window.innerWidth,
    };
  },
  created() {
    this.handleResize = this.handleResize.bind(this); // 确保this在回调中正确指向  
    window.addEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize() {
      this.viewportWidth = window.innerWidth;
      this.$store.commit('setViewportWidth', this.viewportWidth);
      
    },
  },
};  
</script>
<style lang="scss"></style>
