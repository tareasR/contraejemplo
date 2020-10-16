var bLogeo = document.getElementById('signin');
bLogeo.addEventListener('click', function () {
    const parametros = new URLSearchParams();
    parametros.append('Prtemail', document.getElementById('email').value);
    parametros.append('Prtpassword', document.getElementById('password').value);
    // axios.get('http://127.0.0.1:4567/hello/'+parametros, parametros)
    //     .then(function (response) {
    //         console.log(response)
    //         console.log(response.data)
    //         console.log(response.statusText)
    //         document.getElementById('titulo').innerHTML = response.data
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    axios.post('http://127.0.0.1:4567/otro', {
        PrtEmail : document.getElementById('email').value,
        PrtPassword : document.getElementById('password').value
    })
        .then(function (response) {
            console.log(response)
            console.log(response.data)
            console.log(response.statusText)
            document.getElementById('titulo').innerHTML = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
})