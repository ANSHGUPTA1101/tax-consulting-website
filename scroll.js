export const sddcroll = () => {
   const home = document.querySelector("#h")
   const service = document.querySelector("#s")
   const about = document.querySelector("#a")
   const contact = document.querySelector("#c")
   const conult = document.querySelector(".CTA")

   const chome = document.querySelector("#hh")
   const cservice = document.querySelector("#ss")
   const cabout = document.querySelector("#aa")
   const ccontact = document.querySelector("#cc")
   

   const hs= document.querySelector(".hero-section")
   const ss = document.querySelector(".services-section")
   const as = document.querySelector(".about-section")
   const cs = document.querySelector(".contact-sectiom")

   conult.addEventListener("click", () => {
      cs.scrollIntoView({behavior: "smooth"})
   })

   home.addEventListener("click", () => {
    hs.scrollIntoView({ behavior: "smooth" });
 });

 service.addEventListener("click", () => {
    ss.scrollIntoView({ behavior: "smooth" });
 });

 about.addEventListener("click", () => {
    as.scrollIntoView({ behavior: "smooth" });
 });

 contact.addEventListener("click", () => {
    cs.scrollIntoView({ behavior: "smooth" });
 });

 chome.addEventListener("click", () => {
    hs.scrollIntoView({ behavior: "smooth" });
 });

 cservice.addEventListener("click", () => {
    ss.scrollIntoView({ behavior: "smooth" });
 });

 cabout.addEventListener("click", () => {
    as.scrollIntoView({ behavior: "smooth" });
 });

 ccontact.addEventListener("click", () => {
    cs.scrollIntoView({ behavior: "smooth" });
 });

}