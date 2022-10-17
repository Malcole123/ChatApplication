<template>
  <nav class="navbar">
    <div class="desktop-only">
      <ProfileImage :height="95" :width="95" :desc="fname"/>
    </div>
      <ul class="nav-list">
        <li :class="activeLink('/')">
          <NuxtLink to="/">
            <div class="nav-icon">
              <HomeIcon :height="32" :width="32" :theme="'light'"/>
            </div>
          </NuxtLink>
        </li>
        <!---Link Here-->
        <li :class="activeLink('/messages')">
          <NuxtLink to="/messages">
            <div class="nav-icon">
              <MessageIcon :height="32" :width="32" :theme="'light'"/>
            </div>
          </NuxtLink>
        </li>
         <!---Link Here-->
         <li :class="activeLink('/notifications')">
          <NuxtLink to="/notifications">
            <div class="nav-icon">
              <NotificationIcon :height="32" :width="32" :theme="'light'"/>
            </div>
          </NuxtLink>
        </li>
          <!---Link Here-->
          <li :class="activeLink('/settings')">
          <NuxtLink to="/settings">
            <div class="nav-icon">
              <SettingsIcon :height="32" :width="32" :theme="'light'"/>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <div class="nav-link desktop-only" @click="()=>{this.$auth.logout()}">
        <ReturnIcon :height="32" :width="32" :theme="'light'"/>
      </div>
  </nav>
</template>

<script>
import ProfileImage from './utils/profileImage.vue';
import HomeIcon from './Icons/HomeIcon.vue';
import MessageIcon from './Icons/MessageIcon.vue';
import NotificationIcon from './Icons/NotificationIcon.vue';
import SettingsIcon from './Icons/SettingsIcon.vue';
import ReturnIcon from './Icons/ReturnIcon.vue';
export default {
    props:['fname'],
    components:{ ProfileImage, HomeIcon, MessageIcon, NotificationIcon, SettingsIcon, ReturnIcon },
    methods:{
      activeLink(path_){
          if(this.$route.path === path_){
            return 'active-nav-link nav-link'
          }else{
            return 'nav-link'
          }
      }
    }
}
</script>

<style scoped>
  .navbar{
    width:12vw;
    border-radius:var(--prim-curve);
    position:fixed;
    top:34px;
    bottom:34px;
    left:32px;
    background:var(--app-prim);
    z-index:99;
    padding:22px 0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:50px;

  }

  .nav-list{
    width:100%;
    list-style-type:none;
    display:flex;
    flex-direction:column;
    align-items:center;
    flex:1;
    gap:34px;
  }

  .nav-link{
    height:80px;
    padding:22px 0px;
    width:100%;
    display:flex;
    justify-content:center;
    position:relative;
    cursor:pointer;
  }

  .active-nav-link::before{
    content:"";
    display:block;
    height:100%;
    width:90%;
    position:absolute;
    right:0;
    top:0;
    bottom:0;
    background:#004BE1;
    border-radius:20px 0px 0px 20px;;
  }

  .active-nav-link::after{
    content:"";
    display:block;
    height:100%;
    width:6px;
    position:absolute;
    right:0;
    top:0;
    bottom:0;
    background:#FFE81A;
    border-radius:25px 0px 0px 25px;
    transition:0.1s ease-in-out;
    box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.25);
  }

  .nav-icon{
    z-index:2;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color:white;
  }

  .desktop-only{
    display:flex;
  }

  @media(max-width:768px) {
    .navbar{
      width:100%;
      top:auto;
      left:0;
      right:0;
      bottom:0px;
      height:fit-content;
      border-radius:0px;
      padding:0px;
      justify-content:center;
    }
    .desktop-only{
      display:none;
    }

    .nav-list{
      width:100%;
      flex-direction:row;
      align-items:center;
      flex:1;
      gap:24px;
    }

    .nav-link{
      height:100%;
      padding:26px 0px;
    }

    .active-nav-link::before{
      height:100%;
      width:100%;
      border-radius:0px;
    }

  .active-nav-link::after{
    height:6px;
    width:100%;
    position:absolute;
    top:0px;
    bottom:auto;
    border-radius:0px;
  }

  }
</style>
