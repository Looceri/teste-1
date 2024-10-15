<template>
  <div class="page">
    <div class="container">
      <div class="left">
        <div class="login">Login</div>
        <div class="eula">Ao fazer login, você concorda com os termos ridiculamente longos que você não se deu ao trabalho de ler
          </div>
      </div>
      <div class="right">
        <svg viewBox="0 0 320 300">
          <defs>
            <linearGradient
              inkscape:collect="always"
              id="linearGradient"
              x1="13"
              y1="193.49992"
              x2="307"
              y2="193.49992"
              gradientUnits="userSpaceOnUse"
            >
              <stop style="stop-color:#ff00ff;" offset="0" id="stop876" />
              <stop style="stop-color:#ff0000;" offset="1" id="stop878" />
            </linearGradient>
          </defs>
          <path :d="svgPath" />
        </svg>
        <div class="form">
          <label for="email">Email</label>
          <input type="email" v-model="email" @focus="animatePath('email')" id="email">
          <label for="password">Password</label>
          <input type="password" v-model="password" @focus="animatePath('password')" id="password">
          <input type="submit" id="submit" value="Submit" @click="handleSubmit">
        </div>
      </div>
    </div>
  </div>
  <SelectionStyle :selectionColor="'#2D2F36'" />
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import anime from 'animejs/lib/anime.es.js';

const email = ref('');
const password = ref('');
const svgPath = ref('m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143');

const authStore = useAuthStore();

const handleSubmit = () => {
  authStore.login(email.value, password.value);
};

let currentAnimation;

const animatePath = (target) => {
  if (currentAnimation) currentAnimation.pause();
  currentAnimation = anime({
    targets: 'path',
    strokeDashoffset: { value: getOffsetValue(target), duration: 700, easing: 'easeOutQuart' },
    strokeDasharray: { value: getDashArrayValue(target), duration: 700, easing: 'easeOutQuart' },
  });
};

const getOffsetValue = (target) => {
  return target === 'email' ? 0 : target === 'password' ? -336 : -730;
};

const getDashArrayValue = (target) => {
  return target === 'email' ? '240 1386' : target === 'password' ? '240 1386' : '530 1386';
};

</script>

<style scoped>
@import url('https://rsms.me/inter/inter-ui.css');
::selection {
  background: #2D2F36;
}
::-webkit-selection {
  background: #2D2F36;
}
::-moz-selection {
  background: #2D2F36;
}
body {
  background: white;
  font-family: 'Inter UI', sans-serif;
  margin: 0;
  padding: 20px;
}
.page {
  background: #ff001c;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  place-content: center;
  width: calc(100% - 40px);
}
@media (max-width: 767px) {
  .page {
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}
.container {
  display: flex;
  height: 320px;
  margin: 0 auto;
  width: 640px;
}
@media (max-width: 767px) {
  .container {
    flex-direction: column;
    height: 630px;
    width: 320px;
  }
}
.left {
  background: white;
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .left {
    height: 100%;
    left: 20px;
    width: calc(100% - 40px);
    max-height: 270px;
  }
}
.login {
  color:#ff001c;
  font-size: 50px;
  font-weight: 900;
  margin: 50px 40px 40px;
}
.eula {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
  margin: 40px;
}
.right {
  background: #474A59;
  box-shadow: 0px 0px 40px 16px rgba(0,0,0,0.22);
  color: #F1F1F2;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .right {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    max-height: 350px;
  }
}
svg {
  position: absolute;
  width: 320px;
}
path {
  fill: none;
  stroke: url(#linearGradient);;
  stroke-width: 4;
  stroke-dasharray: 240 1386;
}
.form {
  margin: 40px;
  position: absolute;
}
label {
  color:  #c2c2c5;
  display: block;
  font-size: 14px;
  height: 16px;
  margin-top: 20px;
  margin-bottom: 5px;
}
input {
  background: transparent;
  border: 0;
  color: #f2f2f2;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
}
input::-moz-focus-inner {
  border: 0;
}
#submit {
  color: #707075;
  margin-top: 40px;
  transition: color 300ms;
}
#submit:focus {
  color: #f2f2f2;
}
#submit:active {
  color: #d0d0d2;
}
</style>
