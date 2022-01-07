
const todo = [];
let user = null;

while(user !== "quit" && user !== "q"){
    user = prompt("what would you like to do");
    if(user === "new"){
        let user = (prompt("enter a new todo"));
        todo.push(user);
        console.log(`added ${user} to the list`);
        
    }
    else if( user === "list"){
        console.log("********************");
        for(let i = 0; i< todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("********************"); 
    }
    else if (user === "delete"){
        const remove = parseInt(prompt("enter the index of todo to delete"));
        if(!Number.isNaN(remove)){
            const deleted = todo.splice(remove,1);
            console.log(`${deleted[0]} was removed`);
        }
        else{
            console.log("unknown index");
        }
    }

}
console.log("you quit");