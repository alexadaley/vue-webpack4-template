<template>
  <div class="container-fluid">
    <div>
  <b-card
    overlay
    img-src="static/img/pink.jpg"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>
</div>

    <div>
      <b-card
        bg-variant="dark"
        text-variant="white"
        title="Card Title"
      >
        <b-card-text>
          With supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-button
          href="#"
          variant="primary"
        >
          Go somewhere
        </b-button>
      </b-card>
    </div>

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



