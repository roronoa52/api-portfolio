const express = require("express")
const router = express()
const { create, index, find, update, destroy } = require("./controller")

router.post ("/projects", create)
router.delete ("/projects/:id", destroy)
router.get ("/projects", index)
router.get ("/projects/:id", find)

module.exports = router
