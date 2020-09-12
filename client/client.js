

const API_URL = "http://localhost:5000/vids";


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

    fetch(API_URL,{
        method : 'POST', 
        body : JSON.stringify(vid),
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())
      .then(createdVid => {
          console.log(createdVid);
          form.reset();
      }) 

});