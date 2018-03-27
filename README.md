

# 项目运行：

1. `npm install`


2. `npm run dev`


3. 访问地址：`localhost:3121`,或者`本机ip:3121`

 

初步认识：

项目运行之后可以访问 项目自带demo，地址如下：

http://localhost:3121/api-app1/getHomeInfo

http://localhost:3121/api-app2/getHomeInfo

http://localhost:3121/api-app3/getHomeInfo



# 添加mock接口

1. 确认mock的工程，每一个json文件夹对应一个项目
2. 以接口名最后一级为文件名保存响应接口的响应json数据到响应的文件夹。


```
在json文件夹下的三个文件夹对应黄金钱包，白金钱包，一手黄金 3个项目，在进行项目开发时将对应的接口数据保存为json格式文件到响应的文件夹即可
```

例如：app2项目中，要调试 http://xxx/user/getUserInfo 这个接口

则在json/app2文件夹添加名为`getUserInfo`如下文件(具体根据实际情况来)

```
{
  "code" : "0000",
  "data" : {
    "title":"我是app1",
    "name":"丁玉松",
    "role":"2"
  },
  "msg" : "成功",
  "serverTime" : 1520820639803
}
```



# 添加项目

此工程中的工程名：app1，app2，app3，api接口名：api-app1，api-app2，api-app3 只是举例，实际使用请根据自己项目具体情况修改。


