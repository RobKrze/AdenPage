const slider = document.getElementById('sliderr');
let lastIndex = 0;
let count = 0;
for(let i=0;i<slider.children.length;i++){
    count += 1;
    let child = slider.children[i];
    console.log(child)
    child.style.display = count > 3 ? 'none' : 'block'
}

function prevSlide(){
    let active = []
    let children = slider.children;
    for(let i=0;i<children.length;i++){
        if(children[i].style.display === 'block')
            active.push(i)
    }
    if(active[0] === 0)
        return;

    children[active[active.length-1]].style.display = 'none'
    children[active[0] - 1].style.display = 'block'
}

function nextSlide(){
    let active = []
    let children = slider.children;
    for(let i=0;i<children.length;i++){
        if(children[i].style.display === 'block')
            active.push(i)
    }
    if(active[2] === children.length - 1)
        return;

    children[active[0]].style.display = 'none'
    children[active[active.length-1] + 1].style.display = 'block'
}