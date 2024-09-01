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


mudarPagina('contato.html')

setTimeout( () => {
    alert("Mensagem enviada com sucesso!")
}, 1000)
