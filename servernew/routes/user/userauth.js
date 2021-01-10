express=require("express")
router=express.Router();
var user_auth_controller=require("../../controllers/user_controllers/userAuth")
router.get("/userLogin",user_auth_controller.userAuthService)
router.get("/uploadMet",user_auth_controller.upload)
    
module.exports=router;
