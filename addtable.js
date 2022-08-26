function additem(){
    // Variáveis
    var table = window.document.getElementById('tabela')
    var nome = window.document.querySelector('input#nome').value;
    var email = window.document.querySelector('input#email').value;
    var tel = window.document.querySelector('input#tel').value;
    
    var tamanhotb = table.rows.length;
    var row = table.insertRow(tamanhotb);
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
    var cel4 = row.insertCell(3);

    row.id = tamanhotb;  

    cel1.innerHTML = tamanhotb;
    cel2.innerHTML = nome;
    cel3.innerHTML = email;
    cel4.innerHTML = tel;
// Utiliei para resetar os campos de texto
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('tel').value = "";

    return false; // para n dar refresh na page
}