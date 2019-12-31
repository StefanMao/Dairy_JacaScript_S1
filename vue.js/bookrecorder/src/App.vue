<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg"
                type="dark"
                variant="info">
        <b-navbar-brand href="#">Blog</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse"
                    is-nav>
          <b-navbar-nav>
            <b-nav-item to="/Home">首頁</b-nav-item>
            <b-nav-item to="/TravelRecommend/travel.vue">旅遊推薦</b-nav-item>
            <b-nav-item to="/BookListSearch/booklistsearch.vue">閱讀書籍清單</b-nav-item>
            <b-nav-item to="/Bookmanagement/bookmanage.vue">書籍紀錄管理</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm"
                            class="mr-sm-2"
                            placeholder="Search"></b-form-input>
              <b-button size="sm"
                        class="my-2 my-sm-0"
                        type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang"
                                 right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
export default {
};
</script>

<style></style>
