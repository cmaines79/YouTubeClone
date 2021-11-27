const featuredVideoDivElement = document.getElementById('featured-video-div');
const heroVideoDivElement = document.getElementById('hero-video-div');

// setting the intial size of the iframe and parent elements
document.addEventListener('DOMContentLoaded', () => {
    // set the featured-video-div height and width (width is set in CSS)
    featuredVideoDivElement.style.height = 0.5625 * featuredVideoDivElement.offsetWidth + "px";
    
    // set the hero-video-div height and width (width is set in CSS)
    heroVideoDivElement.style.height = 0.5625 * heroVideoDivElement.offsetWidth + "px";
    
});

// listening to window resize event to resize the iframe with the correct aspect ratio
window.addEventListener('resize', () => {
    // will also need some logic here to know if the window size is at a media threshold and to change the flex from row to column
    
    // set the featured-video-div height and width (width is set in CSS)
    featuredVideoDivElement.style.height = 0.5625 * featuredVideoDivElement.offsetWidth + "px";
    
    // set the hero-video-div height and width (width is set in CSS)
    heroVideoDivElement.style.height = 0.5625 * heroVideoDivElement.offsetWidth + "px";
})

const relatedVideosElemenet = document.getElementById('RV1');
relatedVideosElemenet.addEventListener('mouseover', (e) => {
    // console.log(e.target);
})