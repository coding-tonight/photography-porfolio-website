const container = document.querySelector('.container');
// const image = document.querySelectorAll('.image');



const handleDown = (event) => {
    container.dataset.mouseDownAt = event.clientX;
    //    container.style.transform = `translateX(${event.clientX}px)`;
}

const handleUp = () => {
    container.dataset.mouseDownAt = "0";
    // container.dataset.prevPercentage = container.dataset.percentage;
}

const handleMove = (event) => {
    if (container.dataset.mouseDownAt == "0") return;
    const mouseDistance = parseFloat(container.dataset.mouseDownAt) - event.clientX,
        maxDistance = window.innerWidth / 2;

    // calculating total distance of the screen 
    const percentage = (mouseDistance / maxDistance) * -100,
        nextPercentageUnconstrained = parseFloat(container.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);          // calculation  limit of transition 

      container.dataset.prevPercentage = nextPercentage;

    container.animate({
        transform: `translate(${nextPercentage}% ,-50%)`
    }, { duration: 1200, fill: "forwards" });


    for (let image of container.getElementsByClassName('image')) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
        console.log(image)
    }
}

window.onmousemove = event => handleMove(event);
// calling the function 
window.onmousedown = event => handleDown(event);

window.onmouseup = event => handleUp(event)

// mobile 
window.ontouchmove = e => handleMove(e.touches[0]);

window.ontouchend = e => handleUp(e.touches[0]);

window.ontouchmove = e => handleMove(e.touches[0]);



