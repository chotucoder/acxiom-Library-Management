function login() {
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    
    if (userId === "admin" && password === "admin") {
        window.location.href = "Admin.html";
    } else if (userId === "user" && password === "user") {
        window.location.href = "user.html";
    } else {
        alert("Invalid credentials");
    }
}
