<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <h2 class="headingOuter">Control The Brightness</h2>
        <div class="center">
          <label class="switch">
            <input
              type="checkbox"
              id="toggle--OnOff"
              :class="{ active: isActive }"
              @click="toggle"
            />

            <span class="slider"></span>
          </label>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <!--<div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <h2 class="headingOuter">Control The Brightness</h2>
        <div class="toggle toggle--OnOff">
          <input
            type="checkbox"
            id="toggle--OnOff"
            class="toggle--checkbox"
            :class="{ active: isActive }"
            @click="toggle"
          />
          <label class="toggle--btn" for="toggle--OnOff">
            <span class="toggle--feature"> </span>
          </label>
        </div>

        <button
          class="ui button toggle"
          :class="{ active: isActive }"
          @click="toggle"
        >
          {{ isActive ? "ON" : "OFF" }}
        </button>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <h2 class="headingOuter">Shadow Effect Toggle</h2>
        <div class="toggle toggle--text">
          <input type="checkbox" id="toggle--text" class="toggle--checkbox" />
          <label
            class="toggle--btn"
            for="toggle--text"
            data-label-on="one"
            data-label-off="zero"
          ></label>
        </div>
      </div>-->
    </div>
    <br />
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
    >
      <h2 class="headingOuter">Current Lighting Status</h2>
      <div class="toggle toggle--neon">
        <input type="checkbox" id="toggle--neon" class="toggle--checkbox" />
        <label class="toggle--btn" for="toggle--neon">
          <y v-if="isActive">OFF</y>
          <y v-else>ON</y></label
        >
      </div>
    </div>

    <!--<div id="example">
      <h1 v-if="isActive">OFF</h1>
      <h1 v-else>ON</h1>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isActive: false,
      status: false,
      switch1: true,
      userName: "amirhossein",
      id: 1,
    };
  },
  methods: {
    getLedData() {
      console.log();
      axios.get("http://127.0.0.1:8000/led/" + this.id, {}).then((response) => {
        this.isActive = !response.data.Switch;
      });
    },
    updateData() {
      console.log("update");
      this.status = !this.status;
      this.switch1 = !this.switch1;
      axios
        .put("http://127.0.0.1:8000/led/" + this.id, {
          Switch: this.switch1,
          Status: this.status,
          User: this.userName,
        })
        .then((response) => {
          console.log(response.data);
        });
    },
    toggle() {
      this.getLedData();
      this.updateData();
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },

  mounted() {
    this.getLedData();
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Francois+One);
@import url(https://fonts.googleapis.com/css?family=PT+Sans);
@font-face {
  font-family: "Audiowide";
  font-style: normal;
  font-weight: 400;
  src: local("Audiowide"), local("Audiowide-Regular"),
    url(http://themes.googleusercontent.com/static/fonts/audiowide/v2/8XtYtNKEyyZh481XVWfVOj8E0i7KZn-EPnyo3HZu7kw.woff)
      format("woff");
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3 {
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
}

h1 {
  font-size: 2.4em;
  background-color: #292929;
  text-align: center;
  padding: 20px;
  margin: 0;
  color: #fff;
}
h1 a {
  display: block;
  margin-top: 10px;
  text-transform: none;
  color: #aaa;
  font-size: 16px;
  text-decoration: none;
}

.headingOuter {
  background: #f1f1f1;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 0;
  padding: 10px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  font-size: 1.6em;
}
.headingOuter:first-child {
  margin-top: 0;
}
h1 + .headingOuter {
  margin-top: 0;
}

/* =====================================================
   Some defaults across all toggle demos
   ===================================================== */
.toggle {
  display: block;
  text-align: center;
  margin-top: 40px;
  user-select: none;
}

.toggle--checkbox {
  display: none;
}

.toggle--btn {
  display: block;
  margin: 0 auto;
  font-size: 1.4em;
  transition: all 350ms ease-in;
}
.toggle--btn:hover {
  cursor: pointer;
}

.toggle--btn,
.toggle--btn:before,
.toggle--btn:after,
.toggle--checkbox,
.toggle--checkbox:before,
.toggle--checkbox:after,
.toggle--feature,
.toggle--feature:before,
.toggle--feature:after {
  transition: all 250ms ease-in;
}
.toggle--btn:before,
.toggle--btn:after,
.toggle--checkbox:before,
.toggle--checkbox:after,
.toggle--feature:before,
.toggle--feature:after {
  content: "";
  display: block;
}

/* OnOff and Gender toggle buttons */

.toggle--OnOff .toggle--btn,
.toggle--like .toggle--btn {
  position: relative;
  height: 70px;
  width: 125px;
  border-radius: 70px;
}
.toggle--OnOff .toggle--btn:before,
.toggle--like .toggle--btn:before {
  position: absolute;
  top: 2px;
  left: 4px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
}

.toggle--OnOff .toggle--btn {
  border: 5px solid #1c1c1c;
  background-color: #3c4145;
}
.toggle--OnOff .toggle--btn:before {
  background-color: #fff;
  border: 5px solid #e3e3c7;
}
.toggle--OnOff .toggle--btn:after {
  position: absolute;
  top: 62%;
  left: 39px;
  z-index: 10;
  width: 11.2px;
  height: 11.2px;
  opacity: 0;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: #fff 0 0, #fff 3px 0, #fff 6px 0, #fff 9px 0, #fff 11px 0,
    #fff 14px 0, #fff 16px 0, #fff 21px -1px 0 1px, #fff 16px -7px 0 -2px,
    #fff 7px -7px 0 1px, #d3d3d3 0 0 0 4px, #d3d3d3 6px 0 0 4px,
    #d3d3d3 11px 0 0 4px, #d3d3d3 16px 0 0 4px, #d3d3d3 21px -1px 0 5px,
    #d3d3d3 16px -7px 0 1px, #d3d3d3 7px -7px 0 5px;
  transition: opacity 100ms ease-in;
}
@keyframes starry_star {
  50% {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: #fff 30px -3px 0 0, #fff 12px 10px 0 -1px,
      rgba(255, 255, 255, 0.1) 38px 18px 0 1px, #fff 32px 34px 0 0,
      rgba(255, 255, 255, 0.1) 20px 24px 0 -1.5px, #fff 5px 38px 0 1px;
  }
}
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 100;
    transform: scale(1.1);
  }
  55% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    opacity: 100;
    transform: scale(1);
  }
}
.toggle--OnOff .toggle--feature {
  display: block;
  position: absolute;
  top: 9px;
  left: 52.5%;
  z-index: 20;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 0,
    rgba(255, 255, 255, 0.1) 12px 10px 0 -1px, #fff 38px 18px 0 1px,
    rgba(255, 255, 255, 0.1) 32px 34px 0 0, #fff 20px 24px 0 -1.5px,
    rgba(255, 255, 255, 0.1) 5px 38px 0 1px;
  animation: starry_star 5s ease-in-out infinite;
}
.toggle--OnOff .toggle--feature:before {
  position: absolute;
  top: -2px;
  left: -25px;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 50%;
  border: 5px solid #e3e3c7;
  box-shadow: #e3e3c7 -28px 0 0 -3px, #e3e3c7 -8px 24px 0 -2px;
  transform-origin: -6px 130%;
}
.toggle--OnOff .toggle--checkbox:checked + .toggle--btn {
  background-color: #9ee3fb;
  border: 5px solid #86c3d7;
}
.toggle--OnOff .toggle--checkbox:checked + .toggle--btn:before {
  left: 55px;
  background-color: #ffdf6d;
  border: 5px solid #e1c348;
}
.toggle--OnOff .toggle--checkbox:checked + .toggle--btn:after {
  opacity: 100;
  animation-name: bounceIn;
  animation-duration: 0.6s;
  animation-delay: 0.1s;
  animation-fill-mode: backwards;
  animation-timing-function: ease-in-out;
}
.toggle--OnOff .toggle--checkbox:checked + .toggle--btn > .toggle--feature {
  opacity: 0;
  box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 -4px,
    rgba(255, 255, 255, 0.1) 12px 10px 0 -5px, #fff 38px 18px 0 -3px,
    rgba(255, 255, 255, 0.1) 32px 34px 0 -4px, #fff 20px 24px 0 -5.5px,
    rgba(255, 255, 255, 0.1) 5px 38px 0 -3px;
  animation: none;
}
.toggle--OnOff
  .toggle--checkbox:checked
  + .toggle--btn
  > .toggle--feature:before {
  left: 25px;
  transform: rotate(70deg);
}

/* Neon toggle */

@keyframes neon {
  0% {
    text-shadow: 0 0 10px rgb(31, 25, 25), 0 0 15px rgb(31, 25, 25),
      0 0 25px rgb(31, 25, 25), 0 0 40px #36ec5a, 0 0 70px #36ec5a,
      0 0 90px #36ec5a, 0 0 90px #36ec5a;
  }
  100% {
    text-shadow: 0 0 5px rgb(31, 25, 25), 0 0 10px rgb(31, 25, 25),
      0 0 15px rgb(31, 25, 25), 0 0 20px #06fa01, 0 0 35px #06fa01,
      0 0 40px #06fa01, 0 0 50px #06fa01;
  }
}
.toggle--neon {
  margin-top: 0;
  padding: 50px 0;
}
.toggle--neon .toggle--btn {
  font-family: Audiowide;
  text-transform: uppercase;
  font-size: 6.2em;
  color: #333;
  text-shadow: 0 0 10px transparent, 0 0 15px transparent, 0 0 25px transparent,
    0 0 40px transparent, 0 0 70px transparent, 0 0 90px transparent,
    0 0 90px transparent;
}
.toggle--neon .toggle--btn:before,
.toggle--neon .toggle--btn:after {
  display: inline-block;
  margin: 0 20px;
  transition: all 220ms ease-in-out;
}
.toggle--neon .toggle--btn:before {
  content: attr(data-label-off);
  animation: neon 1.5s ease-in-out infinite alternate;
  animation-delay: 90ms;
  color: #f1f1f1;
}
.toggle--neon .toggle--btn:after {
  content: attr(data-label-on);
}
.toggle--neon .toggle--checkbox:checked + .toggle--btn:before {
  animation: none;
  color: #333;
}
.toggle--neon .toggle--checkbox:checked + .toggle--btn:after {
  animation: neon 1.5s ease-in-out infinite alternate;
  animation-delay: 90ms;
  color: #f1f1f1;
}

/**/

.switch input {
  display: none;
}

.switch {
  display: inline-block;
  width: 100px;
  height: 50px;
  transform: translateY(50%);
  position: relative;
}

.slider {
  text-align: "center";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 90px;
  box-shadow: 0 0 0 2px #777, 0 0 10px #777;
  cursor: pointer;
  border: 4px solid transparent;
  overflow: hidden;
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #777;
  border-radius: 30px;
  transform: translateX(-45px);
  transition: 0.2s;
}

input:checked + .slider:before {
  transform: translateX(45px);
  background-color: limeGreen;
}

input:checked + .slider {
  box-shadow: 0 0 0 2px limeGreen, 0 0 8px limeGreen;
}

.switch200 .slider:before {
  width: 200%;
  transform: translateX(-82px);
}

.switch200 input:checked + .slider:before {
  background-color: red;
}

.switch200 input:checked + .slider {
  box-shadow: 0 0 0 2px red, 0 0 8px red;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
