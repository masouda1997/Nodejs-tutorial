import url from 'url'

const urlString = 'https://www.google.com/sarch?q=hello+world'

const urlObj = new URL(urlString)

console.log(urlObj);


// format() ==> bring back the obj to its  string form 
console.log(url.format(urlObj));

// import.meta.url ==> the file url
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

// get url params
console.log(urlObj.search); //give the string form
const params = new URLSearchParams(urlObj.search) // give in a obj format
console.log(params);
console.log(params.get('q'));
params.append('limit', '3')
console.log(params);
params.delete('limit')
console.log(params);




