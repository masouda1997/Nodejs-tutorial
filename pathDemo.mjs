import  url  from 'url';
import path from 'path'

const filePath = './dir1/dir2/test.txt' //this is just a fake path to test the path module 

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath))

// extname()
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

// ________________________________________________________________________________
// in commonjs we have access to __dirname . __filename but in the es modules we have to define them like below
// ________________________________________________________________________________

const __filename = url.fileURLToPath(import.meta.url) // import.meta.url ===> file://...
const __dirname = path.dirname(__filename)

console.log( "🧶",__dirname,'🧶' , __filename);

// join() create a file path based on argument passed in because in different os we have different delimeter
// mac ===> users/masoud
// window ===> users\masoud
// join takes args and automatically make them works

const filePath2 = path.join(__dirname , 'dir1', 'dir2' , 'test.txt')
console.log('🏮',filePath2);

// resolved() ==> bring the absolute path
const filePath3 = path.resolve(__dirname , 'dir1', 'dir2' , 'test.txt')
console.log('🏮',filePath3);

