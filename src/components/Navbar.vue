<template>
  <div class="dqbz-header d-flex justify-content-between bg-light">
    <li class="nav-item d-flex align-items-center">
      <img
        src="@/assets/images/file/folder@2x.png"
        class="icon24px"
      >
      <p
        class="p-0 m-0"
      >
        FileVista
      </p>
    </li>

    <div class="d-flex">
      <ul class="navbar-nav d-flex mb-2 px-1">
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
              class="icon24px"
            >
            {{ $t("GENERAL.ADMINISTRATION") }}
          </a>
          <ul
            class="dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <li class="d-flex align-items-center">
              <img
                src="@/assets/images/icon/user setting@2x.png"
                class="icon24px"
              >
              <a
                @click="usersetting"
                class="dropdown-item p-0"
                href="#"
              >{{ $t("GENERAL.USERSETTING") }}</a>
            </li>
            <li class="d-flex align-items-center">
              <img
                src="@/assets/images/icon/administrator@2x.png"
                class="icon24px"
              >
              <router-link
                :to="{ path: '/admin' }"
                class="text-decoration-none"
              >
                <a
                  class="dropdown-item p-0"
                >{{ $t("GENERAL.ADMINISTRATION") }}</a>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <router-link
        to="/login"
        class="border-start px-1 nav-item d-flex align-items-center text-decoration-none"
      >
        <!-- <li class="border-start px-1 nav-item d-flex align-items-center"> -->
        <img
          src="@/assets/images/cmd/logout@2x.png"
          class="icon24px"
        >
        <a
          class="nav-link py-0 px-1 "
          aria-current="page"
          href="#"
        >{{ $t("GENERAL.LOGOUT") }}</a>
      <!-- </li> -->
      </router-link>
    </div>
    <UserSetting />
  </div>
</template>

<script>
import UserSetting from
'../components/Modals/UserSetting.vue';

export default {
name: "Navbar",
  components: {
    UserSetting



  },
  data: () => ({
    
      
     
      
      
      

  }),
  methods: {
    usersetting(){ this.$bvModal.show('UserSetting'); },

  }


}
</script>

