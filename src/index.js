// write your code here
function getRamen() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => console.log(data))
}   

getRamen();

const ramenImage = document.querySelector('#ramen-detail');

function loadImage() {
    ramenImage.querySelector('.detail-image')

}

const h2 = document.querySelector('.name');
h2.textContent = 'Naruto Ramen';

const h3 = document.querySelector('.restaurant');
h3.textContent = 'Naruto';



const form = document.getElementById('new-ramen');
console.log(form);


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#new-name').addEventListener('submit', e => {
        e.preventDefault()
        e.target.value  //#new-name
        
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#new-restaurant').addEventListener('submit', e => {
        e.preventDefault()
        e.target.value  //#new-restaurant
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new-image').addEventListener('submit', e => {
        e.preventDefault()
        e.target.value //need to add #new-image but can't remember how
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new-rating').addEventListener('submit', e => {
        e.preventDefault()
        e.target.value //#new-rating
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new-comment').addEventListener('submit', e => {
        e.preventDefault()
        e.target.value  //#new-comment
    })
})


//im sure I can write these form functions more efficiently with callback


//const btn = document.querySelector('#new-ramen > input[type=submit]:nth-child(12)');
//btn.addEventListener('click', createReview)

//function createReview(review) 



//Note to self, make sure you sleep the night before a Code Challenge :)

