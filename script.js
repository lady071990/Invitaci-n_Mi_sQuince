    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (name && email) {
        confirmationMessage.textContent = `¡Gracias, ${name}! Tu asistencia ha sido confirmada.`;
        confirmationMessage.style.color = '#4CAF50';
    } else {
        confirmationMessage.textContent = 'Por favor, completa todos los campos.';
        confirmationMessage.style.color = '#f44336';
    }
});