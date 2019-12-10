<template>
    <div>
        <Header></Header>
        <div class="conterList">
            <div class="notice clearfix">
                <div class="textLeft"><i class="fe-clipboard"></i>公告板</div>
                <div class="choiceRight">
                    <div class="choiceDownBox">
                        <span class="choiceBox">keywords here</span>
                        <span class="choiceBox_icon"><i class="mdi mdi-menu-down"></i></span>
                    </div>
                    <ul class="dropDownBox">
                        <li>keywords here</li>
                        <li>keywords here1</li>
                        <li>keywords here2</li>
                    </ul>
                    <div class="searchBox">
                        <input type="text"/>
                        <span><i class="fe-search"></i></span>
                    </div>
                </div>
            </div>
            <div id="histroyBox">
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="flag"
                            label="区分"
                            align="center"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="dept"
                            label="部门"
                            align="center"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="title"
                            label="Title"
                            align="center"
                            @cell-click="handleClickTitle"
                            class-name="blueTitle">
                    </el-table-column>
                    <el-table-column
                            prop="createDate"
                            label="发布时间"
                            align="center"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="author"
                            label="发布人"
                            align="center"
                            width="120">
                    </el-table-column>
                </el-table>
            </div>
            <div class="pageNum">
                <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </div>
        </div>

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
                        <p><span class="detailsText_sort">（5）</span><span class="detailsText_info">如果首页只显示HPPS Portal Logo，请参考<a href="javascript:;">Potal显示异常解决方法。</a></span></p>
                        <p><span class="detailsText_sort">（6）</span><span class="detailsText_info">审批提交不成功或者审批后数据有问题，请参考<a href="javascript:;">Portal审批功能变更通知</a></span></p>
                        <p><span class="detailsText_sort">（7）</span><span class="detailsText_info">新用户注册、用户停用无法登录、密码重置等问题，<a href="javascript:;">请参考关于Potal用户管理、登录方式及密码策略变更的通知。</a></span></p>
                        <p><span class="detailsText_sort">（8）</span><span class="detailsText_info">Portal系统的各功能页面权限开通，请发送邮件至直属经理，说明开通原因及相关页面名称，经理回复审批意见后发送至kang.li@hp.com(抄送HPPSIT)。</span></p>
                        <p><span class="detailsText_sort">（9）</span><span class="detailsText_info">打印时提示当前脚本错误，请先确认前三条设置。还不能打印则设置：浏览器设  -Intenmet选项-安全-受信任的站点 自定义级别-后半部分为“ActiveX控件初始化并执行脚本”的选项-将“禁用”改为“启用”，保存后退出。</span></p>
                        <p>如有任何疑问，请邮件联系kamh.li@hp.com.</p>
                        <p>谢谢.</p>
                    </div>
                    <div class="attachment">
                        <p><i class="fe-paperclip"></i>附件</p>
                        <div class="attachment_txt"><a href="javascript:;">HPPS PORTAL 安装指南.pptx (6MB)</a></div>
                        <div class="attachment_txt"><a href="javascript:;">HPPS PORTAL 安装指南.pptx (6MB)</a></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'
    import axios from 'axios'

    export default {
        name: "NoticeMore",
        components: {
            Header,
            Footer
        },
        data () {
            return {
                tableData:[],
                currentPage4: 4
            }
        },
        methods: {
            handleClickTitle(row, column, cell, event){
                console.log("handleClickTitle")
                $('.detailsMask').show();
                $('#detailsTime').val(row.createDate);
                $('#detailsName').val(row.author);
                $('#detailsTitle').val(row.title);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        mounted() {
            axios.get('/mock/tableData.json')
                .then((response) => {
                    console.log(response.data.data.length)
                    this.tableData = response.data.data;
                })
                .catch((error)=>{
                    console.log(error)
                });

            //公告板下拉框
            $(".choiceDownBox").on('click',function(){
                $(".dropDownBox").show();
            });

            $(".dropDownBox li").on('click',function(obj){
                const target = $(obj.target);

                $(".choiceBox").text($(target).text());
                $(".dropDownBox").hide();
            });

            $(document).click(function (obj) {
                const target = $(obj.target);
                if(target.attr('class') == 'choiceDownBox' || target.attr('class') == 'choiceBox' || target.attr('class') == 'choiceBox_icon'
                    || target.attr('class') == 'mdi mdi-menu-down' )
                    return false;
                $(".dropDownBox").hide();
            });

            //公告弹窗
            $('#detailsClose').on('click',function(){
                $('.detailsMask').hide();
            });
        }
    }
</script>

<style scoped>
    /*conterList*/

    .conterList{
        width: 1200px;
        margin: 20px auto;
        border: 1px solid #ccc;
        border-radius: 4px;
        min-height: 960px;
        margin-bottom: 60px;
        box-sizing: border-box;

    }
    .notice{
        height: 40px;
        line-height: 40px;
        padding-right: 15px;
        padding-left: 15px;
        border-bottom: 1px solid #ccc;
    }
    .fe-clipboard{
        color: #0096d6;
        font-size: 16px;
        line-height: 40px;
        float: left;
        margin-right: 6px;
    }
    .textLeft{
        float:left;
        font-size: 14px;
        font-weight: 700;
    }
    .choiceRight{
        float:right;
        position: relative;
        height: 40px;
        display: flex;
        justify-content: center;
        align-content: center;
        margin: 0 auto;
    }
    .choiceRight .choiceDownBox{
        border:1px solid #e1e1e1;
        height:29px;
        width: 140px;
        line-height: 28px;
        display: inline-block;
        padding-left: 8px;
        margin-top: 5px;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
    }
    .choiceBox{
        font-size: 14px;
        text-align: center;
        vertical-align: bottom;
    }
    .choiceBox_icon{
        height: 28px;
        width: 28px;
        display: inline-block;
        float:right;
        cursor: pointer;
        border:none;
        border-left: 1px solid #e1e1e1;
        text-align: center;
    }
    .choiceBox_icon i{
        font-size: 24px;
    }
    .choiceRight .dropDownBox{
        display:none;
        border:1px solid #ccc;
        position: absolute;
        top:36px;
        left:0;
        width: 140px;
        height: auto;
        background-color: #fff;
        border-radius: 4px;
        line-height: 27px;
        padding: 4px;
        margin: 0px;

    }
    .dropDownBox li{
        width: auto;
        margin: 0 auto;
        font-size: 16px;
        cursor: pointer;
        padding-left: 5px;
    }
    .dropDownBox li:hover{
        background-color: #f7f7f7;
        font-size: 16px;
        cursor: pointer;
    }
    .dropDownBox {
        margin: 0 auto;
        -moz-box-shadow: 0 1px 1px 2px  #f2f2f2;
        -weblit-box-shadow: 0  1px 1px 2px #f2f2f2 ;
        box-shadow: 0 1px 1px 2px #f2f2f2;
    }
    .dropDownBox i{
        width: auto;
        margin: 0 auto;
        font-size: 16px;
        cursor: pointer;
    }
    .choiceRight .searchBox{
        display:inline-block;
        margin-left: -2px;
        margin-top: -1px;

    }
    .choiceRight .searchBox input{
        border:1px solid #e1e1e1;
        height: 29px;
        line-height: 28px;
        display: inline-block;
        padding-left: 4px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        outline: none;
        width: 120px;
        padding-right: 6px;
    }
    .choiceRight .searchBox span{
        height: 31px;
        width: 36px;
        line-height: 28px;
        display: inline-block;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        margin-left: -6px;
        background-color: #0096d6;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }
    .searchBox i{
        align-content: center;
        vertical-align: middle;
        align-items: center;
    }

    /*histroyBox*/
    #histroyBox{
        margin: 0px;
        width: 100%;
    }
    .el-table >>> .blueTitle{
        color: #0096D6;
    }

    /*.detailsMask*/
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
        width: 580px;
        height: 600px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -300px;
        margin-left: -290px;
        border-radius: 4px;
        background-color: #fff;
    }
    .toptitle{
        background-color: #f7f7f7;
        height: 48px;
        line-height: 48px;
        font-size: 16px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
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
        width: 478px;
        padding-left: 10px;
        height: 28px;
        outline: none;
        border-radius: 4px;
        color: #999;
        border:1px solid #ccc;
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
        width: 125px;
        padding-left: 6px;
        height: 28px;
        outline: none;
        border-radius: 4px;
        border:1px solid #ccc;
    }
    .info input{
        font-size: 12px;
        width: 70px;
        padding-left: 6px;
        height: 28px;
        outline: none;
        border-radius: 4px;
        border:1px solid #ccc;
    }

    .detailsMask .detailsText{
        border:1px solid #ccc;
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
        width: 470px;
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
        margin-bottom: 10px;

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

    .pageNum{
        margin: 25px 15px;
        text-align: right;
    }
</style>
<style lang="scss">
    .el-table{
        color: #000;
    }
    .el-table th{
        background: #f2f2f2;
        color: #000 !important;
        font-weight: bold;
        padding: 8px 0;
        &.is-leaf{
            border-bottom: 1px solid #ccc;
        }
    }
    .el-table td{
        border-bottom: 1px dashed #d9d9d9;
        padding: 8px 0;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #0096d6;
        color: #FFF;
    }
    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #000;
        min-width: 30px;
        border-radius: 2px;
    }
</style>