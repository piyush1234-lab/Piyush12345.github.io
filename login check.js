if (sessionStorage.getItem ("access_granted") !== "true")
{
alert("You must login first to access this page !!");
    window.location.replace("cube0.html");
}