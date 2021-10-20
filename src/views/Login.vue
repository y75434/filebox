<template>
  <section class="container-fluid  m-0">
    <div class="col-lg-12 d-none d-md-block  login_pic bg-cover vh-100" />
    <div class="row  justify-content-center align-items-center vh-100 pb-4">
      <div class="col-lg-4 col-md-6 col-10 p-5  form">
        <form class="text-muted login-form p-5">
          <h1
            class=""
            style="color:#2066B0;"
          >
            Hello,Welcome to FileVista.Please enter your credentials
          </h1>
          <div class="input-group mb-3">
            <div class="input-group-prepend" />
          </div>
          
          <div class="form-group border-info">
            <label for="email" class="my-2">User name</label>
            <!-- <img
              class="login-icon"
              src="@/assets/view@2x.png"
            > -->
            <input
              class="form-control"
              type="text"
              id="email"
              placeholder="jeff@doqubiz.com"
            >
            <!-- <label for="email">
              <div class="ab" />
              <input
                class="form-control"
                type="text"
                id="email"
                placeholder="jeff@doqubiz.com"
              >

            </label> -->
          </div>
          <div class="form-group">
            <label for="passwords" class="my-2">Password</label>
            <input
              class="form-control"
              type="text"
              id="passwords"
              placeholder="********"
            >
          </div>

          <div class="d-flex justify-content-between my-2">
            <span class="text-danger">
              password error msg
            </span>
            <a
              href="#"
              class=" float-end text-primary"
            >Forgot Password</a>
          </div>
          

          <a
            href="#"
            class="dqbz-btn btn btn-primary col-12"
          >Login</a>
          
          <p class="my-4"><span>or</span></p>

          <a
            href="#"
            style="background-color:#28d4ca; color:white;"
            class=" dqbz-btn btn col-12"
          >Use Secure Dongle Login</a>
          <a class="float-end my-3 text-primary ">Lost USB Token?</a>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	name: 'Login',
	components: {},
	data: () => ({}),
	mounted() {},
};
</script>

<style scoped>

</style>
