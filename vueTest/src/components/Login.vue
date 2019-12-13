<template>
<el-form id="login">
	<el-col id="dee">	
			<h3 class="login-title">后台登陆管理系统</h3>
		<el-form-item prop="username">
			<el-input type="text" style="width:30%" placeholder="请输入账号"  @input="change($event)"/>
		</el-form-item> 
		<el-form-item prop="password">
			<el-input type="password" style="width:30%" placeholder="请输入密码"  @input="change($event)"/>
		</el-form-item>
		<el-form-item>
			<el-checkbox>记住密码</el-checkbox>
		</el-form-item>
		<el-button type="primary" >登陆</el-button>
	</el-col>	
</el-form>
</template>
<script>
	export default {
	  name: '',
	  props: {
	    msg: String
	  },
	  change (e) {
		  console.log(e)
	        this.$forceUpdate()
	      },
	}	
</script>
	
<style>
	#login{
		width: 100vw;
		padding: 0;
		margin: 0;
		height: 100vh;
		font-size: 16px;
		background-repeat: no-repeat;
		background-position: left top;
	    background-color: #242645;
		color: #fff;
		font-family: "Source Sans Pro";
		background-size: 100%;
		background-image: url("../assets/starts.png");
		position: relative;
		text-align: center;
	}
	#dee{
		text-align: center;
		padding-top: 10%;
	}
	#title{
	    margin: 0px auto 40px auto;
	    text-align: center;
	    color: #505458;
	}
</style>