const koa_router = require("koa-router");
var pm2 = require('pm2');

var g_moduleName = 'api_router';

var g_router = koa_router();

g_router.post("/data",async (ctx) => {
    var body = {};
    body['foo'] = {};
    body['bar'] = {};
    var now = new Date().toLocaleString();
    body['time'] = now;
    ctx.body = body;
});

var os = require('os');
g_router.post("/system",async (ctx) => {
    var body = "";

    body += `time: ${(new Date()).toDateString()} ${(new Date()).toTimeString()}<br>`;
    body += `systeim run: ${os.uptime()} s <br>`;
    var memRate = (os.freemem()/os.totalmem() * 100).toFixed(2);
    body += `mem: ${(os.freemem()/1024/1024/1024).toFixed(2)}GB / ${(os.totalmem()/1024/1024/1024).toFixed(2)}GB  (${memRate}%)<br>`;
    //console.log(body);
    ctx.body = body;
});

g_router.post("/pm2",async (ctx) => {
    var body = {};

    body = `hello world`;
    ctx.body = body;
    
    pm2.list(function(err, processDescriptionList){
        //console.log(processDescriptionList);
    });
});

g_router.post("/stat",async (ctx) => {
    var stat = {};
    stat = 
    {
        "foobar": [
            "{\"tm\":\"06-08 20:54\",\"v\":3}",
            "{\"tm\":\"06-08 20:59\",\"v\":4}",
            "{\"tm\":\"06-08 21:04\",\"v\":3}",
            "{\"tm\":\"06-08 21:09\",\"v\":5}",
            "{\"tm\":\"06-08 21:14\",\"v\":6}",
            "{\"tm\":\"06-08 21:19\",\"v\":4}",
            "{\"tm\":\"06-08 21:24\",\"v\":3}",
            "{\"tm\":\"06-08 21:29\",\"v\":3}",
            "{\"tm\":\"06-08 21:34\",\"v\":4}",
            "{\"tm\":\"06-08 21:39\",\"v\":3}",
            "{\"tm\":\"06-08 21:44\",\"v\":2}",
            "{\"tm\":\"06-08 21:49\",\"v\":3}",
            "{\"tm\":\"06-08 21:54\",\"v\":3}",
            "{\"tm\":\"06-08 21:59\",\"v\":1}",
            "{\"tm\":\"06-08 22:04\",\"v\":1}",
            "{\"tm\":\"06-08 22:09\",\"v\":1}",
            "{\"tm\":\"06-08 22:14\",\"v\":1}",
            "{\"tm\":\"06-08 22:19\",\"v\":0}",
            "{\"tm\":\"06-08 22:24\",\"v\":2}",
            "{\"tm\":\"06-08 22:29\",\"v\":2}",
            "{\"tm\":\"06-08 22:34\",\"v\":3}",
            "{\"tm\":\"06-08 22:39\",\"v\":3}",
            "{\"tm\":\"06-08 22:44\",\"v\":2}",
            "{\"tm\":\"06-08 22:49\",\"v\":2}",
            "{\"tm\":\"06-08 22:54\",\"v\":2}",
            "{\"tm\":\"06-08 22:59\",\"v\":1}",
            "{\"tm\":\"06-08 23:04\",\"v\":1}",
            "{\"tm\":\"06-08 23:09\",\"v\":2}",
            "{\"tm\":\"06-08 23:14\",\"v\":2}",
            "{\"tm\":\"06-08 23:19\",\"v\":2}",
            "{\"tm\":\"06-08 23:24\",\"v\":1}",
            "{\"tm\":\"06-08 23:29\",\"v\":1}",
            "{\"tm\":\"06-08 23:34\",\"v\":0}",
            "{\"tm\":\"06-08 23:39\",\"v\":0}",
            "{\"tm\":\"06-08 23:44\",\"v\":0}",
            "{\"tm\":\"06-08 23:49\",\"v\":1}",
            "{\"tm\":\"06-08 23:54\",\"v\":2}",
            "{\"tm\":\"06-09 01:04\",\"v\":0}",
            "{\"tm\":\"06-09 01:09\",\"v\":0}",
            "{\"tm\":\"06-09 01:14\",\"v\":0}",
            "{\"tm\":\"06-09 01:19\",\"v\":0}",
            "{\"tm\":\"06-09 01:24\",\"v\":0}",
            "{\"tm\":\"06-09 01:29\",\"v\":0}",
            "{\"tm\":\"06-09 01:34\",\"v\":0}",
            "{\"tm\":\"06-09 01:39\",\"v\":1}",
            "{\"tm\":\"06-09 01:44\",\"v\":1}",
            "{\"tm\":\"06-09 01:49\",\"v\":1}",
            "{\"tm\":\"06-09 01:54\",\"v\":1}",
            "{\"tm\":\"06-09 01:59\",\"v\":1}",
            "{\"tm\":\"06-09 02:04\",\"v\":1}",
            "{\"tm\":\"06-09 04:49\",\"v\":0}",
            "{\"tm\":\"06-09 04:54\",\"v\":0}",
            "{\"tm\":\"06-09 04:59\",\"v\":0}",
            "{\"tm\":\"06-09 05:04\",\"v\":0}",
            "{\"tm\":\"06-09 05:09\",\"v\":0}",
            "{\"tm\":\"06-09 05:14\",\"v\":0}",
            "{\"tm\":\"06-09 05:19\",\"v\":0}",
            "{\"tm\":\"06-09 05:24\",\"v\":0}",
            "{\"tm\":\"06-09 05:29\",\"v\":0}",
            "{\"tm\":\"06-09 07:04\",\"v\":1}",
            "{\"tm\":\"06-09 07:09\",\"v\":1}",
            "{\"tm\":\"06-09 07:14\",\"v\":0}",
            "{\"tm\":\"06-09 07:19\",\"v\":0}",
            "{\"tm\":\"06-09 07:24\",\"v\":1}",
            "{\"tm\":\"06-09 07:29\",\"v\":2}",
            "{\"tm\":\"06-09 07:34\",\"v\":1}",
            "{\"tm\":\"06-09 07:39\",\"v\":1}",
            "{\"tm\":\"06-09 07:44\",\"v\":1}",
            "{\"tm\":\"06-09 07:49\",\"v\":1}",
            "{\"tm\":\"06-09 07:54\",\"v\":1}",
            "{\"tm\":\"06-09 07:59\",\"v\":1}",
            "{\"tm\":\"06-09 08:04\",\"v\":1}",
            "{\"tm\":\"06-09 08:09\",\"v\":2}",
            "{\"tm\":\"06-09 08:14\",\"v\":2}",
            "{\"tm\":\"06-09 08:19\",\"v\":2}",
            "{\"tm\":\"06-09 08:24\",\"v\":1}",
            "{\"tm\":\"06-09 08:29\",\"v\":1}",
            "{\"tm\":\"06-09 08:34\",\"v\":1}",
            "{\"tm\":\"06-09 08:39\",\"v\":1}",
            "{\"tm\":\"06-09 08:44\",\"v\":1}",
            "{\"tm\":\"06-09 08:49\",\"v\":0}",
            "{\"tm\":\"06-09 08:54\",\"v\":0}",
            "{\"tm\":\"06-09 08:59\",\"v\":1}",
            "{\"tm\":\"06-09 09:04\",\"v\":1}",
            "{\"tm\":\"06-09 09:09\",\"v\":0}",
            "{\"tm\":\"06-09 09:14\",\"v\":0}",
            "{\"tm\":\"06-09 10:39\",\"v\":6}",
            "{\"tm\":\"06-09 10:44\",\"v\":6}",
            "{\"tm\":\"06-09 10:49\",\"v\":5}",
            "{\"tm\":\"06-09 10:54\",\"v\":5}",
            "{\"tm\":\"06-09 10:59\",\"v\":6}",
            "{\"tm\":\"06-09 11:04\",\"v\":7}",
            "{\"tm\":\"06-09 11:10\",\"v\":7}",
            "{\"tm\":\"06-09 11:15\",\"v\":6}",
            "{\"tm\":\"06-09 11:20\",\"v\":5}",
            "{\"tm\":\"06-09 11:25\",\"v\":5}",
            "{\"tm\":\"06-09 11:30\",\"v\":3}",
            "{\"tm\":\"06-09 11:35\",\"v\":4}",
            "{\"tm\":\"06-09 11:40\",\"v\":4}",
            "{\"tm\":\"06-09 11:45\",\"v\":2}",
            "{\"tm\":\"06-09 11:50\",\"v\":3}",
            "{\"tm\":\"06-09 11:55\",\"v\":3}",
            "{\"tm\":\"06-09 12:00\",\"v\":3}",
            "{\"tm\":\"06-09 12:05\",\"v\":5}",
            "{\"tm\":\"06-09 12:10\",\"v\":4}",
            "{\"tm\":\"06-09 12:15\",\"v\":3}",
            "{\"tm\":\"06-09 12:20\",\"v\":3}",
            "{\"tm\":\"06-09 12:25\",\"v\":6}",
            "{\"tm\":\"06-09 12:30\",\"v\":6}",
            "{\"tm\":\"06-09 12:35\",\"v\":10}",
            "{\"tm\":\"06-09 12:40\",\"v\":9}",
            "{\"tm\":\"06-09 12:45\",\"v\":9}",
            "{\"tm\":\"06-09 12:50\",\"v\":10}",
            "{\"tm\":\"06-09 12:55\",\"v\":9}",
            "{\"tm\":\"06-09 13:00\",\"v\":10}",
            "{\"tm\":\"06-09 13:05\",\"v\":11}",
            "{\"tm\":\"06-09 13:10\",\"v\":10}",
            "{\"tm\":\"06-09 13:15\",\"v\":12}",
            "{\"tm\":\"06-09 13:20\",\"v\":9}",
            "{\"tm\":\"06-09 13:25\",\"v\":9}",
            "{\"tm\":\"06-09 13:30\",\"v\":10}",
            "{\"tm\":\"06-09 13:35\",\"v\":6}",
            "{\"tm\":\"06-09 13:40\",\"v\":5}",
            "{\"tm\":\"06-09 13:45\",\"v\":6}",
            "{\"tm\":\"06-09 13:50\",\"v\":4}",
            "{\"tm\":\"06-09 13:55\",\"v\":3}",
            "{\"tm\":\"06-09 14:00\",\"v\":4}",
            "{\"tm\":\"06-09 14:05\",\"v\":4}",
            "{\"tm\":\"06-09 14:10\",\"v\":5}",
            "{\"tm\":\"06-09 14:15\",\"v\":5}",
            "{\"tm\":\"06-09 14:20\",\"v\":6}",
            "{\"tm\":\"06-09 14:25\",\"v\":3}",
            "{\"tm\":\"06-09 14:30\",\"v\":3}",
            "{\"tm\":\"06-09 14:35\",\"v\":3}",
            "{\"tm\":\"06-09 14:40\",\"v\":3}",
            "{\"tm\":\"06-09 14:45\",\"v\":4}",
            "{\"tm\":\"06-09 14:50\",\"v\":3}",
            "{\"tm\":\"06-09 14:55\",\"v\":3}",
            "{\"tm\":\"06-09 15:00\",\"v\":2}",
            "{\"tm\":\"06-09 15:05\",\"v\":2}",
            "{\"tm\":\"06-09 15:10\",\"v\":2}",
            "{\"tm\":\"06-09 15:15\",\"v\":2}",
            "{\"tm\":\"06-09 15:20\",\"v\":2}",
            "{\"tm\":\"06-09 15:25\",\"v\":2}",
            "{\"tm\":\"06-09 15:30\",\"v\":2}",
            "{\"tm\":\"06-09 15:35\",\"v\":4}",
            "{\"tm\":\"06-09 15:40\",\"v\":3}",
            "{\"tm\":\"06-09 15:45\",\"v\":5}"
        ]
    }
    ctx.body = stat;
});

module.exports = {
    g_router,
}
