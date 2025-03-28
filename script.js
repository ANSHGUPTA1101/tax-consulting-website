import { db, ref, push, onValue } from "./firebase";

const fetchReviews = () => {
    const reviewsRef= ref(db,"review")
    onValue(reviewsRef,(snapshot)=>{
       const reviewsContainer = document.getElementById("reviewsContainer")
       reviewsContainer.innerHTML = ""; 
       if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
            const reviewData = childSnapshot.val();
            const reviewCard = `
                <div class="review-card">
                    <p><strong>${reviewData.name}</strong> (${reviewData.date})</p>
                    <p>⭐ ${reviewData.rating}/5</p>
                    <p>${reviewData.review}</p>
                </div>
            `;
            reviewsContainer.innerHTML += reviewCard;
        });
    } 
});
};


export { fetchReviews };

const submitReview = () => {
    let name = document.getElementById("userName").value
    let review = document.getElementById("userReview").value
    let rating = document.getElementById("userRating").value
    let date = new Date().toLocaleDateString()

    if(!name || !review || !rating){
        alert("please enter all details")
        return
    }

    push(ref(db, "review"),{
        name, 
        review,
        rating,
        date
    })

    document.getElementById("userName").value = "";
    document.getElementById("userReview").value = "";
    document.getElementById("userRating").value = "";

}

export { submitReview };

document.getElementById("submitBtn").addEventListener("click", submitReview);