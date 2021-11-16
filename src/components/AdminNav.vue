<template>
  <div
    class="dqbz-header d-flex justify-content-between bg-lightblue"
  >
    <li class="nav-item d-flex align-items-center">
      <router-link
        :to="{ path: '/' }"
        class="dqbz-previous"
      >
        <img
          src="@/assets/images/arrow/arrow-left@2x.png"
          class="nav-icon"
        >
      </router-link>

      
      <p
        class="m-0"
      >
        FileVista- Administration
      </p>
    </li>
    <div class="d-flex">
      <ul class="navbar-nav d-flex align-items-center mb-2 px-1">
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
            {{ $t("GENERAL.ADMINISTRATION") }}
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
                @click="usersetting"

                class="dropdown-item p-0"
                href="#"
              >{{ $t("GENERAL.USERSETTING") }}</a>
            </li>
            <li class="d-flex align-items-center">
              <img
                src="@/assets/images/icon/administrator@2x.png"
                class="nav-icon"
              >
              <a
                class="dropdown-item p-0"
                href="#"
              >{{ $t("GENERAL.ADMINISTRATION") }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <li class="border-start nav-item d-flex px-1 align-items-center">
        <img
          src="@/assets/images/cmd/logout@2x.png"
          class="nav-icon"
        >
        <router-link
          :to="{ path: '/login' }"
          class="text-decoration-none"
        >
          <a
            class="nav-link py-0 px-1"
          >{{ $t("GENERAL.LOGOUT") }}</a>
        </router-link>
      </li>
    </div>
    <UserSetting />
  </div>
</template>

<script>
import UserSetting from '../components/Modals/UserSetting.vue';

export default {
  name: "AdminNav",
  components: {
    UserSetting



  },
  data: () => ({
    
      
     
      
      
      

  }),
  methods: {
    usersetting(){ this.$bvModal.show('UserSetting'); },

  }
};
</script>

