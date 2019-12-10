<template>
    <footer>
        <div class="footerBox">
            <h4>Site Link</h4>
            <ul class="footerList clearfix">
                <li><a href="javascript:;">iSCM</a></li>
                <li><a href="javascript:;">EEM</a></li>
                <li><a href="javascript:;">The Daily lnc.</a></li>
                <li><a href="javascript:;">HTM PRD</a></li>
                <li><a href="javascript:;">NextPLM</a></li>
                <li><a href="javascript:;">iCIS</a></li>
                <li><a href="javascript:;">iMAP</a></li>
                <li><a href="javascript:;">WorkDay</a></li>
                <li><a href="javascript:;">NextPLM</a></li>
                <li><a href="javascript:;">HP-SQCI</a></li>
                <li><a href="javascript:;">My HR</a></li>
                <li><a href="javascript:;">iMES</a></li>
                <li><a href="javascript:;">iMOLD-HTM</a></li>
                <li><a href="javascript:;">HP-SQCI</a></li>
                <li><a href="javascript:;">HP-EHS</a></li>
                <li><a href="javascript:;">ADP</a></li>
                <li><a href="javascript:;">iSRM</a></li>
                <li><a href="javascript:;">iMOLD-VTM</a></li>
                <li><a href="javascript:;">HP-EHS</a></li>
            </ul>
        </div>
        <p class="footerBottom">© 2019 HP Printing (Shandong) Co.,Ltd. All Right Reserved.</p>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    /*footer*/
    ul,li{
        list-style:none;
        margin-left: 5px;
    }
    .clearfix:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0;
    }
    .clearfix{
        zoom:1;
    }
    footer{
        width:100%;
        padding-top:10px;
        background-color:#f2f2f2;
    }
    footer .footerBox{
        width:1200px;
        margin: 0 auto 20px;
    }
    .footerBox h4{
        font-size: 14px;
        font-weight: 700;
        color: #666;
    }

    .footerBox .footerList li{
        float:left;
        text-align: left;
        width:20%;
        margin:6px auto;
    }
    .footerList a{
        text-decoration: none;
        font-size: 14px;
        color: #666;
    }
    .footerList a:hover{
        text-decoration: none;
        font-size: 14px;
        color: #0096d6;
    }
    .footerBottom{
        width:100%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #999;
        font-size: 14px;
        margin: 0px;
        border-top:1px solid #ccc;
    }
</style>