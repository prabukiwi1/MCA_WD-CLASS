var http=require('http')
var port=5020
var host='127.0.0.1'
var fs=require('fs')
var path=require('path')
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    var url=req.url;
    if(url=='/')
    {
        fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data)=>{
            if(err)
            throw err
            res.end(data)

        })
    }
    else if(url=='/about')
    {
        fs.readFile(path.join(__dirname,'about.html'),'utf-8',(err,data)=>{
            if(err)
            throw err
            res.end(data)

        })
    }
    else if(url=='/contact')
    {
        fs.readFile(path.join(__dirname,'contact.html'),'utf-8',(err,data)=>{
            if(err)
            throw err
            res.end(data)

        })
    }
})
server.listen(port,host,()=>{
    console.log(`Server is listenting at ${port} at host ${host}`)
})