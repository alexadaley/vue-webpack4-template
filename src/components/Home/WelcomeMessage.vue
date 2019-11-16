<template>
  <div>
    <h3>Hello {{ name }} ...for those moments in life when you dont have a handbook.</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
