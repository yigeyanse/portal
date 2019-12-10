<template>
    <header>
        <ul class="clearfix headerBox">
            <li>
                <img class="headerLogo" src="@/assets/images/whiteLogo.png"/>
                <span class="headerText">HPPS PORTAL</span>
            </li>
            <li>
                <ul class="clearfix headerNav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="workPlace.html">Work Place</a></li>
                    <li><a href="#">PaCS Portal</a></li>
                    <li><a href="#">KMS</a></li>
                    <li><a href="#">MBO</a></li>
                    <li><a href="#">Admin</a></li>
                </ul>
            </li>
            <li id="loadName">
                <span class="loadName-icon"><i class="mdi mdi-account-outline"></i></span>
                <span >Welcome</span>
                <span class="loadName-icon"><i class="mdi mdi-menu-down"></i></span>
            </li>
        </ul>

        <!-- 登陆弹框 -->
        <div class="loadMask">
            <div class="loadBox">
                <ul class="loadTexe">
                    <li>
                        <img class="loadLogo" src="@/assets/images/blueLogo.png"/>
                        <p><span class="title">HPPS</span>Portal System</p>
                        <i id="loadClose" class="fe-x"></i>
                    </li>
                    <li>
                        <input type="text" id="userId" placeholder="User ID"/>
                    </li>
                    <li>
                        <input type="Password" id="userPassword" placeholder="Password" autocomplete="off"/>
                    </li>
                    <li>
                        <button type="button">Log In</button>
                        <button class="loadClose" type="button">CLOSE</button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {

            };
        },
        mounted() {
            //登陆弹框
            $('#loadName').on('click',function(){
                $('.loadMask').show();
            });
            $('#loadClose').on('click',function(){
                $('.loadMask').hide();
                $('.loadTexe #userId').val('');
                $('.loadTexe #userPassword').val('');
            });
            $('.loadClose').on('click',function(){
                $('.loadMask').hide();
                $('.loadTexe #userId').val('');
                $('.loadTexe #userPassword').val('');
            });
        }
    }
</script>

<style lang="scss" scoped>
    ul,li{
        list-style:none;
        margin-left: 5px;
    }
    .headerNav{
        margin-left: 24px;
    }
    .headerBox a{
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        font-size: 18px;
        padding:20px;
        line-height: 72px;
    }
    .headerBox a:hover{
        background-color: rgba(255,255,255,0.2);
        text-decoration: none;
        color: #fff;
        padding-bottom: 26px;
        padding-top: 27px;
    }
    header{
        width:100%;
        min-width: 1300px;
        height:72px;
        background-color: #007DBA;
        margin-bottom: 30px;
    }
    header>ul{
        width:80%;
        height:72px;
        margin:0px auto;
    }
    .headerBox li{
        float: left;
    }
    .headerBox li img{
        line-height: 72px;
    }
    .headerLogo{
        width:40px;
        height:40px;
        margin-right: 6px;
        margin-top: 16px;
        vertical-align: middle;
    }
    .headerText{
        line-height: 72px;
        vertical-align: top;
        color: #fff;
        font-size: 18px;
        font-weight:bold!important;
    }
    .headerBox li .headerNav li{
        padding:0 6px;
    }
    #loadName{
        cursor:pointer;
        color:#fff;
        float: right;
        height: 72px;
        line-height: 72px;
        font-weight: bold;
        font-size: 18px;
    }
    #loadName .loadName-icon{
        display: inline-block;
        width: 30px;
        text-align: center;
    }
    #loadName  .loadName-icon i{
        font-size: 16px;
    }


    /*登录弹窗*/

    .loadMask{
        width:100%;
        height:100%;
        position: fixed;
        top:0;
        left:0;
        background-color: rgba(0,0,0, 0.2);
        z-index: 999;
        display:none;
    }
    .loadMask .loadBox{
        width:400px;
        height:300px;
        position: fixed;
        top:50%;
        left:50%;
        margin-top:-170px;
        margin-left:-180px;
        background-color:#fff;
        border-radius: 4px;
    }
    .loadMask .loadBox .loadTexe{
        width:94%;
        margin:10px auto;
    }
    .loadTexe li{
        height: 48px;
        margin-top: 16px;
    }

    .loadMask .loadBox .loadLogo{
        width:40px;
        height:40px;
        float:left;
        margin-top: 6px;

    }
    .loadTexe p{
        float: left;
        line-height: 48px;
        margin-left: 10px;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .title{
        color: #0096d6!important;
        margin-right: 6px;
    }
    .loadTexe i{
        float: right;
        padding-right: 10px;
        line-height: 48px;
        margin-left: 10px;
        font-size: 20px;
        color: #999;
        cursor: pointer;
    }
    .loadTexe input{
        float: left;
        width: 300px;
        margin-top: 16px;
        line-height: 30px;
        margin-left: 24px;
        font-size: 14px;
        padding-left: 10px;
        outline: none;
        background:none;
        border-bottom:1px solid #ccc;
        border-right: none;
        border-left: none;
        border-top: none;
    }

    .loadTexe button{
        outline: none;
        text-align-last: center;
        margin-left: 34px;
        width: 120px;
        height: 36px;
        background-color: #0096d6;
        color: #fff;
        border-radius: 60px;
        border: none;
        font-size: 16px;
        line-height: 36px;
        margin-top: 20px;
    }
    .loadTexe button:hover{
        background-color: #007dba;

    }

</style>