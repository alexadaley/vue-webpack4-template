<template>
  <div class="container center-content">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          cols="12"
          offset="0"
        >
          <div>
            <b-navbar
              toggleable="lg"
              type="dark"
              variant="dark"
            >
              <b-navbar-toggle target="nav-collapse" />
              <b-collapse
                id="nav-collapse"
                is-nav
              >
                <b-navbar-nav>
                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  >
                    <h4> Home </h4>
                  </b-link>
                  <b-link
                    to="/whats"
                    router-tag="b-nav-item"
                  >
                    <h4> WhatsNew </h4>
                  </b-link>
                  <b-link
                    to="/stories"
                    router-tag="b-nav-item"
                  >
                    <h4> Travel </h4>
                  </b-link>
                  <b-link
                    to="/about"
                    router-tag="b-nav-item"
                  >
                    <h4> AboutMe </h4>
                  </b-link>
                  <b-link
                    to="/Contact"
                    router-tag="b-nav-item"
                  >
                    <h4> ContactMe </h4>
                  </b-link>
                  <b-link
                    to="/login"
                    router-tag="b-nav-item"
                  >
                    <h4> Login </h4>
                  </b-link>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="stylus" scoped>
.container
    font-family 'courier', 'Arial Narrow', Arial, sans-serif
    max-width 1200px
</style>
