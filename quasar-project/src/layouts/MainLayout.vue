<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>
      <div cass="q-px-lg q-pt-xl q-mb-md">
        <div cass="text-h3">Gab App</div>
        <div cass="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img src="/statics/montanhas.jpg" class="header-image absolute-top" />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :widht="200"
      :breakpoint="400"
      bordered
      content-class="bg-frey-2"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item-label header> Lista de Compras </q-item-label>
          <q-item to="/Alimentos" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fa-solid fa-jar" />
            </q-item-section>

            <q-item-section> Alimentos </q-item-section>
          </q-item>

          <q-item to="/pets" exact active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fa-solid fa-bone" />
            </q-item-section>

            <q-item-section> PETS </q-item-section>
          </q-item>

          <q-item to="/ProdutosLimpeza" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fa-solid fa-broom" />
            </q-item-section>

            <q-item-section> Produtos de Limpeza </q-item-section>
          </q-item>

          <q-item to="/SelfCare" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fa-solid fa-pump-soap" />
            </q-item-section>

            <q-item-section> Self Care </q-item-section>
          </q-item>

          />
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img
              src="https://scontent.ffln5-1.fna.fbcdn.net/v/t1.6435-9/44926418_1885858548162516_5143205783428661248_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHGqvqCceuWPBD7T7Vmuo_gLwYaydGRZ68vBhrJ0ZFnrxhrWZOZu2TMQbFq-39xB7nPcokeffejK1ne6bj4jDyV&_nc_ohc=7JcrhLXu9FcAX-TUCpK&tn=zd5-MbPAsmd3wJwR&_nc_ht=scontent.ffln5-1.fna&oh=00_AT_fUbQcAqLHAg5mtrHj9ded_tLeZjzrTwv6FydW_HPThQ&oe=631870C5"
            />
          </q-avatar>
          <div class="text-weight-bold">Gabriel Garbrecht</div>
          <div>@gabriel.garbrecht</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";

const linksList = [
  {
    title: "Lista Alimentos",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd-DD-MMMM");
    },
  },
};
</script>
<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>
