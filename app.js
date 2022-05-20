var btnSuccess = document.querySelector('.control .success')
var btnWarning = document.querySelector('.control .warning')
var btnError = document.querySelector('.control .error')

btnSuccess.addEventListener('click', function(){
    CreateToast('success', 10000)
})
btnWarning.addEventListener('click', function(){
    CreateToast('warning')
})
btnError.addEventListener('click', function(){
    CreateToast('error')
})


function CreateToast(status, timeout){
    let templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Success message</span>`
    switch (status) {
        case 'success':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Success message</span>`
            break;
        case 'error':
            templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Error message</span>`
            break;
        case 'warning':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Warning message</span>`
            break;    
    }



            
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML =`<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Success message</span>
            <span class="countdown"></span>`
     

    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)
    timeout = timeout || 4000
    setTimeout(function(){
        toast.style.animation = 'slide_hide 2s ease forwards'
    }, 4000)
    setTimeout(function(){
        toast.remove()
    }, timeout + 2000)

}