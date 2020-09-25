class Routes {
    constructor(app,path){
        
        app.get("/",(req,res)=>{
            console.log("Hey");
            res.sendFile(path+"/static/index.html")
        })

    }
}

module.exports = Routes