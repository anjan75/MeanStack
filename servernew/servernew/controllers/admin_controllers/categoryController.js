
var settings=require("../../settings")
exports.insertCategoryPost=function(req,res){
    console.log(req.body.category_name)
    settings.conn.tbl_category.insert({category_name:req.body.category_name,active:0},function(err,data){
        if (err)
        console.log(err);
        else
        console.log(data)
        res.send({result:"data inserted"})

        })
    }

exports.categoryList=function(req,res){
    settings.conn.tbl_category.find("category_name",function(err,data){
        if (err)
        console.log(err);
        else
        res.send(data) 
        })
}