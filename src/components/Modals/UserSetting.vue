<template>
  <b-modal
    id="UserSetting"
    class="modal-content"
    body-text-variant="warning"
    centered
    :title="$t('TITLE.USERSETTING')"
    header-bg-variant="bgheader"
    cancel-variant="outline-secondary"
    ok-variant="primary"
    footer-bg-variant="bgmodal"
    body-bg-variant="bgmodal"
  >
    <form
      class="container"
      ref="form"
      @submit.stop.prevent="handleSubmit"
    >
      <div class="modal-popout-bg p-3">
        <div class="d-flex justify-content-between align-items-center">
          <p class="text-center m-0">
            {{ $t("GENERAL.DISPLAYLANGUAGE") }}
          </p>
          <select
            class="form-select w-75 form-select-sm" 
            aria-label="Default select example"
            v-model="locale"
            @change="changeLocale()"
          >
            <!-- <option data-lang="en" selected>
            English
          </option>
          <option data-lang="tw">
            繁體中文
          </option> -->
            <option value="en">English</option>
            <option value="tw">繁體中文</option>
          </select>
        </div>
            
        <hr class="">



        <div class="d-flex justify-content-between ">
          <div class="d-flex flex-column justify-content-center ">
            <div
              class="d-flex justify-content-between mb-5"
            >
              <span class="text-dark">
                {{ $t("GENERAL.PASSWORD") }}
              </span>
              <p class="mx-5 m-0 text-gray">
                ********
              </p>
            </div>
            
            <div
              class="d-flex justify-content-between mb-5"
            >
              <span class="text-dark">
                {{ $t("GENERAL.CONFIRMPASSWORD") }}
              </span>
              <p class="mx-5 m-0 text-gray">
                ********
              </p>
            </div>
          </div>
          <a
            href="#"
            class="text-decoration-none ml-auto text-primary"
          >{{ $t("GENERAL.CHANGEPASSWORD") }}</a>
        </div>
      </div>
    </form>
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
name: "UserSetting",
data() {
     return {
      showModal: false,
      locale: localStorage.getItem("locale") || "en"
     }
   },
   created() {
      this.$i18n.locale = this.locale;
      console.log(this.$i18n.locale);
      
    },
   methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
     },
     changeLocale(){
       this.$i18n.locale = this.locale;
       localStorage.setItem('locale', this.locale)
     },
     handleSubmit(){
       this.showModal = false
     }
   }
}
</script>


