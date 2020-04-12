function janela_contato() {
    var nome = jQuery("#nome").val();
    var email = jQuery("#email").val();
    var telefone = jQuery("#telefone").val();
    var prioridade = jQuery("#prioridade").val();
    var mensagem = jQuery("#mensagem").val();

    var janela = window.open("", "wildebeast", "width=600,height=600,scrollbars=1,resizable=1");

    var html = "<html><head><title>Janela Contato</title></head><body><p><strong>Nome:</strong><br> " + nome + "</p>";
    html += "<p><strong>E-mail:</strong><br> " + email + "</p>";
    html += "<p><strong>Telefone:</strong><br> " + telefone + "</p>";
    html += "<p><strong>Prioridade:</strong><br> " + prioridade + "</p>";
    html += "<p><strong>Mensagem:</strong><br> " + mensagem + "</p>";
    html += "</body ></html> ";

    janela.document.write(html);
    janela.document.close();

}
