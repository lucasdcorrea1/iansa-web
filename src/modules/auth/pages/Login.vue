<template>
    <section class="section section-shaped section-lg my-0">
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
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                             <div class="text-center mb-4">
                          </div>

                            <form @submit.prevent="submit()" role="form">
                                <base-input alternative
                                            class="mb-3"
                                            v-model="form.email"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="form.password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Entrar</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <router-link to="/forgotpassword" class="text-light">
                                <small>Forgot password?</small>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data: () => ({
    form: {
      email: 'dlowy12@google.co.uk',
      password: 'xtPqmEFaip2'
    }
  }),
  methods: {
      submit(){
          console.log(this.form);
      }
  },
};
</script>
<style lang="scss">
    img.logo{
        width: 50%;
    }
</style>