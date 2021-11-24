<template>
  <b-modal
    id="ApplicationSettings"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('GENERAL.APPLICATIONSETTINGS')"
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
            {{ $t("MODAL.GENERAL") }}
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
            {{ $t("MODAL.LOGGING") }}
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
            {{ $t("MODAL.EMAIL") }}
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
                {{ $t("MODAL.PASSWORDSWILLEXPIRE") }} <input
                  type="text"
                  class=" form-control w-25 mx-2"
                >{{ $t("MODAL.DAYS") }}

              </label>
            </div>
            <div class="form-check">
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                {{ $t("MODAL.WILLBELOCKEDOUT") }}
                <input
                  type="text"
                  class=" form-control w-25 mx-2"
                >{{ $t("MODAL.INVALIDLOGIN") }}


              </label>
            </div>
            <div class="form-check">
              <label
                class="form-check-label align-items-center d-flex"
                for=""
              >
                {{ $t("MODAL.MAXIMUMPUBLICLINKAGE") }}
                <input
                  type="text"
                  class=" form-control w-25 mx-2"
                >{{ $t("MODAL.DAYS") }}
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
                {{ $t("MODAL.MAXIMUMPUBLICLINKHITS") }}
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
            <p class="my-1">
              {{ $t("MODAL.LOGEVENTS") }}
            </p>
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
                {{ $t("GENERAL.ALL") }}

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
                  >{{ $t("GENERAL.LOGIN") }}</label>
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
                  >{{ $t("GENERAL.EXTRACT") }}</label>
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
                  >{{ $t("HOME.DELETE") }}</label>
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
                  >{{ $t("MODAL.FAILURE") }}</label>
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
                  >{{ $t("HOME.DOWNLOAD") }}</label>
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
                  >{{ $t("HOME.COPY") }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <p class="fw-bold">
              {{ $t("MODAL.LOGSIZE") }}
            </p>
            <div class="col-12">
              <div class="d-flex align-items-center">
                <label
                  class="form-check-label align-items-center d-flex"
                  for=""
                >
                  {{ $t("MODAL.MAXIMUMLOGSIZE") }}  <input
                    type="text"
                    class=" form-control mx-3 w-25"
                  >{{ $t("MODAL.EVENTS") }}

                </label>
              </div>
              <p class="py-2">
                {{ $t("MODAL.WHENMAXIMUMLOGSIZEISREACHED") }}
              </p>
              <div class="d-flex align-items-center">
                <label
                  class="form-check-label align-items-center d-flex"
                  for=""
                >
                  {{ $t("MODAL.DELETEEVENTSOLDERTHAN") }}<input
                    type="text"
                    class=" form-control mx-3 w-25"
                  > {{ $t("MODAL.DAYS") }}



                </label>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="cancel-btn btn  me-2"
              >
                {{ $t("MODAL.CLEARLOG") }}
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
              {{ $t("MODAL.SENDEMAILNOTIFICATIONS") }}

            </label>
          </div>

          <hr class="">


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Fromemailaddress"
              class=""
            >{{ $t("MODAL.FROMEMAILADDRESS") }}</label>
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
            >{{ $t("MODAL.SMTPHOST") }}
            </label>
                  
                  
            <select
              class="form-select width-270"
              aria-label="Default select example"
            >
              <option selected>
                {{ $t("MODAL.ANONYMOUS") }}
              </option>
            </select>
          </div>


          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="SMTPport"
              class=""
            >{{ $t("MODAL.SMTPPORT") }}</label>
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
            >{{ $t("MODAL.SMTPAUTHENTICATION") }}</label>
                  
                  
            <select
              class="form-select  width-270
"
              aria-label="Default select example"
            >
              <option selected>
                {{ $t("MODAL.ANONYMOUS") }}
              </option>
            </select>
          </div>



          <div class="w-100 d-flex align-items-center justify-content-between mb-2">
            <label
              for="Username"
              class="form-label"
            >{{ $t("MODAL.USERNAME") }}</label>
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
            >{{ $t("GENERAL.PASSWORD") }}</label>
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
              {{ $t("MODAL.USESSL") }}

            </label>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="cancel-btn btn  me-2"
            >
              {{ $t("MODAL.TESTEMAIL") }}
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
      {{ $t("GENERAL.CANCEL") }}
    </template>

    <template #modal-ok>
      {{ $t("GENERAL.OK") }}
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
