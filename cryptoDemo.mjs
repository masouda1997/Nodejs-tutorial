import crypto from 'crypto'

// cp.createHash()
const hash = crypto.createHash('sha512').update('M')
console.log(hash);
console.log(hash.digest('hex'));


// randomBytes() ==> we can use this for create id 
// async version
// crypto.randomBytes(16,(err, buff)=>{
//    if (err) throw new err
//    console.log(buff.toString('hex'));
// })

// sync version
// const asbuffer = crypto.randomBytes(4)
// console.log(asbuffer.toString('hex'));


// createCipheriv & createDecipheriv
let algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm , key , iv)
let encrypted = cipher.update('this text contain secret word' , 'utf8' , 'hex')
encrypted += cipher.final('hex') // compelete the process - padding ==> The final method finalizes the encryption or decryption process. It ensures that any remaining data is processed and flushed from the internal buffers. Without calling final, some data may not be processed, leading to incomplete or incorrect results.
// For block cipher algorithms, final adds the necessary padding during encryption and removes it during decryption. Without this step, the data might not align correctly with the block size requirements, resulting in errors or corrupted data.
console.log('🔴⭕🔴⭕🔴 ==>' , encrypted);

const decipher = crypto.createDecipheriv(algorithm,key,iv)
let decrypted = decipher.update(encrypted , 'hex' , 'utf8')
decrypted += decipher.final('utf8')
console.log('🟢🧶🟢🧶🟢 ==>',decrypted);
