let employee:{
    readonly id: number, //adding reaonly will stop assignment to a fixed unique variable
    name: string, //name? for setting optional not reccomended everytime and unnecessarily
    retire: (date: Date) =>void 
} = {id:1,
    name:'',
    retire:(date: Date)=>{
    console.log(date);
    
}}
employee.name = 'Name'
// employee.id = 0 //error Cannot assign to 'id' because it is a read-only property