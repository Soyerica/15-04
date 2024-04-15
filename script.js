document.getElementById("contactForm").addEventListener("submit", function(event){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Validación del correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        event.preventDefault();
        return;
    }
    
    // Validación de la contraseña (puede personalizarse según los criterios necesarios)
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        event.preventDefault();
        return;
    }
});