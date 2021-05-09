<template>


  <nav
    class="navbar has-shadow is-fixed-top"
    style="max-width: 1344px;
    flex-grow: 1;
    margin: 0 auto;
    width: auto;"
    role="navigation"
    aria-label="main navigation"
  >

  <div class="header-mobile" style="display:none;background-color: #101012;">

            <ul class="nav navbar-nav navbar-right mobile-bar">
                <li>
                    <a href="/" style="color:white;">
                        <span class="menu-icon lnr lnr-home"></span>
                        Home
                    </a>
                </li>

                <li>
                    <a href="/categories/portfolio" style="color:white;">
                        <span class="menu-icon lnr lnr-briefcase"></span>
                        Projects
                    </a>
                </li>

                 <li class="visible-xs" style="color:white;">
                    <a href="/categories/blog" style="color:white;">
                        <!--<span class="menu-icon lnr lnr-license"></span>-->
                        <span class="menu-icon lnr lnr-bubble"></span>
                        Blog
                    </a>
                </li>


                <li>
                    <a href="/contact" style="color:white;">
                        <span class="menu-icon lnr lnr-envelope"></span>
                        <span class="visible-xs">Contact</span>
                    </a>
                </li>


             </ul>
  </div>



                    <!-- original nav -->
    <div class="navbar-brand">
      
        <site-logo v-if="$siteConfig.logo === 'logo-component'" />
        <img
          v-else
          :src="$siteConfig.logo"
          :alt="$siteConfig.siteName"
          class="logo"
        />
      
      <hamburger-button @click="active = !active" />
    </div>

    <div
      :class="{
        'navbar-menu': true,
        'is-active': active
      }"
    >
      <ul class="navbar-end">
        <li
          v-for="item in $siteConfig.mainMenu"
          :key="item.link"
          class="navbar-item"
          @click="active = false"
        >
          <component
            :is="item.link.startsWith('http') ? 'a' : 'nuxt-link'"
            :href="item.link"
            :to="item.link"
            :target="item.target ? item.target : '_self'"
          >
            {{ item.name }}
          </component>
        </li>
        <li class="navbar-item site-search-wrapper">
          <site-search />
        </li>
      </ul>
    </div>
     <!-- original nav -->
  </nav>
</template>
<script>
import SiteSearch from '~/components/SiteSearch'
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav',
  components: { SiteSearch, HamburgerButton },
  data() {
    return {
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-item img {
  max-height: 2rem;
}
.site-search-wrapper {
  transform: translateX(5px);
  @media (max-width: 1023px) {
    display: none;
  }
}
.navbar-burger {
  height: auto;
}

.navbar-menu a {
  display: block;
  color: white;
}
.navbar.has-shadow {
    box-shadow: none !important;
}
.navbar {
    background-color: #17181b;
}
.navbar-item {
    color: white;
    font-size: 18px;
}
@media screen and (max-width: 1023px){
.navbar-menu {
    background-color: transparent;
}
}
.card {
    background-color: #101012 !important;
}

</style>
<style>
.card {
    background-color: #101012 !important;
}

@media screen and (max-width: 900px){
header .header-mobile {
    display: block;
    height: 64px;
    -webkit-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
}
header .header-mobile {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: #17181B;
    z-index: 10;
    display: none;
    -webkit-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
@media screen and (max-width: 900px){
header .navbar-nav.navbar-right {
    float: none;
}
}
.navbar-nav.mobile-bar {
    list-style: none;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-align-items: stretch;
    align-items: stretch;
    margin: 0px 0px;
}
.navbar-nav.mobile-bar > li {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    text-align: center;
}
@media screen and (max-width: 900px){
.navbar-nav.mobile-bar > li {
    font-size: 12px;
}
}
@media screen and (max-width: 900px){
.navbar-nav>li>a {
    padding-top: 14px;
}
}
@media screen and (max-width: 900px)
.navbar-nav>li>a {
    padding-top: 14px;
}
.navbar-nav>li>a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;
}

.nav>li>a {
    position: relative;
    display: block;
    padding: 10px 15px;
}
.nav>li>a:hover, .nav>li>a:focus {
    text-decoration: none;
    background-color: #101012;
    color: white !important;
}
.navbar-nav.mobile-bar > li > a > span.menu-icon {
    display: block;
    font-size: 1.8em;
}
@media (max-width: 576px) { 
  .navbar-brand{
   display:none !important;
 }
}
@media (max-width: 576px) { 
  #home-page .content{
   display:none !important;
 }
 .page-main-section {
    margin-top: 33px !important;
}
 .page-main-section {
    margin-top2: 26px;
}
.mobileonly{
  display: block !important;
}
.header-mobile{
  display: block !important;
}
}
  .content{
   display2:none !important;
 }
</style>
