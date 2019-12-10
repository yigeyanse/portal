<template>
    <!-- 称赞 -->
    <div class="heroList">
        <div class="heroList_search">
            <input type="text"/>
            <span><i class="fe-search"></i></span>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="@/assets/images/phone.jpg">
                    <span class="swiper-slide_title">制造技术科：韩一雪</span>
                    <p>  &nbsp; &nbsp;&nbsp;&nbsp;   她认真负责，业务精炼，需要时总是能随叫随到。她待人热情，真诚乐观，笑容常在嘴角。她是生产线的守护者，积极向上的惠普人，值得称赞的好同事！</p>
                    <span class="swiper-slide_figure">推荐人：邢一二</span>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/images/phone.jpg">
                    <span class="swiper-slide_title">制造技术科：韩一雪</span>
                    <p>  &nbsp; &nbsp;&nbsp;&nbsp;   她认真负责，业务精炼，需要时总是能随叫随到。她待人热情，真诚乐观，笑容常在嘴角。她是生产线的守护者，积极向上的惠普人，值得称赞的好同事！</p>
                    <span class="swiper-slide_figure">推荐人：邢一二</span>
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/images/phone.jpg">
                    <span class="swiper-slide_title">制造技术科：韩一雪</span>
                    <p>  &nbsp; &nbsp;&nbsp;&nbsp;   她认真负责，业务精炼，需要时总是能随叫随到。她待人热情，真诚乐观，笑容常在嘴角。她是生产线的守护者，积极向上的惠普人，值得称赞的好同事！</p>
                    <span class="swiper-slide_figure">推荐人：邢一二</span>
                </div>

            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        name: "Hero",
        mounted(){
            new Swiper('.swiper-container',{
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    renderFraction: function (currentClass, totalClass) {
                        return '第' + '<span class="' + currentClass + '"></span>' + '位'
                    }
                }
            })

            //称赞、会议室
            $('.tapBox li').on('click',function(obj){
                const target = $(obj.target);
                //console.log(obj.target.localName)
                if(obj.target.localName == 'i'){
                    console.log($(target).parent())
                    $(target).parent().attr('class','tapActive');
                    $(target).parent().siblings().attr('class','tapLi');
                }else{
                    $(target).attr('class','tapActive');
                    $(target).siblings().attr('class','tapLi');
                }
            });

            $('#praise').on('click',function(){
                $(".heroList").show();
                $(".meetingBox").hide();
            });

            $('#meeting').on('click',function(){
                $(".meetingBox").show();
                $(".heroList").hide();
            });
        }
    }
</script>

<style scoped>
    @import '../../../assets/css/swiper.min.css';
    .heroList{
        height: 388px;
    }
    .heroList_search{
        padding-top: 24px;
        text-align: center;
        height: 32px;
        line-height:28px;
    }
    .heroList_search input{
        border: 1px solid #ccc;
        height: 30px;
        outline: none;
        line-height: 28px;
        display: inline-block;
        padding-left: 6px;
        border-radius: 4px;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        padding-right: 6PX;
        width: 120PX;
    }
    .heroList_search span{
        height: 30px;
        width: 36px;
        line-height: 31px;
        display: inline-block;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        margin-left: -4px;
        background-color: #0096d6;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }

    .swiper-container {
        height: auto;
        width: 240px;
        padding-top:40px;
        margin-top: 34px;
        margin-bottom: 13px;
    }
    .swiper-button-next, .swiper-button-prev {
        top: 20px;
        width: 24px;
        height: 26px;
        background-color: #f7f7f7;
        -moz-background-size: 12px 18px;
        -webkit-background-size: 12px 18px;
        background-size: 14px 14px;
        z-index: 11;
    }
    .swiper-slide_title{
        font-size: 14px;
        font-weight: 700;
        display: inline-block;
        padding-top: 10px;
        color: #0096d6;
        float: left;
        margin-left: 56px;
    }
    .swiper-slide p{
        font-size: 12px;
        line-height: 18px;
        float: left;
        padding-left: 10px;
        padding-right: 10px;
    }
    .swiper-slide img{
        width: 235px;
        height: 139px;
    }
    .swiper-slide_figure{
        color: #d7410b;
        font-size: 14px;
        float: right;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
        top: 2px;
        color: #d7410b;
    }
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        right: 60px;
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        left: 60px;
    }
</style>