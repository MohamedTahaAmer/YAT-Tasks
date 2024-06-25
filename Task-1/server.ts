import http from "http"
import fs from "fs"
import path from "path"

const server = http.createServer((req, res) => {
	console.log("\x1b[1;32m%s\x1b[1;36m", req.url)
	let url = "index.html"
	req.url && (url = req.url === "/" ? "index.html" : req.url)
	const filePath = path.join(__dirname, url)

	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.writeHead(500, { "Content-Type": "text/plain" })
			res.end("Internal Server Error")
		} else {
			const ext = path.extname(filePath)
			let contentType = "text/html"
			if (ext === ".png") {
				contentType = "image/png"
			} else if (ext === ".js") {
				contentType = "text/javascript"
			} else if (ext === ".css") {
				contentType = "text/css"
			}

			res.writeHead(200, { "Content-Type": contentType })
			res.end(data)
		}
	})
})

let PORT = 3000
let HOST = "192.168.1.103"
server.listen(PORT, HOST, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`)
})
