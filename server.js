const PROJECT_NAME = "site_template"
const express = require("express")


const setVars = require("../setEnvironmentVars.js")
setVars.setEnvironmentVariables()

const app = express()
const PORT = process.env.PORT || 3000
app.set("port", PORT)

app.use(express.static(process.env.ROOT_DIR + "/static"))

app.listen(PORT, function() {
	console.log(
		"\n\n===== listening for requests on port " + PORT + " =====\n\n"
	)
})

