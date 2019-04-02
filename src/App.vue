<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/works">Works</router-link>  |
      <router-link to="/works/works_detail">Works_detail</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/news/news_detail">News_detail</router-link> |
      <router-link to="/careers">Careers</router-link> |
      <router-link to="/careers/careers_detail">Careers_detail</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/services">Service</router-link> |
      <router-link to="/services/services_detail">Service_detail</router-link>
    </div>
    
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
