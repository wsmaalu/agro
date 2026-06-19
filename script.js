document.addEventListener("DOMContentLoaded", function () {
    
    // --- MENU RESPONSIVO (HAMBÚRGUER) ---
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Fecha o menu ao clicar em qualquer link (útil para mobile)
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });


    // --- SIMULADOR DE PRODUTIVIDADE ---
    const btnCalcular = document.getElementById("btn-calcular");
    const inputHectares = document.getElementById("hectares");
    const resultadoBox = document.getElementById("resultado");
    const qtdSacas = document.getElementById("qtd-sacas");

    btnCalcular.addEventListener("click", function () {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples
        if (isNaN(hectares) || hectares <= 0) {
            alert("Por favor, insira um número válido de hectares.");
            resultadoBox.classList.add("hidden");
            return;
        }

        // Regra de negócio: Média de 80 sacas por hectare
        const prodTotal = hectares * 80;

        // Atualiza a tela e remove a classe 'hidden' para exibir
        qtdSacas.textContent = prodTotal.toLocaleString("pt-BR");
        resultadoBox.classList.remove("hidden");
    });
});
