const Koa = require('koa');
const cors = require('koa-cors')();
const koaBody = require('koa-body');
const api = require('./route/api');
var serve = require('koa-static');
// const fs = require('co-fs');
const fs = require('fs');



const app = new Koa();

app.use(cors);

app.use(koaBody({
    formidable:{
        maxFieldsSize :1024*1024*15,  //1M
    },
    multipart: true
}));


app.use(async (ctx, next) => {
    console.log("requestUrl:"+ ctx.request.url);
    var requestPath = ctx.request.path;
    if (requestPath.indexOf('/api-app1') === 0){
        var name = requestPath.substring(requestPath.lastIndexOf('/') + 1);
        var path = './json/app1/' + name + '.json';
        let result = JSON.parse(fs.readFileSync(path,"utf-8"));
        ctx.response.body = result;
    }else if (requestPath.indexOf('/api-app2') === 0) {
        var name = requestPath.substring(requestPath.lastIndexOf('/') + 1);
        var path = './json/app2/' + name + '.json';
        let result = JSON.parse(fs.readFileSync(path,"utf-8"));
        ctx.response.body = result;
    }else if (requestPath.indexOf('/api-app3') === 0) {
        var name = requestPath.substring(requestPath.lastIndexOf('/') + 1);
        var path = './json/app3/' + name + '.json';
        let result = JSON.parse(fs.readFileSync(path,"utf-8"));
        ctx.response.body = result;
    }else {
            await next();
    }
});

app.use(api.routes());

//设置静态资源
app.use(serve(__dirname + '/static'));

app.listen(3121);
console.log('App start at port 3121');