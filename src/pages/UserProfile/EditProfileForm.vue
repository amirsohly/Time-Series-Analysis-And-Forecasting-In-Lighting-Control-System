<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>



<div class="input-group" ALIGN="center">
  		<label><p><b>username</b></p></label>
  		<input type="text" name="username" >
  	</div>
  	<div class="input-group" ALIGN="center">
  		<label><p ali><b>password</b></p></label>
  		<input type="password" name="password">
  	</div>
    <br>
  	<div class="input-group" ALIGN="center">
  		<button type="submit" class="button button" name="login_user">login</button>
  	</div>


          <div class="md-layout-item md-small-size-100 md-size-33 center">
            <md-field>
              <label>Username</label>
              <md-input v-model="username" type="username"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-33 center">
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-center">
            <md-button class="md-raised md-success">Login</md-button>
          </div>



      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Company (disabled)</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>User Name</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email Address</label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Update Profile</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
    };
  },
};
</script>
<style></style>



<!--<template>
    <?php include('server.php') ?>
<html>
<head>
<title>login</title>
</head>
<body>
  <div class="header" style="background-color:#04AA6D;">
  	<h2 style="font-family:nazanin;">فرم ورود بی‌ام‌دبلیو فارسی</h2>
  </div>
	 
  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  		<label style="font-family:nazanin;"><p ALIGN="right"><b>نام کاربری</b></p></label>
  		<input type="text" name="username" >
  	</div>
  	<div class="input-group">
  		<label style="font-family:nazanin;"><p ALIGN="right"><b>رمزعبور</b></p></label>
  		<input type="password" name="password">
  	</div>
  	<div class="input-group">
  		<button type="submit" class="button button" name="login_user">ورود</button>
  	</div>
  	<p style="font-family:NAZANIN;color:green;"><b>
  		حساب کاربری ندارید ؟   <a href="register.php">ثبت‌نام کنید</a></b>
  	</p>
	<br>
	<p ALIGN="center" style="font-family:nazanin;font-size:25px;">
  		<a href="home.php"><b>به صفحه اصلی بروید</b></a>
  	</p>
	
  </form>
</body>
</html>
</template>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>



<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
body {
  font-size: 120%;
  background: #F8F8FF;
}

.header {
  width: 30%;
  margin: 50px auto 0px;
  color: white;
  background: #5F9EA0;
  text-align: center;
  border: 1px solid #B0C4DE;
  border-bottom: none;
  border-radius: 10px 10px 0px 0px;
  padding: 20px;
}
form, .content {
  width: 30%;
  margin: 0px auto;
  padding: 20px;
  border: 1px solid #B0C4DE;
  background: white;
  border-radius: 0px 0px 10px 10px;
}
.input-group {
  margin: 10px 0px 10px 0px;
}
.input-group label {
  display: block;
  text-align: left;
  margin: 3px;
}
.input-group input {
  height: 30px;
  width: 93%;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
}
.btn {
  padding: 10px;
  font-size: 15px;
  color: white;
  background: #5F9EA0;
  border: none;
  border-radius: 5px;
}
.error {
  width: 92%; 
  margin: 0px auto; 
  padding: 10px; 
  border: 1px solid #a94442; 
  color: #a94442; 
  background: #f2dede; 
  border-radius: 5px; 
  text-align: left;
}
.success {
  color: #3c763d; 
  background: #dff0d8; 
  border: 1px solid #3c763d;
  margin-bottom: 20px;
}
* {
  box-sizing: border-box;
}

#mobileshow    { display:none; }
@media screen and (max-width: 880px) {
#mobileshow   { text-align: center; display:block; }
}

#hide    { display:none; }
#hide   { text-align: center; display:block; }

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px black;
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background:  linear-gradient(0deg,rgba(1,113,185) 0%, rgba(231,44,25) 100%);
  border-radius: 10px;
}

paragraph{
  text-align: right;
  font-family: NAZANIN;
  font-size: 25px;
  color: black;
}

.icon-bar {
  width: 100%;
  background-color: #555;
  overflow: auto;
}
body {
  margin: 0;
}
.icon-bar a {
  float: left;
  width: 20%;
  text-align: center;
  padding: 12px 0;
  transition: all 0.3s ease;
  color: white;
  font-size: 36px;
}

.icon-bar a:hover {
  background-color: #000;
}

.active {
  background-color: #4caf50;
}

.body {
  text-align: center;
  font-family: NAZANIN;
  font-size: 25px;
}

header {
  background-image: linear-gradient(to right, #319bca, #353281, #bf2a2e);
  padding: 30px;
  text-align: center;
  font-family: NAZANIN;
  font-size: 25px;
  color: white;
}

li{
  text-align: center;
  font-family: NAZANIN;
  font-size: 25px;
}

.button {
  background-color: #016db3;
  border: none;
  font-family: NAZANIN;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 25px;
  margin: 4px 2px;
  border-radius: 50px;
  cursor: pointer;
  width: 95%;

}
.button2 {
  background-color: #e02b18;
}
.button3 {
  background-color: #e02b18;  background-image: linear-gradient(to right, #319bca, #353281, #bf2a2e);
  top: 50%;
  left: 50%;
  transform: translate(-2%, -10%);
}

.button4 {
  background-color: #e02b18;
  border: none;
  font-family: NAZANIN;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 10px;
  margin: 4px 2px;
  border-radius: 50px;
  cursor: pointer;
  width: 95%;

}

section {
  display: -webkit-flex;
  display: flex;
}

nav {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: #ccc;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  padding: 10px;
}

article {
  -webkit-flex: 3;
  -ms-flex: 3;
  text-align: justify;
  flex: 3;
  background-color: #f1f1f1;
  padding: 10px;
}

articlefoot {
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
  background-color: #f1f1f1;
  padding: 10px;
}

.body , article ,section{
  overflow-x :auto;
}

img {
width: 95%;
}


@media (max-width: 880px) {
  
  .side {display: none;}
  section {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
}

a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.prefooter {
  grid-area: prefooter;
  background-color: 0f7490;
  padding: 10px;
}
.prefooter {
  color: 0f7490;
  text-align: center;
  font-family: NAZANIN;
  font-size: 25px;
  
}

.footer {
  background-color:777;
  padding: 20px;
  text-align: center;
  font-family: NAZANIN;
  font-size: 18px;
  color: blue;
}

</style>-->