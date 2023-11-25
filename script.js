

let string = "";

console.log("Yes  it attadc");
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e) => {
        if(e.target.value == '=') {
            string = eval(string);
        }
        else if(e.target.value == 'AC') {
            string = "";
        }
        else if(e.target.value == 'DE') {
            string = string.toString().slice(0,-1);
        }
        else{
            console.log(e.target)
            string += e.target.value;
            console.log(string);
        }
        document.querySelector('#display').value = string;
    })
})