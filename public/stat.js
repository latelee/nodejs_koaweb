
function getData() {
    $.ajax({
        type: "post",
        url: "stat",
        data: null,
        dataType: "json", //回调函数接收数据的数据格式
        success: function (data) {
            $('#text').empty();

            var chargeArray = [];
            var myLegend = [];
            for (var proto in data)
            {
                var chargePoint = [];
                var chargeData = [];
                for (var item1 of data[proto])
                {
                    var item = JSON.parse(item1);
                    chargePoint.push(item.tm);
                    chargeData.push(item.v);
                }
                var tmpArray =  {
                    name:`${proto}`,
                    type:'line',
                    data:chargeData,
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    }
                };
                chargeArray.push(tmpArray);
                myLegend.push(proto);
            }
            

            // for (var item1 of data["taitanx"])
            // {
            //     var item = JSON.parse(item1);
            //     chargeData1.push(item.v);
            // }

            require.config({
                paths: {
                    echarts: 'http://echarts.baidu.com/build/dist'
                }
            });
            
            require(
                [
                    'echarts',
                    'echarts/chart/line'
                ],
                function (ec) {
                    // 基于准备好的dom，初始化echarts图表
                    var myChart = ec.init(document.getElementById('chargechart')); 
                    
                    var option = {
                        title : {
                            text: '24小時分布',
                            subtext: ''
                        },
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            tooltip:{
                                show:true
                            },
                            data: myLegend
                        },
                        toolbox: {
                            show : true,
                            feature : {
                                mark : {show: false},
                                dataZoom: {show: true},
                                dataView : {show: true, readOnly: false},
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        calculable : true,
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : false,
                                data : chargePoint,
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                axisLabel : {
                                    formatter: '{value}'
                                }
                            }
                        ],
                        series : chargeArray
                    };
                    myChart.setOption(option); 
                }
            );
        },
        error: function (data) {
            $('#text').html("<span>" + "失败！..." + "</span>")
        }
    });
    // setTimeout(getData, 3000);
}

window.onload = function () {
    getData();
}