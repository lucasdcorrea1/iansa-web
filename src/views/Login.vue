<template>
  <section class="section section-shaped section-lg my-0" style="z-index:10">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <img
                  src="../../public/img/brand/logo.png"
                  class="logo"
                  alt="..."
                />
              </div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>Informe suas credenciais</small>
              </div>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="E-mail"
                  addon-left-icon="ni ni-email-83"
                  v-model="email"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Senha"
                  addon-left-icon="ni ni-lock-circle-open"
                  v-model="password"
                >
                </base-input>

                <div class="text-center">
                  <base-button
                    type="primary"
                    class="my-4"
                    @click="submit()"
                  >Entrar</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <router-link
                to="/forgotpassword"
                class="text-light"
              >
                <small>Esqueceu a Senha?</small>
              </router-link>
            </div>
            <div class="col-6 text-right">
              <router-link
                to="/"
                class="text-light"
              >
                <small>Página Inicial</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

export default {
  data: () => {
    return {
        name: '',
        email: '',
        password: ''
   };
  },
  beforeDestroy () {
    this.password = "";
    this.email = "";
  },
  created () {
    // reset login status
    Vue.use(VueToast, {position: 'top-right'});
    this.logout();
    window.addEventListener("keypress", e => {
      if (e.key == "Enter") {
        this.submit();
      }
    });
  },
  methods: {

    async validParameters() {
        if(!this.email.length){
          Vue.$toast.open({
            message: 'Campo email esta vázio!',
            type: 'error',
          });
          return false;
        }
        if(!this.password.length){
          Vue.$toast.open({
            message: 'Campo password esta vázio!',
            type: 'error',
          });
          return false;
        }
      return true;
    },
    async submit () {
      if (await this.validParameters()) {
        const data = {
          email: this.email,
          password: this.password
        }
        await axios.post(`https://iansa-api.herokuapp.com/auth/authenticate`, data, {
        }).then(response => {
          if (response) {
            localStorage.setItem("user", JSON.stringify(response.data));
              Vue.$toast.open({
                message: `Bem-vindo ${response.data.name} !`,
                type: 'success',
              });
            this.$router.push({ path: "/" });
          }
        }).catch(error => {
              Vue.$toast.open({
                message: error.response.data.error,
                type: 'error',
              });
        })
      }
    },
    logout () {
      localStorage.removeItem("user");
    }
  }
};
</script>
<style lang="scss">
div.logo {
  width: 50% !important;
}
div.container {
  top: -100px;
}
// .login-background {
//   background-size: cover;
//   background-color: #673ab7;
//   min-height: 100vh;
// }
</style>