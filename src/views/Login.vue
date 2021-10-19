<template>
  <section class="container-fluid test_pic position-relative m-0">
    <div class="row  justify-content-center align-items-center vh-100 pb-4">
      <div class="col-lg-4 col-md-6 col-10 p-5  border-radius border-danger">
        <form class="text-muted login-form">
          <h1>Hello,Welcome to FileVista.Please enter your credentials</h1>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span
                class="input-group-text"
                id="basic-addon1"
              >
                <img
                  src="../assets/account@2x.png"
                  class="img-responsive"
                  alt="Responsive image"
                  width="30"
                  height="24"
                >
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            >
          </div>
          
          <div class="form-group">
            <label for="email">User name</label>
            <div class="">
              <img src="../assets/account@2x.png">
            </div>
            <span class="input-group-icon">
              <img
                src="../assets/account@2x.png"
                alt=""
              >
            </span>

            <input
              class="form-control"
              type="text"
              id="email"
              placeholder="jeff@doqubiz.com"
            >
          </div>
          <div class="form-group">
            <label for="passwords">Password</label>
            <input
              class="form-control"
              type="text"
              id="passwords"
              placeholder="********"
            >
          </div>
          <a class="float-end text-primary ">Forgot Password</a>
          <div class="login-divider" />

          <a
            href="#"
            class="dqbz-btn btn btn-primary col-12"
          >Login</a>
          
          <p><span>or</span></p>

          <a
            href="#"
            class=" dqbz-btn btn btn-primary col-12"
          >Use Secure Dongle Login</a>
          <a class="float-end  text-primary ">Lost USB Token?</a>
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
