var settings=require("../../settings")
exports.insertSubSubCategory=function(req,res){
    console.log(req.body)
    var obj={
        cat_id:oid(req.body.cat_id),
        subcat_id:oid(req.body.subcat_id),
        sub_sub_category_name:req.body.sub_sub_category_name
       };

    settings.conn.tbl_subsubcat.insert(obj,function(err,data){
        if (err)
        console.log(err);
        else
        console.log(data)
        res.send("data inserted")

        })
    }

// exports.subSubCategoryList=function(req,res){
//     settings.conn.tbl_subsubcat.find(function(err,data){
//         if (err)
//         console.log(err);
//         else
//         res.send(data) 
//         })
// }
exports.subSubCategoryList=function(req,res){
    settings.conn.tbl_subsubcat.aggregate([{
        $lookup:{
            from:"tbl_subcategory",
            localField:"subcat_id",
            foreignField:"_id",
            as:"data_subcat"
        }
},
{$unwind:"$data_subcat"}
],function(err,data){
        if (err)
        console.log(err);
        else    
        res.send(data) 
    
})
}

exports.subSubCategoryListBySubCatId=function(req,res){
    console.log("hi harish")
    console.log(req.body.subcat_id)
    settings.conn.tbl_subsubcat.find({subcat_id:oid(req.body.subcat_id)},function(err,data){
        if (err)
        console.log(err);
        else
        res.send(data) 
        })
}