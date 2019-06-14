function updateTime(time)
{
    $("#time").html(time);
}

function getData() {
    $.ajax({
        type: "post",
        url: "pm2",
        data: null,
        dataType: "null", //回调函数接收数据的数据格式
        success: function (data) {
            $('#text').empty();
        },
        error: function (data) {
            $('#text').html("<span>" + "失败！..." + "</span>")
        }
    });
    setTimeout(getData, 3000);
}

window.onload = function () {
    getData();
}