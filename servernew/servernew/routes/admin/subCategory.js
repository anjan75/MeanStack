express=require("express")
router=express.Router()
var category_controller=
require('../../controllers/admin_controllers/subCategoryController');
router.post('/insSubCategory',category_controller.insertSubCategory);
router.get('/getSubCategory',category_controller.SubCategoryList);
router.post('/subCategoryListByCatId',category_controller.subCategoryListByCatId);
module.exports=router;