// MODELO — este arquivo é seguro para o Git público.
//
// Como usar:
// 1. Copie este arquivo e renomeie a cópia para "config.local.js"
//    (mesma pasta do Monitor_Lancamentos_v18.html).
// 2. Preencha os valores reais abaixo na cópia.
// 3. "config.local.js" já está no .gitignore — ele nunca deve ser commitado.
// 4. Repita esses passos em qualquer outro computador onde for abrir o painel.
//
window.APP_CONFIG = {
    sharepoint: {
        siteUrl: "https://SEU-TENANT.sharepoint.com",
        listName: "NOME_DA_LISTA",
        ativo: true
    },
    googleSheets: {
        webAppUrl: "https://script.google.com/macros/s/SEU_ID_AQUI/exec",
        token: "SEU_TOKEN_SECRETO_AQUI",
        ativo: true
    }
};
