let string = "";
let buttons = document.querySelectorAll('.btn');
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (d) => {
        if (d.target.innerHTML == '<i class="fa-solid fa-delete-left"></i>') {
            let length = string.length;
            string = string.substring(0, length - 1);
            document.getElementById('input-box').value = string;
        }
        else if (d.target.innerHTML == 'C') {
            string = "";
            document.getElementById('input-box').value = string;
        }
        else if (d.target.innerHTML == '=') {
            string = eval(string);
            if (string == undefined)
                string = '';
            document.getElementById('input-box').value = string;
        }
        else {
            string = string + d.target.innerHTML;
            console.log(string);
            document.getElementById('input-box').value = string;
        }
    })
})