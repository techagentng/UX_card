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


let change = document.querySelector('.card')
let black = document.querySelector('.black')
let tag = document.querySelector('.tagline')
let tag2 = document.querySelector('.tag')
let follow = document.getElementsById('test')
function clickEvent(){
    change.classList.toggle('addBg');
    black.classList.toggle('white');
    tag.classList.toggle('white');
    tag2.classList.toggle('white');
    follow.classList.add('white');
}