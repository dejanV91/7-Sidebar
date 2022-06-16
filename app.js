const xButton=document.querySelector(".close-btn");
const menuBtn=document.querySelector(".sidebar-toggle");
const sideBarSection=document.querySelector(".sidebar");

menuBtn.addEventListener('click', function(){
    sideBarSection.classList.add("show-sidebar");
});

xButton.addEventListener('click', function(){
    sideBarSection.classList.remove("show-sidebar");
});