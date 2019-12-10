<template>
    <div>
        <Header></Header>
        <div class="conterBox">
            <NoticeList></NoticeList>
            <div class="conterbar  clearfix"></div>
            <File></File>
        </div>
        <div class="newBox clearfix">
            <NewsList></NewsList>
            <div class="tapRight">
                <ul class="tapBox clearfix">
                    <li class="tapActive" id="praise"><i class="fe-thumbs-up"></i>称赞</li>
                    <li class="tapLi" id="meeting"><i class="fe-airplay"></i>会议室</li>
                </ul>
                <div class="tapTextBox">
                    <Hero></Hero>
                    <Meeting></Meeting>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'
    import NoticeList from './components/NoticeList'
    import File from './components/File'
    import NewsList from './components/NewsList'
    import Hero from './components/Hero'
    import Meeting from './components/Meeting'

    export default {
        name: "Home",
        components: {
            Header,
            Footer,
            NoticeList,
            File,
            NewsList,
            Hero,
            Meeting
        }
    }
</script>

<style scoped>
    .conterBox{
        width:1200px;
        border:1px solid #e1e1e1;
        height:500px;
        overflow: hidden;
        margin:0 auto;
        border-radius: 4px;
    }
    .conterbar{
        background-color: #ccc;
        width: 1px;
        height: 300px;
        float: left;
        margin-top: 40px;
        margin-left: 2px;
    }


    /*.newBox*/
    .newBox{
        width:1200px;
        margin:0 auto;
    }

    /*tapRight*/
    .tapRight{
        width:390px;
        margin:20px auto;
        float:right;
    }
    .tapBox {
        width:390px;
        margin: -1px 0px 0px;
    }
    .tapRight .tapBox li{
        float:left;
        width:195px;
        margin-left: 0px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .tapRight .tapBox .tapActive{
        border:1px solid #ccc;
        margin-left: 0px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: none;
        cursor: pointer;
    }
    .tapActive  i{
        color: #0096d6;
        margin-right: 6px;
        font-size: 16px;
    }
    .tapRight .tapBox .tapLi{
        background-color:#e5e8e8;
        cursor: pointer;
    }
    .tapLi i{
        margin-right: 6px;
        font-size: 16px;
    }
    .tapRight .tapTextBox .meetingBox{
        display: none;
    }
    .tapTextBox{
        border:1px solid #ccc;
        border-top: none;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    li#praise{
        border-top-left-radius: 4px;
    }
    li#meeting{
        border-top-right-radius: 4px;
    }
</style>
<style>
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
</style>