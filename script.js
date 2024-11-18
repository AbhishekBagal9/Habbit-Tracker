
//selectors
const habits = document.querySelectorAll('.habbitbtn')
const themebtn = document.querySelector(".theme")
const modalContiner = document.querySelector(".modalcontainer")
const habbitbtn = document.querySelector(".newhabbitadd")
const newHabitTitle = document.querySelector('#title');
const icons = document.querySelectorAll('.icon');
const addBtn = document.querySelector('#add');
const cancelBtn = document.querySelector('#cancel');

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

habbitbtn.addEventListener("click",function(){
  modalContiner.classList.add('active');
  modalContiner.setAttribute("arial-hidden",false)
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


