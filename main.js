const input = document.querySelector('.inp'),
      btn = document.querySelector('.btn2'),
      img = document.querySelector('.img2'),
      h1 = document.querySelector('.h1'),
      p = document.querySelector('.p'),
      p1 = document.querySelector('.p1'),
      imag1 = document.querySelector('.imag1')

btn.addEventListener("click", ()=>{
    const API = `https://api.github.com/users/${input.value}`
    async function get(){
        const res = await fetch(API)
        const  data = await res.json()

        img.src = data.avatar_url
        h1.innerHTML = data.name  
        p.innerHTML = data.login
        p1.innerHTML = data.bio  
    }
    get()
})