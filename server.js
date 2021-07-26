//? returns an object which consist of all the function which we can use.
const express = require("express")

const path = require("path")

//? This [app] contains all the method.
const app = express()

//? For assigning custom port [if not available]
const PORT = process.env.PORT || 3000

const mainRouter = require("./routes/index.js")

//? Static FOLDER [routing]
//app.use(express.static("public"))

//? Template Engine
app.set("view engine", "ejs")

//? Using main Router from index.js
app.use(mainRouter)

//app.set("views" , path.resolve(__dirname) + "/templates");
//console.log(app.get("views"))

app.use((req, res, next) => {
  return res.json({ message: "Page not FOUND!" })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
