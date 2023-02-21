const express = require("express")
const multer = require("multer")
const app = express()

// controllers
const { uploadFileController } = require("./controller")

// Set up Multer middleware to handle file uploads
// by default, multer will store files in memory
const upload = multer()

// Handle the file upload
app.post("/upload", upload.single("file"), uploadFileController)

// Start the server
app.listen(5000, () => {
	console.log("Server listening on port 5000")
})
