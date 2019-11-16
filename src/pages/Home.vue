<template>
  <div class="full-width center-content">
    <img src="static/img/logo.png">
    <p> Welcome to Lex's Blog...for those moments in life when you dont have a handbook.</p>
    <ul>
      <li
        v-if="user"
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: undefined
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/z0wum')
      .then(response => response.json())
      .then(json => {
        this.products = json.products
      })
  },
  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.user = JSON.parse(v)
    }
  }
}
</script>
