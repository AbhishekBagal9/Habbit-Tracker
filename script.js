let habits = document.querySelectorAll('.habbitbtn')


habits.forEach((habit) => {
    habit.addEventListener("click",function(){
      habit.classList.toggle("completed")
    })
})

