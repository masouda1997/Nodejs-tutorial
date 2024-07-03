// const http = require('http')
import http from 'http';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ___________________________________________________________________________________________________________
// if you want to use es module without change the .js to .mjs you can add "type":"module" in package.json file 
// ___________________________________________________________________________________________________________


// import http from http
const PORT = process.env.PORT || 8000
// get current path 
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const server = http.createServer( async (req,res)=> {
   try {
      if(req.method === 'GET'){
         let filePath;
         if(req.url === '/'){
            res.writeHead(200 , {"Content-Type":"application/json"} )
            res.end(JSON.stringify({message:`status is ${res.statusCode}` , name:'node tutorial', author:'the M'}))
         }else if(req.url === '/about'){
            filePath = path.join(__dirname , 'about.html')
            const data = await fs.readFile(filePath)
            res.setHeader('Content-Type' , 'text/html')
            res.end(data)
         }else{
            res.writeHead(404 , {'Content-Type': 'text/plain'})
            res.end('Not Found')
         }      
      }else{
         throw new Error('Method not allowed')
      }
   } catch (error) {
      res.writeHead(500 , {'Content-Type': 'text/plain'})
      res.end('Server is on fire')
   }
   // res.write("hello World")
   // res.setHeader('Content-Type', 'text/html');
   // res.statusCode = 403;
   // res.setHeader('Content-Type', 'text/plain');
   // res.writeHead(200 , {'Content-Type': 'text/html'})
   // res.end('<h1>About Page</h1>')
   // res.end("<h1>hello World</h1>")   
})


server.listen(PORT , ()=>{
   console.log(`server running on port ${PORT}`)
})

