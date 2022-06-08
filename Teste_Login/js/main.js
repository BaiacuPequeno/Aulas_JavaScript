let cont = 0;
function media() {
    let u = window.prompt("Usuário: ");
    let s = window.prompt("Senha: ");

    while (u != 'Jaum' || s != 1234 && cont <=3) {
        if (u != 'Jaum') {
            u = window.prompt("Usuário incorreto.\nDigite novamente: ");
        };

        if (s != 1234) {
            s = window.prompt("Senha incorreta.\nDigite novamente");
        };

        if (u == 'Jaum' && s == 1234) {
            break;
        };
        cont = cont + 1;
        if (cont == 3) {
            window.alert("Tentativas encerradas pnc KKKKKKKK");
            window.location.href = 'https://pt.wikipedia.org/wiki/Calv%C3%ADcie'
        };
    };
    window.alert('Senha e usuário corretos!');
    window.location.href = 'https://www.youtube.com/watch?v=ykG3phLqP7o'
};