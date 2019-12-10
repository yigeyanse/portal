<template>
    <div class="newLeft">
        <div class="newLefTopbar"></div>
        <div class="newTop">
            <i class="fe-command"></i>
            <h4>最新资讯</h4>
            <span><a href="#">More <i class="fe-chevrons-right"></i></a></span>
        </div>
        <ul class="newList">
            <li class="clearfix">
                <img src="images/newimg.jpg"/>
                <div class="newText">
                    <span class="newText_title">"Storage closets full of memories"</span>
                    <p>Dr.Archana Dubey corers SPF tips for Spotting the sportes you don't  want, risk factors and more.</p>
                </div>
                <span class="newTime">2019-04-08</span>
            </li>
            <li class="clearfix">
                <img src="images/newimg.jpg"/>
                <div class="newText">
                    <span class="newText_title">"Storage closets full of memories"</span>
                    <p>Dr.Archana Dubey corers SPF tips for Spotting the sportes you don't  want, risk factors and more.</p>
                </div>
                <span class="newTime">2019-04-08</span>
            </li>
            <li class="clearfix">
                <img src="images/newimg.jpg"/>
                <div class="newText">
                    <span class="newText_title">"Storage closets full of memories"</span>
                    <p>Dr.Archana Dubey corers SPF tips for Spotting the sportes you don't  want, risk factors and more.</p>
                </div>
                <span class="newTime">2019-04-08</span>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsList"
    }
</script>

<style scoped>
    ul,li{
        list-style:none;
        margin-left: 5px;
    }

    .newLeft{
        margin:19px auto;
        width:800px;
        float:left;
        border:1px solid #e1e1e1;
        border-radius: 4px;
        border-top: none;
    }
    .newLefTopbar{
        background-color: #0096d6;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        border-bottom-right-radius:0px;
        border-bottom-left-radius: 0px;
    }

    .newTop{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        margin-left: 10px;
        margin-right: 10px;
    }
    .newTop i{
        color: #0096d6;
        margin-right: 4px;
    }
    .newTop h4{
        font-size: 14px;
        font-weight:700;
        display: inline-block;
    }
    .newTop span{
        font-size: 14px;
        float: right;
        margin-right: 5px;
    }
    .newTop a{
        text-decoration: none;
    }



    .newLeft .newList li{
        margin-bottom:7px;
        height: 120px;

    }
    .newLeft .newList li img{
        width:140px;
        height:100px;
        display:inline-block;
        margin-right: 10px;
        margin-top: 10px
    }
    .newText {
        vertical-align: middle;
        display:inline-block;
        width: 500px;
        word-wrap: break-word;
    }
    .newText_title{
        font-size: 14px;
        color: #0096d6;
        cursor: pointer;
    }
    .newText p{
        font-size: 14px;
        color: #666;
        margin-left: 6px;
        margin-top: 8px;
    }
    .newLeft .newList li .newTime{
        text-align: right;
        float: right;
        font-size: 14px;
        margin-top: 16px;
        margin-right: 20px;
    }

</style>