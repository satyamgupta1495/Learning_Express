const router = require("express").Router()
const apiKeyMiddleware = require("../middlewares/apiKey")

//? Creating route
router.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname) + "/index.html")
  res.render("index", {
    title: "My Home Page",
  })
})

//* About
router.get("/about", (req, res) => {
  //res.sendFile(path.resolve(__dirname) + "/about.html")
  res.render("about", {
    title: "My About Page",
  })
})

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/video.mp4")
})

router.get("/products", (req, res) => {
  res.render("products", {
    title: "MY Product Page.",
  })
})

router.get("/api/products", apiKeyMiddleware, (req, res) => {
  res.json([
    {
      id: "123",
      name: "chrome",
    },
    {
      id: "124",
      name: "firefox",
    },
  ])
})

module.exports = router
