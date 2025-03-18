// Función para abrir el modal de la galería
function openModal(imgElement) {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<span class="close" onclick="closeModal()">&times;</span>
                       <img src="${imgElement.src}" alt="Imagen ampliada">`;
    document.body.appendChild(modal);
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
}

// Función para validar el formulario de contacto
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name == "" || email == "" || message == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}

// Función para validar el correo electrónico
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Acordeón de la cartelera virtual
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
