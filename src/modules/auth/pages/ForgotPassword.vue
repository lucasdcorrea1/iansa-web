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
                             <div class="text-center">
                            <img :src="logo" alt="..." class="logo" />
                          </div>
                            <div class="text-center text-muted mb-4">
                                <small>Enviaremos um email com as instruçoes para recuperação da senha</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Enviar</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <router-link to="/login" class="text-light">
                                <small>Sign in?</small>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import logo from '../../public/img/brand/iansa_logotipo.png'
export default {
   data() {
    return({
      logo: logo
    });
  },
};
</script>
<style lang="scss">
    img.logo{
        width: 50%;
    }
</style>