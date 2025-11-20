// let user: [number,string] = [1, 'Name',1]; 
// let user: [number,string] = [1, 'Name',"true"]; 
let user: [number,string] = [1, 'Name']; 

// On compilation tuples = js arrays
user.push(1) //problem here in typescript no compilation error

let user2: [number,string, boolean, number] = [1, 'Name',true,1]; 
//not reccomended  
