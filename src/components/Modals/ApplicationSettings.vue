<template>
  <b-modal
    id="ApplicationSettings"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="title"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    body-bg-variant="bgmodal"
    footer-bg-variant="white"
  >
    <!-- <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    > -->
    <div class="modal-popout-bg p-3">
      <ul
        class="nav nav-tabs"
        id="myTab"
        role="tablist"
      >
        <li
          class="nav-item"
          role="presentation"
        >
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#General"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            General
          </button>
        </li>
        <li
          class="nav-item"
          role="presentation"
        >
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Logging
          </button>
        </li>
        <li
          class="nav-item"
          role="presentation"
        >
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Email
          </button>
        </li>
      </ul>
      <div
        class="tab-content "
        style="height:400px"
        id="myTabContent"
      >
        <div
          class="tab-pane fade show active"
          id="General"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="col-12 py-3">
            <div class="form-check align-items-center">
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                Passwords will expire after  <input
                  type="text"
                  class=" form-control w-25 mx-2"
                >days

              </label>
            </div>
            <div class="form-check">
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                Users will be locked out after 
                <input
                  type="text"
                  class=" form-control w-25 mx-2"
                >invalid login attempts


              </label>
            </div>
            <div class="form-check">
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                Maximum public link age 
                <input
                  type="text"
                  class=" form-control w-25 mx-2"
                >days
              </label>
            </div>
            <div
              class="form-check align-items-center
"
            >
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                Maximum public link hits
                <input
                  type="text"
                  class=" form-control w-25 mx-2"
                >
              </label>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div class="mt-3">
            <p class="my-1">Log Events</p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="All"
              >
              <label
                class="form-check-label"
                for="All"
              >
                All
              </label>
            </div>

            <hr class="mt-1">
            <div class="d-flex flex-column align-items-center">
              <div class="col-10 d-flex justify-content-between">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Login"
                    value="Login"
                  >
                  <label
                    class="form-check-label"
                    for="Login"
                  >Login</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Extract"
                    value="Extract"
                  >
                  <label
                    class="form-check-label"
                    for="Extract"
                  >Extract</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Delete"
                    value="Delete"
                  >
                  <label
                    class="form-check-label"
                    for="Delete"
                  >Delete</label>
                </div>
              </div>
              <div class="col-10 d-flex justify-content-between">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Failure"
                    value="Failure"
                  >
                  <label
                    class="form-check-label"
                    for="Failure"
                  >Failure</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Download"
                    value="Download"
                  >
                  <label
                    class="form-check-label"
                    for="Download"
                  >Download</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Copy"
                    value="Copy"
                  >
                  <label
                    class="form-check-label"
                    for="Copy"
                  >Copy</label>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <p class="fw-bold">
              Log Size
            </p>
            <div class="col-12">
              <div class="d-flex align-items-center">
                <label
                  class="form-check-label align-items-center d-flex"
                  for=""
                >
                  Maximum log size  <input
                    type="text"
                    class=" form-control mx-3 w-25"
                  >events

                </label>
              </div>
              <p class="py-2">
                When maximum log size is reached
              </p>
              <div class="d-flex align-items-center">
                <label
                  class="form-check-label align-items-center d-flex"
                  for=""
                >
                  Delete events older than <input
                    type="text"
                    class=" form-control mx-3 w-25"
                  > days


                </label>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="cancel-btn btn  me-2"
              >
                Clear Log
              </button>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div class="form-check py-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Sendemailnotifications"
            >
            <label
              class="form-check-label"
              for="Sendemailnotifications"
            >
              Send email notifications
            </label>
          </div>

          <hr class="">


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Fromemailaddress"
              class=""
            >From email address</label>
            <input
              type="email"
              class="form-control inline-block width-270"
              id="Fromemailaddress"
            >
          </div>


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Email"
              class="col-form-label"
            >SMTP host</label>
                  
                  
            <select
              class="form-select width-270"
              aria-label="Default select example"
            >
              <option selected>
                Anonymous
              </option>
            </select>
          </div>


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="SMTPport"
              class=""
            >SMTP port</label>
            <input
              type="email"
              class="form-control inline-block width-150"
              id="SMTPport"
            >
          </div>


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="SMTPauthentication"
              class="col-form-label"
            >SMTP authentication</label>
                  
                  
            <select
              class="form-select  width-270
"
              aria-label="Default select example"
            >
              <option selected>
                Anonymous
              </option>
            </select>
          </div>



          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Username"
              class="form-label"
            >User name</label>
            <input
              type="Password"
              class="form-control width-270"
              id="Username"
              disabled
            >
          </div>
          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Password"
              class="form-label"
            >Password</label>
            <input
              type="Password"
              class="form-control width-270"
              id="Password"
              disabled
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="UseSSL"
            >
            <label
              class="form-check-label"
              for="UseSSL"
            >
              Use SSL

            </label>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="cancel-btn btn  me-2"
            >
              Test email
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- </form> -->
    <template
      #modal-cancel
      variant="outline-primary"
      class="cancel-btn"
    >
      Cancel
    </template>

    <template #modal-ok>
      ok
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "ApplicationSettings",
  props: { title: { type: String, default: "Application Settings" } },

  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    handleSubmit() {
      // this.$nextTick(() => {
      this.showModal = false;
      // });
    },
  },
};
</script>
