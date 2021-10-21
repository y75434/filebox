<template>
  <div class="dqbz-header d-flex justify-content-between bg-light">
    <!-- <nav class="navbar navbar-expand-lg navbar-light "> -->
    <!-- <div class="container-fluid"> -->
    <li class="nav-item d-flex align-items-center">
      <img
        src="@/assets/folder@2x.png"
        class="nav-icon"
      >
      <a
        class="nav-link active"
        aria-current="page"
        href="#"
      >FileVista</a>
    </li>

    <ul class="navbar-nav d-flex mb-2 mb-lg-0">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="@/assets/user@2x.png"
            class="nav-icon"
          >
          Administration
        </a>
        <ul
          class="dropdown-menu"
          aria-labelledby="navbarDropdown"
        >
          <li class="d-flex align-items-center">
            <img
              src="@/assets/user setting@2x.png"
              class="nav-icon"
            >
            <a
              class="dropdown-item p-0"
              href="#"
            >User setting</a>
          </li>
          <li class="d-flex align-items-center">
            <img
              src="@/assets/administrator@2x.png"
              class="nav-icon"
            >
            <a
              class="dropdown-item p-0"
              href="#"
            >Administration</a>
          </li>
        </ul>
      </li>
      <li class="nav-item d-flex align-items-center">
        <img
          src="@/assets/logout@2x.png"
          class="nav-icon"
        >
        <a
          class="nav-link active"
          aria-current="page"
          href="#"
        >Log out</a>
      </li>
    </ul>
    <!-- </div> -->
    <!-- </nav> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
