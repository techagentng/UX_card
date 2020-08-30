// let tree;

// function setup(){
//     let tree = new Tree;
//     let n = new Node(6)

//     console.log(tree)
// }
// function Tree(){
//   this.root = null;
// }
// Tree.prototype.addNode(){
//     if(this.root == null){
//         this.root = n;
//     }
// }
// function Node(val){
//     this.left = null;
//     this.right = null;
//     this.value = val;
// }


// let change = document.querySelector('.card')
// let black = document.querySelector('.black')
let gtest = document.querySelectorAll('.gtest')
let card = document.querySelector('.card')
// let tag = document.querySelector('.tagline')
// let tag2 = document.querySelector('.tag')
// let follow = document.querySelector('.gtest')
// let follow1 = document.querySelector('.gtest1')
// let follow2 = document.querySelector('.gtest2')
function clickEvent(){

    for(let i=0; i<gtest.length; i++){
        gtest[i].classList.toggle('white')
    }
    
    card.classList.toggle('wc');
    // black.classList.toggle('white');
    // tag.classList.toggle('white');
    // tag2.classList.toggle('white');
    // follow.classList.toggle('white');
    // follow1.classList.toggle('white');
    // follow2.classList.toggle('white');
}