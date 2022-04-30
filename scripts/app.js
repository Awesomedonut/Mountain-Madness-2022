let health = 100;

window.addEventListener('load', () => {
    title_btn = document.getElementsByClassName('Title-Btn')[0]; 

    title_btn.addEventListener('click', () => {
        health = health - 20; 
        console.log(health); 

        if (health <= 0){
            window.location.href = "page_1.html"
        }
    })
})