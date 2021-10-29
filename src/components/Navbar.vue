<template>
  <div class="dqbz-header d-flex justify-content-between bg-light">
    <li class="nav-item d-flex align-items-center">
      <img
        src="@/assets/images/file/folder@2x.png"
        class="nav-icon"
      >
      <p
        class="p-0 m-0"
      >
        FileVista
      </p>
    </li>

    <div class="d-flex">
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
              src="@/assets/images/icon/user@2x.png"
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
                src="@/assets/images/icon/user setting@2x.png"
                class="nav-icon"
              >
              <a
                class="dropdown-item p-0"
                href="#"
              >User setting</a>
            </li>
            <li class="d-flex align-items-center">
              <img
                src="@/assets/images/icon/administrator@2x.png"
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
      <li class="nav-item d-flex align-items-center">
        <img
          src="@/assets/images/cmd/logout@2x.png"
          class="nav-icon"
        >
        <a
          class="nav-link "
          aria-current="page"
          href="#"
        >Log out</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

