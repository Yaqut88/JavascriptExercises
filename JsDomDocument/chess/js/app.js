let templateContainer = document.querySelector('.template');
let templateContainerWidth = templateContainer.clientWidth;

for (let i = 1; i <= 8; i++) {
  let box = document.createElement('div');
  box.innerHTML = i;
  box.setAttribute("class", "box d-flex justify-content-center align-items-center");
  box.setAttribute("style", `width: ${templateContainerWidth / 8} px; height: ${templateContainerWidth / 8} px;`)
  templateContainer.appendChild(box);
if(i%2 ==0){
  box.classList.add('bg-dark');
  box.setAttribute('style','color: white', `width: ${templateContainerWidth /8 }px; height: ${templateContainerWidth /8 }px; color: white; `);
}
else{
  box.classList.add('bg-light');
  box.setAttribute('style','color: black', `width: ${templateContainerWidth/8}px; height: ${templateContainerWidth/8}px; color:black; `)
}
}


