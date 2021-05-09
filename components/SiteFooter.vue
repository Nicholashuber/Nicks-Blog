<template>
  <footer class="site-footer">
    {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - All
    Rights Reserved
    <br />
    Made with <span style="color: #e25555;">&#9829;</span> 
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
footer {
  background: #101012;
  padding: 20px 10px;
  text-align: center;
  transition: 0.5s ease all;
  color:white !important;
}
</style>
