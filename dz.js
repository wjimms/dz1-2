const block =  document.querySelector('.two');
const blockMove = document.querySelector('.one');

let position = 0;

const blockTwoAction =  ()=>{
    position+= 10;
    block.style.left = `${position}px`;
}

blockMove.addEventListener("click", () => {
    blockTwoAction();
})