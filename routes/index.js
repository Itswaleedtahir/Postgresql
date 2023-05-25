const { Router } = require("express");
const router = Router();
const getApi = require("../controllers/Get")

router.get('/get',getApi.Get)
router.get('/get/:id',getApi.GetById)
router.post('/adduser',getApi.insertUser)
router.put('/updateuser/:id',getApi.UpdateUser)
router.delete('/delete/:id',getApi.DeleteUser)


module.exports = router