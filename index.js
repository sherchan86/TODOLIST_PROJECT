window.onload = function() {

    let date = new Date();
    document.getElementById("date").innerHTML = date;

    let button1 = document.querySelector("button");
    addlist.appendChild(button1);


    button1.addEventListener('click', function() {
        let l = document.createElement("li");
        let btn2 = document.createElement('button');
        let chkBx = document.querySelector('ul')
        btn2.innerHTML = "x";
        //btn2.classList.add = ("liBtn")
        //btn2.classname =("liBtn")
        btn2.style.color = 'grey'
        btn2.style.backgroundColor = "white";
        btn2.style.borderRadius = '3px'
        btn2.style.float = 'right'
        btn2.style.border = 'none'
        btn2.style.outline = 'none'

        btn2.addEventListener('click', function() {
            l.remove();
        })

        let inputValue = document.getElementById("input").value;
        let t = document.createTextNode(inputValue);
        l.appendChild(t);
        l.appendChild(btn2);
        if (inputValue === '') {
            alert("Please add the list!");
        } else {
            document.getElementById("list").appendChild(l);
        }
        document.getElementById("input").value = "";

    })






























}