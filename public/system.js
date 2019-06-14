function getData() {
    $.ajax({
        type: "post",
        url: "system",
        data: null,
        //dataType: "json", //回调函数接收数据的数据格式
        success: function (data) {
            $('#sys_info').html(data)
        },
        error: function (data) {
            $('#sys_info').html("<span>" + "失败！..." + "</span>")
        }
    });
    setTimeout(getData, 5000);
}

window.onload = function () {
    getData();
}