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
        <div cass="text-h3">Applica</div>
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
          <q-item-label header> Opções </q-item-label>
          <q-item to="/Alimentos" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fa-solid fa-children" />
            </q-item-section>

            <q-item-section> Cadastro menor atendido </q-item-section>
          </q-item>

          <q-item to="/pets" exact active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fa-solid fa-clipboard" />
            </q-item-section>

            <q-item-section> Cadastro de ocorrência </q-item-section>
          </q-item>

          <q-item to="/ProdutosLimpeza" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fa-solid fa-house-user" />
            </q-item-section>

            <q-item-section> Cadastro casa de acolhimento </q-item-section>
          </q-item>

          <q-item to="/SelfCare" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fa-solid fa-pump-soap" />
            </q-item-section>

            <q-item-section> Self Care </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="../statics/applicafundopreto.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../statics/logoapplica.jpg" />
          </q-avatar>
          <div class="text-weight-bold">Nome Usuário</div>
          <div>Permissão usuário (Cons, Cidadao)</div>
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
