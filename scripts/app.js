let health = 100;

window.addEventListener('load', () => {
    title_btn = document.getElementsByClassName('Title-Btn')[0];
    green_bar = document.getElementsByClassName('Green-Bar')[0];  

    title_btn.addEventListener('click', () => {
        counter = 0; 

        myInterval = setInterval(()=>{
            if (counter == 19){
                clearInterval(myInterval)
            }
            health = health - 1; 
            green_bar.style.width = health+"%"

            counter++; 

            console.log(health); 
        }, 50)


        if (health <= 0){
            window.location.href = "page_1.html"
        }
    })
})