<template>
  <div
    class="dqbz-header d-flex justify-content-between"
    style="background-color:#E6F0FA;"
  >
    <li class="nav-item d-flex align-items-center">
      <button class="dqbz-previous">
        <img
          src="@/assets/arrow-left@2x.png"
          class="nav-icon"
        >
      </button>

      
      <p
        class="m-0"
      >
        FileVista- Administration
      </p>
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
    </ul>
    <!-- </div> -->
    <!-- </nav> -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
