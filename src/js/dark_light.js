let checkbox = document.querySelector('input[name=theme]');


checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }    
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

if (localStorage.getItem('data-theme') === 'dark') {
    checkbox.checked = !checkbox.checked;
}
document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'));
