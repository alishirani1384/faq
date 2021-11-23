let collapse=document.querySelectorAll('.card-item')

collapse.forEach(collapse => {
    collapse.addEventListener('click',function(){this.classList.toggle('active')})  
});
