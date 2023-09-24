var c = 300

let a = 300 

if (true){
    let a = 10 
    const b = 20 
    console.log("INNER : ",a)
}

/* console.log(a);
console.log(b);
console.log(c); */


/* why var is not used in javascript ?

“var” has no block scope
They are visible through blocks. As var ignores code blocks, we've got a global variable test */

// global code is different in code environment(node) and the browser 


function one (){
    const username  = " dheeraj"

    function two(){
        const website = " youtube"
        console.log(username);
    }

    // console.log(website);

    two() 
}

one()


if (true){
    const username = "dheraj"
     
    if (username=== "dheeraj")
    {
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website);
}



// *********************intresting*******************


console.log(addone(5))
function addone(num)
{
   
    return num +1
}



function addtwo (num)
{
    return num +2
}

addone (5)