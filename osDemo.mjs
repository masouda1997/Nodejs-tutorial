import os from 'os'

// The os module in Node.js provides a number of operating system-related utility methods and properties. It allows you to interact with and gather information about the underlying operating system on which a Node.js application is running.

// The os module is essential for gathering information about the system's operating environment and can be useful for tasks such as optimizing application performance based on the system's resources, tailoring application behavior to specific platforms, or simply providing system-related diagnostics.

//useInfo()
console.log(os.userInfo());


// totalmem()
console.log(os.totalmem());

// freemem()
console.log(os.freemem());

// cpus
console.log(os.cpus()[0]); // give cpu's each core info as a json



