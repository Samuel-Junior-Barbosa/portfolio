/* Função responsavel por, receber uma url e acessar a pagina, com um delay de 1 segundo*/ 
function mudarPagina(url) { 
    setTimeout(() => { 
        fetch(url).then(response => response.text()) 
        .then(html => { 
            window.location.href = url 
        }) 
        .catch(error => { 
            console.error('Error: ', error) 
        })  
    }, 1000) 
} 

/* Nessa parte, depois que todo o conteudo for carregado, a pagina vai carregar o javascript 
e ele irá chamar a função mudar de pagina, vai ter um delay de 1 segundo, vai aparecer um alerta na tela e depois irá retornar para 
a pagina de contato  
*/ 

mudarPagina('contato.html') 
        
setTimeout( () => { 
    alert("Mensagem enviada com sucesso!") 
}, 1000) 
