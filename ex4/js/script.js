for (let i = 1; i <= 6; i++) {
    let img = document.createElement('img');
    img.src = `img/pic_${i}.jpg`;  
    img.alt = `pic_${i}`;  
    gallery.appendChild(img);  
}
