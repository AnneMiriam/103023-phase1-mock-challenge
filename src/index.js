const cakeUrl = 'http://localhost:3000/cakes';
const cakeName = document.getElementById('cake-name');
const cakeImg = document.getElementById('cake-image');
const cakeDesc = document.getElementById('cake-description');
const cakeReviews = document.getElementById('review-list');
let cakeArr = []

fetch(cakeUrl)
.then(resp => resp.json())
.then(cakesArr => {
    cakeArr = cakesArr;
    renderCake(cakeArr[0]);
    renderCakeList(cakeArr)
;})
// render single cake to the <main> Challenge 1
function renderCake(cake) {
    cakeReviews.innerHTML = '';
    cakeName.textContent = cake.name;
    cakeImg.src = cake.image_url;
    cakeImg.alt = cake.name;
    cakeDesc.textContent = cake.description;
    handleCakeReviews(cake.reviews);
}
//* separate each review into it's own li, for easier reading
function handleCakeReviews(reviews){
    reviews.forEach(review => {
        const reviewLi = document.createElement('li')
        reviewLi.textContent = review;
        cakeReviews.append(reviewLi)
    })
}

const cakeList = document.getElementById('cake-list');
//* render all the cake names in the <nav> Challenge 2
function renderCakeList(cakes){
    cakeList.innerHTML = '';
    cakes.forEach(cake => {
        const cakeLi = document.createElement('li')
        cakeLi.textContent = cake.name;
        cakeList.append(cakeLi);
    })
}

const reviewForm = document.getElementById('review-form')
//* add an eventListener to handle new reviews submitted to the form
//* Challenge 3
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target.review.value);
    //* need to add new review to the rest of review li's
    const newReview = e.target.review.value;
    const newLi = document.createElement('li')
    newLi.textContent = newReview;
    cakeReviews.append(newLi)
    e.target.reset();
})