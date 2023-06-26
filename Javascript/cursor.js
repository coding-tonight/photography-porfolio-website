const cursor = document.querySelector('.cursor');


document.body.onpointermove  = event  => { 
    const { clientX , clientY } = event;

    cursor.animate({
       left: `${clientX}px` , 
       top:  `${clientY}px`
    } , {
        duration: 1200 , fill: 'forwards'
    });
}