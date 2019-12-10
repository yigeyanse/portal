<template>
    <!-- 公告板弹框 -->
    <div class="detailsMask">
        <div class="detailsBox">
            <div class="toptitle">
                <img class="loadLogo" src="images/blueLogo.png"/>
                <p>HPPS PORTAL</p>
                <i id="detailsClose" class="fe-x"></i>
            </div>
            <div class="tilteinput">
                <span>标题：</span>
                <input type="text" id="detailsTitle" placeholder="关于Portal 登录、显示、审批、打印、权限等异常及问题的说明" readonly/>
            </div>
            <div>
                <div class="txtinput info">
                    <span>发布人：</span>
                    <input type="text" id="detailsName" placeholder="李慷" readonly/>
                </div>
                <div class="txtinput">
                    <span>部门：</span>
                    <input type="text" placeholder="SW革新科" readonly/>
                </div>
                <div class="txtinput">
                    <span>发布时间：</span>
                    <input type="text" id="detailsTime" placeholder="2019.01.12 14:49:44" readonly/>
                </div>
                <div class="detailsText">
                    <p>各位同事:</p>
                    <p>关于HPPS Portal在登录及使用中遇到的问题，进行简要说明其中1、2、3点为必要点设置。</p>
                    <p><span class="detailsText_sort">（1）</span><span class="detailsText_info">HPPS Portal的网址是http://109.116.6.6:7080，后面没有其他字符，也请确认收藏地址中没有其他字符。</span></p>
                    <p><span class="detailsText_sort">（2）</span><span class="detailsText_info">HPPS Portal请使用IE打开，目前仅支持IE，其必须使用前在兼容视图和信任点增加109.116.6.6，详细步骤参考附件。</span></p>
                    <p><span class="detailsText_sort">（3）</span><span class="detailsText_info">浏览器设置：设置-Intenmet选项-安全-点击受信任的站点-该区域的安全级别调至最低，点击确定退出。</span></p>
                    <p><span class="detailsText_sort">（4）</span><span class="detailsText_info">如果点开模块后显示空白页，仅左上角显示叉号，请参考 \\109.116.6.5\ software\HPPS生产系统\HPPS Portal\Pprtal手动安装方法.txt</span></p>
                    <p><span class="detailsText_sort">（5）</span><span class="detailsText_info">如果首页只显示HPPS Portal Logo，请参考<a href="#">Potal显示异常解决方法。</a></span></p>
                    <p><span class="detailsText_sort">（6）</span><span class="detailsText_info">审批提交不成功或者审批后数据有问题，请参考<a href="">Portal审批功能变更通知</a></span></p>
                    <p><span class="detailsText_sort">（7）</span><span class="detailsText_info">新用户注册、用户停用无法登录、密码重置等问题，<a href="">请参考关于Potal用户管理、登录方式及密码策略变更的通知。</a></span></p>
                    <p><span class="detailsText_sort">（8）</span><span class="detailsText_info">Portal系统的各功能页面权限开通，请发送邮件至直属经理，说明开通原因及相关页面名称，经理回复审批意见后发送至kang.li@hp.com(抄送HPPSIT)。</span></p>
                    <p><span class="detailsText_sort">（9）</span><span class="detailsText_info">打印时提示当前脚本错误，请先确认前三条设置。还不能打印则设置：浏览器设  -Intenmet选项-安全-受信任的站点 自定义级别-后半部分为“ActiveX控件初始化并执行脚本”的选项-将“禁用”改为“启用”，保存后退出。</span></p>
                    <p>如有任何疑问，请邮件联系kamh.li@hp.com.</p>
                    <p>谢谢.</p>

                </div>
                <div class="attachment">
                    <p><i class="fe-paperclip"></i>附件</p>
                    <div class="attachment_txt"><a href="#">HPPS PORTAL 安装指南.pptx (6MB)</a></div>
                    <div class="attachment_txt"><a href="#">HPPS PORTAL 安装指南.pptx (6MB)</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notice",
        mounted() {
            $('#detailsClose').on('click',function(){
                $('.detailsMask').hide();
            });

        }
    }
</script>

<style scoped>
    /*detailsMask*/

    .detailsMask{
        width:100%;
        height:100%;
        position: fixed;
        top:0;
        left:0;
        background-color: rgba(0,0,0, 0.2);
        z-index: 999;
        display:none;
    }
    .detailsMask .detailsBox{
        width:560px;
        height:580px;
        position: fixed;
        top:50%;
        left:50%;
        margin-top:-280px;
        margin-left:-240px;
        background-color:#fff;
    }
    .toptitle{
        background-color: #f7f7f7;
        height: 48px;
        line-height: 48px;
        -moz-box-shadow: 0 0px 0px 0px  #ccc;
        -weblit-box-shadow: 0  0px 0px 0px #ccc;
        box-shadow: 0 0px 1px 0px #ccc;
    }
    .toptitle p{
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
        display: inline-block;
    }
    .toptitle i{
        float: right;
        margin-left: 10px;
        font-size: 18px;
        line-height: 48px;
        margin-right: 20px;
        color: #999;
        cursor: pointer;

    }
    .detailsMask .detailsBox .loadLogo{
        width:36px;
        height:36px;
        float:left;
        margin-top: 6px;
        margin-left: 20px;
        margin-right: 10px;
    }
    .tilteinput{
        font-size: 14px;
        margin-left: 14px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .tilteinput span{
        width: 56px;
        text-align: right;
        display: inline-block;
    }

    .tilteinput input{
        font-size: 12px;
        width: 460px;
        padding-left: 10px;
        height: 28px;
        outline: none;
        border-radius: 4px;
        color: #999;
        border: 1px solid #ccc;
    }
    .txtinput{
        font-size: 14px;
        margin-left: 14px;
        margin-top: 10px;
        float: left;
        margin-bottom: 10px;
    }
    .txtinput input{
        font-size: 12px;
        width: 122px;
        padding-left: 6px;
        height: 28px;
        outline: none;
        border-radius: 4px;
        color: #999;
        border:1px solid #ccc;
    }
    .info input{
        font-size: 12px;
        width: 70px;
        padding-left: 6px;
        height: 28px;
        outline: none;
        border-radius: 4px;
        color: #999;
        border:1px solid #ccc;
    }

    .detailsMask .detailsText{
        border:1px solid #e1e1e1;
        margin:15px;
        height:320px;
        width: 530px;
        overflow:auto;
        float: left;
        padding: 10px;
    }

    .detailsMask .detailsText p{
        word-wrap:break-word;
        margin-bottom:10px;
        font-size: 14px;
        display: flex;
        align-items: flex-start;
    }
    .detailsText_sort{
        width: 40px;
        display: inline-block;
    }
    .detailsText_info{
        width: 450px;
        display: inline-block;
    }
    .detailsText_info a{
        text-decoration: none;
        color: #0096d6;
    }
    .attachment{
        float: left;
        width: 500px;
    }
    .attachment i{
        margin-left: 15px;
        font-size: 14px;
        margin-right: 4px;
        line-height: 24px;
        text-align: center;
        color: #666;
    }
    .attachment p{
        font-size: 12px;
        height: 24px;

    }
    .attachment_txt{
        margin-top: -10px;
        margin-bottom: 6px;
        margin-left: 36px;
    }
    .attachment a{
        font-size: 12px;
        text-decoration: none;
        color: #0096d6;
    }
    .attachment a:hover{
        font-size: 12px;
        color: #007dba;
    }

    .list-unstyled li{
        margin:0;
    }
    .input-group .dropdown-menu{
        padding:0;
    }

</style>