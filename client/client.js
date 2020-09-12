

const API_URL = "http://localhost:5000/videos";


const form = document.querySelector('form');


form.addEventListener('submit', (event)=>{
    event.preventDefault(); //do not refresh the page
    const formData = new FormData(form);

    const userName = formData.get('username');
    const videoLink = formData.get('videolink');
    
    const vid = {
        userName, 
        videoLink
    };

    console.log(vid);

});