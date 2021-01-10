var settings=require("../../settings")

exports.uploadController=function(req,res){
    var filenames=[]
    console.log("upcon")
    if(req.files.file1.length>1)
    {
        for(var i=0;i<req.files.file1.length;i++)
        {
            fileCont=req.files.file1[i]
            //console.log(fileCont)
            var name=req.files.file1[i].name
            var dt=new Date()
            name=dt.getTime()+"_"+name
             fileCont.mv(""+name)
            // fileCont.mv("../project/mean/mean/src/assets/uploads/"+name)
           fileCont.mv("../ekart/src/assets/uploads"+name)
          // /Users/anjan/Desktop/Angularpro/swamySir/ekart/src/assets/uploads
            filenames.push(name)
        }
        res.redirect("http://localhost:4200/ad/product;names="+filenames)
    }
    else
    {
    fileCont=req.files.file1
    console.log("hi file")
    console.log(fileCont)
    var name=req.files.file1["name"]
    var dt=new Date()
    name=dt.getTime()+"_"+name
    //fileCont.mv("../project/mean/mean/src/assets/uploads/"+name)

  fileCont.mv("../ekart/src/assets/uploads"+name)
    filenames.push(name)
    res.redirect("http://localhost:4200/ad/product;names="+filenames)
    }
    // settings.conn.tbl_products.insert(req.body,function(err,data){
    //     if (err)
    //     console.log(err);
    //     else
    //     console.log(data)
    //     res.send("data inserted")
    //     })
    }
