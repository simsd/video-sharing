

const API_URL = "http://localhost:5000/vids";


const form = document.querySelector('form');

const vidsElement  = document.querySelector('.vids');

listAllVids();



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
        headers : {
            'content-type' : 'application/json' //what is begging given to server
        }
    }).then(response => response.json())
      .then(createdVid => {
          console.log(createdVid);
          form.reset();
          listAllVids();
          location.reload();
      }); 

});

function listAllVids(){
    vidsElement.innerHTML = '';
    fetch(API_URL)
        .then(response => response.json())
        .then(vids => {
            vids.reverse();
            vids.forEach(vid => {
                const div = document.createElement('div');
                const header = document.createElement('h3');
                header.textContent = "Username: " + vid.userName;
                const videoPlayer = document.createElement('iframe');
                videoPlayer.src = vid.videoLink.toString().replace("/watch?v=", "/embed/");
                
                div.appendChild(header);
                div.appendChild(videoPlayer);
                div.style.marginBottom = 100;
                vidsElement.append(div);
            });
        });
}