function myFunction(e) {
    let x = document.getElementById("mydiv");
    console.log("display:", x.style.display);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}






