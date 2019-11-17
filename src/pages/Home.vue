<template>
  <div class="container-fluid">
    <div>
      <b-card
        overlay
        img-src="static/img/airplane.jpg"
        img-alt="Card Image"
        text-variant="white"
        title="November 2019"
        sub-title=""
      >
        <b-card-text>
          <h1> Welcome to Lex's Blog! </h1>
        </b-card-text>
      </b-card>
    </div>

    <div>
      <b-card-group>
        <b-card
          title="Are you telling me we can shop and skate?"
        >
          <b-card-text>
            There is soon to be a ice-skating rink set up on the top of Galleries Lafayette!
          </b-card-text>
          <b-button
            href="https://www.sortiraparis.com/news/christmas/articles/198503-paris-an-ice-skating-rink-soon-to-be-set-up-on-galeries-lafayette-rooftop/lang/en"
            variant="primary"
          >
            Grab me some skates
          </b-button>
        </b-card>
        <b-card
          title="Im ready for hot cocoa and Chistmas lights"
        >
          <b-card-text>
            Christmas lights and decorations are being set up on the Champs-Elysées this week!
          </b-card-text>
          <b-button
            href="https://www.sortiraparis.com/arts-culture/walks/articles/45753-christmas-lights-2019-on-paris-champs-elysees-with-ludivine-sagnier-date/lang/en"
            variant="primary"
          >
            Show me the magic
          </b-button>
        </b-card>

        <b-card
          title="A night out with Fitzgerald"
        >
          <b-card-text>
            There will be a walking tour for the fans of Woody Allens movie 'Midnight in Paris'!
          </b-card-text>
          <b-button
            href="https://exploreparis.com/en/11-midnight-in-paris-movie-tour.html"
            variant="primary"
          >
            Ready to walk
          </b-button>
        </b-card>
      </b-card-group>
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
