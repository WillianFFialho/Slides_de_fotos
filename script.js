document.addEventListener("DOMContentLoaded", function () {
    const categorias = document.querySelectorAll(".categoria");
    const galeria = document.querySelector(".galeria");

    categorias.forEach(function (categoria) {
        categoria.addEventListener("click", function () {
            // Remove a classe 'ativa' de todas as categorias
            categorias.forEach(function (cat) {
                cat.classList.remove("ativa");
            });

            // Adiciona a classe 'ativa' à categoria clicada
            categoria.classList.add("ativa");

            // Obtém a categoria selecionada
            const categoriaSelecionada = categoria.getAttribute("data-categoria");

            // Mostra apenas os produtos da categoria selecionada e "todos"
            const produtos = document.querySelectorAll(".galeria img");
            produtos.forEach(function (produto) {
                const categoriaProduto = produto.getAttribute("data-categoria");
                if (categoriaSelecionada === "todos" || categoriaSelecionada === categoriaProduto) {
                    produto.style.display = "block";
                } else {
                    produto.style.display = "none";
                }
            });
        });
    });
});
