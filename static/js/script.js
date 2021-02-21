
console.log('Its working');

let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('item clicked', mode);
        setTheme(mode); 
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = url1
     }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = url2
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = url3
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = url4
    }

    localStorage.setItem('theme', mode);   //set theme to mode
}