function updateTime(time)
{
    $("#time").html(time);
}

function getData() {
    $.ajax({
        type: "post",
        url: "data",
        data: null,
        dataType: "json", //回调函数接收数据的数据格式
        success: function (data) {
            $('#text').empty();
            updateTime(`nothing to show but time: ${data['time']}`);
            $("#tbody1").html(data['foo']);
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