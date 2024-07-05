const fs = require("fs");
const fs2  = require('fs').promises



// read file - callback

fs.readFile('./test.txt' , "utf8" , (err ,data)=>{
   if(err) throw err
   console.log('callback file ===> ',data);
})

//read file sync
//as this method is synchronous its not good for big files
const data = fs.readFileSync('./test.txt' , 'utf8')
console.log('🔴sync file ===> ',data);

// read file async 
const readFile2 = async ()=>{
   try {
      const data = await fs2.readFile('./test.txt' , 'utf8')
      console.log("async file ===>",data);
   } catch (error) {
      console.log(error);
   }
}
const writeFileF = async ()=>{
   try {
      await fs2.writeFile('./test.txt' , 'this is written')
      console.log("async file ===>",'new text written to...');
   } catch (error) {
      console.log(error);
   }
}
const appendFileF = async ()=>{
   try {
      await fs2.appendFile('./test.txt' , '\n this is append')
      console.log("async file ===>","file appended ");
   } catch (error) {
      console.log(error);
   }
}

readFile2()
writeFileF()
appendFileF()
readFile2()