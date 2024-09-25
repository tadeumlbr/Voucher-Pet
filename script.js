document.getElementById("animalForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta as informações do formulário
    const resultado = {
        voucher: document.getElementById("voucher").value,
        nome: document.getElementById("nome").value,
        especie: document.getElementById("especie").value,
        raca: document.getElementById("raca").value,
        sexo: document.getElementById("sexo").value,
        idade: document.getElementById("idade").value,
        tutor: document.getElementById("tutor").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        nis: document.getElementById("nis").value,
        controle_imunologico: {
            resposta: document.querySelector('input[name="imunologico"]:checked').value,
            data: document.getElementById("data_imunologico").value
        },
        controle_endoparasitas: {
            resposta: document.querySelector('input[name="endoparasitas"]:checked').value,
            data: document.getElementById("data_endoparasitas").value
        },
        controle_ectoparasitas: {
            resposta: document.querySelector('input[name="ectoparasitas"]:checked').value,
            data: document.getElementById("data_ectoparasitas").value
        },
        alimentacao: document.getElementById("alimentacao").value,
        higiene: document.getElementById("higiene").value,
        regime_vida: document.getElementById("regime_vida").value,
        sintomatologia: document.getElementById("sintomatologia").value,
    };

    // Exibe as informações no elemento resultado
    document.getElementById("resultado").textContent = JSON.stringify(resultado, null, 2);
});

document.getElementById("gerarPdf").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const resultado = document.getElementById("resultado").textContent;
    const lines = resultado.split('\n');

    pdf.text("Cadastro de Animais", 10, 10);
    lines.forEach((line, index) => {
        pdf.text(line, 10, 20 + (index * 10));
    });

    pdf.save("cadastro_animais.pdf");
});