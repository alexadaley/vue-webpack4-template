<template>
  <div>
    <!--Section: Contact v.2-->
    <section class="mb-4">
      <!--Section heading-->
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact Me
      </h2>
      <!--Section description-->
      <p class="text-center w-responsive mx-auto mb-5">
        I want to hear from you! Questions, comments, and suggestions are welcome.
      </p>

      <div class="row">
        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="https://formspree.io/xayybjye"
            method="POST"
          >
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    class="form-control"
                  >
                  <label
                    for="name"
                    class=""
                  >Your name</label>
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    class="form-control"
                  >
                  <label
                    for="email"
                    class=""
                  >Your email</label>
                </div>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    class="form-control"
                  >
                  <label
                    for="subject"
                    class=""
                  >Subject</label>
                </div>
              </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-12">
                <div class="md-form">
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                  />
                  <label for="message">Your message</label>
                </div>
              </div>
            </div>
            <!--Grid row-->
          </form>

          <div class="text-center text-md-left">
            <a
              class="btn btn-primary"
              onclick="document.getElementById('contact-form').submit();"
            >Send</a>
          </div>
          <div class="status" />
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <i class="fas fa-map-marker-alt fa-2x" />
              <p>Paris, France 75007</p>
            </li>

            <li>
              <i class="fas fa-phone mt-4 fa-2x" />
              <p>01 23 45 67 89</p>
            </li>

            <li>
              <i class="fas fa-envelope mt-4 fa-2x" />
              <p>a96466@aup.edu</p>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
    </section>
    <!--Section: Contact v.2-->
  </div>
</template>
