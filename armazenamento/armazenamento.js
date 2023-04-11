document.getElementById('sessionBtn').addEventListener('click' , ()=>{
    const input = document.getElementById('session')
    sessionStorage.setItem('info' , input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click' , ()=>{
    const info = sessionStorage.getItem('info')
    alert(info)
})

document.getElementById('localBtn').addEventListener('click' , ()=>{
    const input = document.getElementById('local')
    localStorage.setItem('text' , input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click' , ()=>{
    const localInfo = localStorage.getItem('text')
    alert(localInfo)
})

document.getElementById('cookieBtn').addEventListener('click' , ()=>{
    const input = document.getElementById('cookie')
    const cookie = 'info=' +input.value +';'
    const expiration = 'expires=' +new Date(2023 ,4 ,15 ) + ';'
    const path = 'path=/;'

    document.cookie = cookie + expiration +  path
    input.value = ''
})

document.getElementById('cookie2Btn').addEventListener('click' , ()=>{
    const input = document.getElementById('cookie2')
    const cookie = 'text=' +input.value +';'
    const expiration = 'expires=' +new Date(2023 ,4 ,15 ) + ';'
    const path = 'path=/;'

    document.cookie = cookie + expiration +  path
    input.value = ''
})