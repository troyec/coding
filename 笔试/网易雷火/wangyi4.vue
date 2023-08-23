<template>
  <div class="arrow-container">
    <img :src="arrowImg" :style="calcStyle(angle)" />
  </div>
</template>

<script>
export default {
  props: {
    angle: {
      type: Number,
      required: true,
    },
    arrowImg: {
      type: String,
      default: "path_to_arrow_image", // 替换为箭头图片的路径
    },
  },
  computed: {
    arrowStyle() {
          const angleRad = (this.angle / 180) * Math.PI; // 将角度转换为弧度
      Math.tanh()
      const rotation = `rotate(${angleRad}rad)`;
      return {
        transform: rotation,
      };
    },
  },
};
</script>

<style scoped>
.arrow-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
