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
        CyberMetaQ
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
            <!--  -->
            <router-link
              :to="{ path: '/admin' }"
              class="text-decoration-none d-flex align-items-center"
              v-if="this.$store.getters.isAdmin"
            >
              <img
                src="@/assets/images/icon/administrator@2x.png"
                class="icon24px"
              >
              
              <a
                class="dropdown-item p-0"
              >{{ $t("GENERAL.ADMINISTRATION") }}</a>
            </router-link>
          </ul>
        </li>
      </ul>
      <li
        class="border-start px-1 nav-item d-flex align-items-center text-decoration-none"
      >
        <!-- <li class="border-start px-1 nav-item d-flex align-items-center"> -->
        <img
          src="@/assets/images/cmd/logout@2x.png"
          class="icon24px"
        >
        <a
          @click="logout"
          class="nav-link py-0 px-1 "
          aria-current="page"
          href="#"
        >{{ $t("GENERAL.LOGOUT") }}</a>
      <!-- </li> -->
      </li>
    </div>
    <UserSetting />
  </div>
</template>

<script>
import UserSetting from '../components/Modals/UserSetting.vue';
import Mgr from '../services/authService'

export default {
name: "Navbar",
  components: {
    UserSetting,


  },
  data: () => ({
    
    mgr: new Mgr(),

  }),
  methods: {
    usersetting(){ this.$bvModal.show('UserSetting'); },
 

    logout(){

    // this.$store.dispatch('setToken', "");
      sessionStorage.removeItem('orgToken')
      sessionStorage.removeItem('docToken')
      sessionStorage.removeItem('eventToken')
      sessionStorage.removeItem('linkToken')
      this.mgr.signOut()

       this.$router.push('/login').catch(err => {err})

       this.$store.dispatch('setAuth', false);
       this.$store.dispatch('setAdmin', false);


      // this.$router.push('/login', () => {}, (e) => {
      //     console.log('输出报错',e) 
      // })
    }
  }


}
</script>

