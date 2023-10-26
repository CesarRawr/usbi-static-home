// Adding cards animation

console.log(screen.width)
if (screen.width >= 768) setSectionCardAnimations();

function setSectionCardAnimations() {
  const sectionCards = document.querySelectorAll(".card");

  sectionCards.forEach((sectionCard) => {
    sectionCard.addEventListener("mouseover", (e) => {
      const imgChild = e.target.firstElementChild;
      imgChild.style.height = "150px";
    })

    sectionCard.addEventListener("mouseout", (e) => {
      const imgChild = e.target.firstElementChild;
      imgChild.style.height = "200px";
    })
  });
}
