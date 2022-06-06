function restricaoAcesso(){
    var senha = "Herbert"
    if (prompt("Digite a senha") == senha){
        alert("Senha Correta!")
    }
    else{
        alert("Senha Incorreta!")
        return restricaoAcesso()
    }
}

