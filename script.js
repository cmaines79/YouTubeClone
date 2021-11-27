const featuredVideoDivElement = document.getElementById('featured-video-div');
const heroVideoDivElement = document.getElementById('hero-video-div');

const comments = [
    {
        profilePicURL: "https://yt3.ggpht.com/ytc/AKedOLQOP9aoVEccEZbvsIstPxgueLh72lCX91xjMIeJMQ=s48-c-k-c0x00ffffff-no-rj",
        commentor: "majedHK",
        when: "2 years ago",
        comment: 'I wish if you make a series "A playlist"  and name it Lets build  using HTML, CSS and JS  tutorials  like Facebook , Twitter , Spotify clones  :)    .',
        likes: 224,
        dislikes: 0,
        replies: 6,
    },
    {
        profilePicURL: "https://yt3.ggpht.com/ytc/AKedOLRkRh0PXTjcm9wcXcCfgeOCejAr8qTotLZiNZB_=s48-c-k-c0x00ffffff-no-rj",
        commentor: "Michael Burch",
        when: "2 years ago",
        comment: "Don't know how you do it, Brad. I have learned so much from you and have taken some of your courses on Udemy. You are an awesome teacher!",
        likes: 325,
        dislikes: 0,
        replies: 8,
    },
    {
        profilePicURL: "https://yt3.ggpht.com/ytc/AKedOLS71IVyTVpJkr5EaEZTGKh0hssS0iB-LIQtldLV1A=s48-c-k-c0x00ffffff-no-rj",
        commentor: "James Trail",
        when: "2 years ago",
        comment: "I really enjoyed how you tied everything together (Javascript and CSS back to Html), very easy to digest and learn. Great job!",
        likes: 17,
        dislikes: 0,
        replies: 0,
    },
    {
        profilePicURL: "https://yt3.ggpht.com/ytc/AKedOLQ0C1chX6L6iEaVkkzaHDdAoR2ziXANfJXiFuf4=s48-c-k-c0x00ffffff-no-rj",
        commentor: "snow snow",
        when: "2 years ago",
        comment: "transform: translate(-50%, -50%) /n that was a new one for me",
        likes: 28,
        dislikes: 0,
        replies: 0,
    },
    {
        profilePicURL: "https://yt3.ggpht.com/ytc/AKedOLSDP4vcbzIZGvgBeXm7FfK5FerdrMMcmJYlmvowsg=s48-c-k-c0x00ffffff-no-rj",
        commentor: "Love for wisdom",
        when: "1 year ago",
        comment: "First like then watch.👏💖 /n Please do a course on a full working clone of any website.🙏",
        likes: 84,
        dislikes: 0,
        replies: 7,
    },
]

const relatedVideos = [
    {
        thumbnailURL: "https://i.ytimg.com/vi/lvYnfMOUOJY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD1Onf4X810hX40N-wSTJJpz74Dww",
        title: "Creative Agency Website From Scratch | HTML & CSS",
        creator: "Traversy Media",
        views: "121K",
        age: "8 months ago",
        time: "1:26:51",
    },
    {
        thumbnailURL: "https://i.ytimg.com/vi/GJXXf3_dcng/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLATst2l92WmEbJJE2KTEYcQbmNABA",
        title: "Responsive Landing Page Using HTML & CSS (A Little JQuery",
        creator: "Traversy Media",
        views: "185K",
        age: "3 years ago",
        time: "1:04:07",
    },
    {
        thumbnailURL: "https://i.ytimg.com/vi/r_hYR53r61M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAxKKEH3lWRiXzmXLpIN8gI4KuJVA",
        title: "Build a Portfolio Website & Deploy",
        creator: "Traversy Media",
        views: "409K",
        age: "1 year ago",
        time: "2:00:45",
    },
    {
        thumbnailURL: "https://i.ytimg.com/vi/p0bGHP-PXD4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDV0SI4dcq6OeVvglnMULm0KCweCA",
        title: "Build a Responsive Website | HTML, CSS, Grid, Flexbox &...",
        creator: "Traversy Media",
        views: "532K",
        age: "1 year ago",
        time: "2:02:22",
    },
    {
        thumbnailURL: "https://i.ytimg.com/vi/uKgn-To1C4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBJcHKfSFro7eRtlt3tXv3ah2I12A",
        title: "Microsoft Homepage Clone - CSS Grid, Flex & Media Queries",
        creator: "Traversy Media",
        views: "158K",
        age: "1 year ago",
        time: "1:10:59",
    },
    {
        thumbnailURL: "https://i.ytimg.com/vi/p3qvj9hO_Bo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDo4wMr73SD-Ej5w0b-sKip6OAqPQ",
        title: "Learn SQL In 60 Minutes",
        creator: "Web Dev Simplified",
        views: "556K",
        age: "3 years ago",
        time: "56:24",
    },

]

const populateSampleComments = () => {
    const publicCommentsElement = document.getElementById('public-comments');
    let temp = "";
    comments.forEach((comment) => {
        let output = `
        <div class="comment-content">
            <div class="commentor-img">
                <img src=${comment.profilePicURL} alt="user account">
            </div>
            <div class="comment">
                <div class="commentor">
                    <p><span>${comment.commentor} </span>${comment.when}</p>
                </div>
                <div class="comment-text">
                    <p>${comment.comment}</p>
                </div>
                <div class="comment-social">
                    <button class="comment-btn btn">
                        <img src="/img/thumb-up.svg" alt="likes">
                    </button>
                    <p>${comment.likes}</p>
                    <button class="comment-btn btn">
                        <img src="/img/thumb-down.svg" alt="dislikes">
                    </button>
                    <p>${comment.dislikes}</p>
                    <button class="btn">REPLY</button>
                </div>
                <div class="view-more-comments">
                    <a href="#">
                        <img src="/img/menu-down.svg" alt="menu down">
                        <span>View ${comment.replies} replies</span>
                    </a>
                </div>
            </div>
        </div>
        `
        temp += output;
    })
    console.log(temp);
    
    publicCommentsElement.innerHTML = temp;

}

// setting the intial size of the iframe and parent elements
document.addEventListener('DOMContentLoaded', () => {
    // set the featured-video-div height and width (width is set in CSS)
    featuredVideoDivElement.style.height = 0.5625 * featuredVideoDivElement.offsetWidth + "px";
    
    // set the hero-video-div height and width (width is set in CSS)
    heroVideoDivElement.style.height = 0.5625 * heroVideoDivElement.offsetWidth + "px";
    
    // populate sample comments and related videos
    populateSampleComments();
    populateSampleRelatedVideos();
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