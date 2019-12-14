<template>
  <div class="full-width center-content">
    You are logged out
  </div>
</template>
<script>
export default {
  mounted: function () {
    sessionStorage.user = 'undefined'
  }
}
</script>

/**
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted () {
    console.log('Component mounted.')
  },
  methods: {
    formSubmit (e) {
      e.preventDefault()
      this.$axios.post('/login', {
        password: this.password,
        email: this.email
      })
        .then(response => {
          console.log(response)
          sessionStorage.userId = JSON.stringify(response.data.data.id)
          sessionStorage.userName = JSON.stringify(response.data.data.name)
          console.log(sessionStorage)
          if (response.data.data.id) {
            alert('Hello ' + sessionStorage.userName)
            this.$router.push('/createloggedin')
          } else { alert('User does not exist. Please enter your username') }
        })
    }
  } }
</script>
*/
