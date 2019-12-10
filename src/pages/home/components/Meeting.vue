<template>
    <!-- 会议室 -->
    <div class="meetingBox">
        <div class="container">
            <el-date-picker
                    v-model="meetingDate"
                    type="date"
                    placeholder="会议日期">
            </el-date-picker>
        </div>
        <div class="meetingTable">
            <table>
                <thead>
                <tr>
                    <th>会议室/时间</th>
                    <th>09</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>恳谈室<br>（研发栋1F）</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                </tr>
                <tr>
                    <td>党员活动室<br>（研发栋1F）</td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                </tr>
                <tr>
                    <td>会议室A<br>（研发栋2F）</td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                </tr>
                <tr>
                    <td>会议室A<br>（研发栋3F）</td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                </tr>
                <tr>
                    <td>会议室A<br>（研发栋3F）</td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                </tr>
                <tr>
                    <td>会议室A<br>（研发栋3F）</td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                </tr>
                <tr>
                    <td>会议室A<br>（研发栋3F）</td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                    <td class="conterYes red">是</td>
                    <td class="conterYes"></td>
                    <td class="conterYes"></td>
                </tr>
                </tbody>
            </table>
            <div id="seeInfo">
                <div class="seeInfo_name">ESH(何玲)EHS</div>
                <div class="seeInfo_purpose">&S周间会议</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Meeting",
        data (){
            return {
                meetingDate : ''
            }
        },
        mounted() {
            //会议室
            $('.conterYes').mouseover(function(obj){
                const target = $(obj.target);

                if($(target).text() != ""){
                    $('#seeInfo').show();
                };
            });

            $('.conterYes').mouseout(function(){
                $('#seeInfo').hide();
            });
        }
    }
</script>

<style scoped>
    .meetingBox{
        height: 388px;
        position: relative;
    }
    .meetingTable{
        text-align: center;
        height: 298px;
        overflow: hidden;
        overflow-y: scroll;
    }
    .container{
        padding-top: 20px;
        text-align: center;
        line-height: 40px;
        width:388px;
        margin-bottom: 15px;
    }

    .input-group input{
        height: 32px;
        outline: none;
        background:none;
        border:1px solid #ccc;
        margin-bottom: 0px;
        border-radius: 4px;
        padding-left: 10px;
        width: 200px;
    }

    .meetingTable table{
        width: 90%;
        margin-top: 0px;
        font-size: 14px;
        text-align:center;
        margin-left: 20px;
        height: 100%;
    }
    .meetingTable table th{
        border:1px solid #ccc;
        height: 32px;
        font-size: 14px;
        padding: 4px;
        text-align: center;
        line-height: 32px;
        font-weight: bold;
    }
    .meetingTable table td{
        border:1px solid #ccc;
        height: 28px;
        font-size: 14px;
        padding: 4px;
        text-align: center;
        background-color: #f7f7f7;
        cursor: pointer;
    }
    .seeInfo_name{
        background-color: #007dba;
        color: #fff;
        height: 32px;
        width: 100%;
        line-height: 32px;
        padding-left: 8px;
        padding-right: 8px;
        font-size: 14px;
    }
    .red{
        background-color: #FF0000 !important;
        color: #fff;
    }
    .seeInfo_purpose{
        height: 32px;
        width: 100%;
        line-height: 32px;
        padding-left: 8px;
        padding-right: 8px;
        font-size: 14px;
    }
    .conterYes{
        position: relative;
    }
    .meetingBox #seeInfo{
        background-color:#fff;
        border:1px solid #ccc;
        z-index: 99;
        position: absolute;
        top: 26px;
        left: 16px;
        display: none;
        -moz-box-shadow: 0 1px 6px 1px  #ccc;
        -weblit-box-shadow: 0  1px 6px 1px #ccc;
        box-shadow: 0 1px 6px 1px #ccc;
    }

</style>