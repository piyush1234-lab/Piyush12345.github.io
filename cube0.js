function check() {
    let in2 = document.getElementById("in2");
    let span2 = document.getElementById("spn");
    let name = localStorage.getItem("n"); // get stored name

    let validNames = [
        "Sneha Singh",
        "Sneha",
        "Sneha singh",
        "sneha singh",
        "sneha"
    ];

    // show span if input is valid Sneha name OR the stored name
    if (validNames.includes(in2.value))
    {
        span2.style.visibility = "visible";
        span2.style.animation = "fadein 1s forwards";
    } 
    else if (in2.value === name)
    {
        span2.style.visibility = "visible";
        span2.style.animation = "fadein 1s forwards";
    }
    else
     {
        span2.style.visibility = "hidden";
    }
}
    function graph()
    {
    let d =
    document.getElementById("d");
        d.style.visibility="visible";
        d.style.animation="fadein 2s forwards";
        const container = document.getElementById('sprinkle-container');
    for (let i = 0; i < 30; i++) {
        let p = document.createElement('div');
        p.classList.add('particle');
        p.innerText="❤";        
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = 2 + Math.random() * 3 + "s";
        p.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(p);
    }
    }
    function newName(){
         let name = localStorage.getItem("n"); // Get stored name
         let heading= document.getElementById("in2");
  heading.value = heading.value.replace("user", name);
  }
  function login()
  {
  let name = localStorage.getItem("n"); // Get stored name
  let in2 = document.getElementById("in2");
let pwd = document.getElementById("pwd");
// List of allowed names (you can add/remove as needed)
    let allowedNames = [
        "Sneha", 
        "Sneha Singh", 
        "sneha", 
        "sneha singh", 
        "Sneha singh",
        "Sneha singh"
    ];

      if (allowedNames.includes(in2.value) && pwd.value=="Sneh@2004")
      { 
          document.location="cube1.html"
      }
     else if (in2.value=== name && pwd.value==="Editz@1234")
     {
       document.location= "cube2.html"
     }
     else if (in2.value=== name && pwd.value==="All@1234")
     {
       document.location= "cube3.html"
     }
     else
     {
         alert("wrong name or password!\n After correcting, if page still not opening then this is not for you");
  }
  function deselect() {
    let btn1 = document.getElementById("btn1");
    btn1.style.boxShadow = "none";
  }
  function select(){
  let btn1 = document.getElementById("btn1");
btn1.style.boxShadow = "0px 0px 20px 10px rgba(255, 255, 255, 0.7)";}
