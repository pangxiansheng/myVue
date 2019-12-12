<template>
<el-form id="login">
	<div id="dee">
			<h3 class="login-title">后台登陆管理系统</h3>
		<el-form-item>
			<el-input type="text"/>
		</el-form-item> 
		<el-form-item>
			<el-input type="password"/>
		</el-form-item>
		<el-form-item>
			<el-checkbox>记住密码</el-checkbox>
		</el-form-item>
		<el-button type="primary">登陆</el-button>
	</div>
</el-form>
</template>
<script>
		
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
		font-size: 60px;
		color: #A8FF60;
		font-weight: bold;
		padding-bottom: 20%;
	}
</style>