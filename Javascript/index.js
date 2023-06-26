const container = document.querySelector('.container');
const image = document.querySelectorAll('.image');



const Mouse_at_down = (event) => {
    container.dataset.mouseDownAt = event.clientX;
    //   container.style.transform = `translateX(${event.clientX}px)`;
}



const mouseMove = (event) => {
    if(container.dataset.mouseDownAt === "0") return;
  
    const mouseDelta = parseFloat(container.dataset.mouseDelta) - event.clientX;
    const screenWidth = window.innerWidth / 2;

    const precentage = (mouseDelta / screenWidth) * 100,
        nextPercentageUncontrained = parseFloat(container.dataset.mouseDownAt) + precentage,
        nextPercentage = Math.max(Math.min(nextPercentageUncontrained, 0), 100);

        container.dataset.prevPercentage = nextPercentage;

    container.animate({
        transform: `translateX(${event.clientX}%)`
    }, {
        duration: 1200, fill: "forwards"
    });
}

const handle_up = () => {
    container.dataset.mouseDownAt = '0';
    container.dataset.pevPercentage = container.dataset.precentage;
}

window.onmousemove = event => mouseMove(event);
// calling the function 
window.onmousedown = event => Mouse_at_down(event);

window.onmouseup = event => Mouse_at_down(event)

// window.onmousemove = event => Mouse_at_down(event);


// const track = document.getElementById("image-track");

// const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// const handleOnUp = () => {
//   track.dataset.mouseDownAt = "0";  
//   track.dataset.prevPercentage = track.dataset.percentage;
// }

// const handleOnMove = e => {
//   if(track.dataset.mouseDownAt === "0") return;
  
//   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerWidth / 2;
  
//   const percentage = (mouseDelta / maxDelta) * -100,
//         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
//         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
//   track.dataset.percentage = nextPercentage;
  
//   track.animate({
//     transform: `translate(${nextPercentage}%, -50%)`
//   }, { duration: 1200, fill: "forwards" });
  
//   for(const image of track.getElementsByClassName("image")) {
//     image.animate({
//       objectPosition: `${100 + nextPercentage}% center`
//     }, { duration: 1200, fill: "forwards" });
//   }
// }

// /* -- Had to add extra lines for touch events -- */

// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);

