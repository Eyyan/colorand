const http = require ("http"); 

const PORT = 8000;


const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);}


const server = http.createServer((req,res) => {
    var url = req.url;
    var method = req.method;
    if(url === "/api/v1/colors" && method === "GET"){
        res.writeHead(200, {"content-type": "application/json", "Access-Control-Allow-Origin": "*"});
        var colors = {
            red : getRandomInt(0,256),
            green : getRandomInt(0,256),
            blue : getRandomInt(0,256)
        }

    res.end(JSON.stringify({
        status: "success",
        data : {
            colors,
        },
    })
    );
    } else {
        res.end("no colors")
    }
})

server.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})