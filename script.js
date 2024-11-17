
//selectors
let habits = document.querySelectorAll('.habbitbtn')
let themebtn = document.querySelector(".theme")

//storage obj and the saveTheme Method..
const Storage = {
  saveTheme(value) {
    localStorage.setItem('Habbitapp.theme', `${value}`)
  },
  checkTheme(){
    return localStorage.getItem('Habbitapp.theme')
  }
  
}

//Functions
function themeaction(){
  themebtn.classList.toggle("dark")
  const root = document.querySelector(":root");
  root.classList.toggle("dark")
 
  themebtn.classList.contains('dark') ? Storage.saveTheme('dark') : Storage.saveTheme('')
}


//Events
themebtn.addEventListener("click",function(){
  themeaction()
})

habits.forEach((habit) => {
    habit.addEventListener("click",function(){
      habit.classList.toggle("completed")
    })
})

window.addEventListener('DOMContentLoaded',()=>{
  const theme = Storage.checkTheme();
  if(theme === 'dark'){
    themeaction();
  }
 
})


