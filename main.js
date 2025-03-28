import { hamburger } from './hamburger'
import { submitReview } from "./script.js";  
import './style.css'
import { fetchReviews } from "./script.js";
import { gasap } from './gasap.js';
import { sddcroll } from './scroll.js';



sddcroll()
hamburger() 
gasap()

document.addEventListener("DOMContentLoaded", fetchReviews);
document.getElementById("submitBtn").addEventListener("click", submitReview);