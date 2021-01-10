var settings=require("../../settings")
var token=require("jsonwebtoken")
exports.upload=(req,res)=>{
        console.log("welcome")
        res.send({hi:"submited"})
        }
exports.userAuthService=function(req,res){
    console.log(req.body)
    console.log("Hi")
    settings.conn.tbl_user.find({email:req.body.emailid,password:req.body.pwd},
 (err,result)=>{
    if(err)
    {
    console.log(err)
    res.send(err)
    }
    else
    {
        if(result.length==0)
        {
            res.send({invalid:true})
        }
        else
        {
        var active=result[0].active
        if(active==0)
        {
            res.send({noactive:true})
        }
        else
        {
            var payload={
                username:result[0].firstname,
                email:result[0].email,
                auth:true
            }
            var tk=token.sign(payload,"#$%^^",{expiresIn:"2h"})
            res.send({auth:tk})
        }
        }
    }
})
}