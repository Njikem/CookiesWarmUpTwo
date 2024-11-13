

let images = document.getElementById('container');

images.insertAdjacentHTML('afterend', 

    `<div id="images">
      
    <img src="/images/cloud.jpg" alt="image" width="300px"/>
     <img src="/images/castle.jpg" alt="image" width="300px"/>
      <img src="/images/mountain.jpg" alt="image" width="300px"/>


    </div>`
)



for(let i= 0; i < images.length; i++){

    let image = images[i];
    console.log(image[0])

    image.addEventListner('click', function() {

        Cookies.set('image_url', image);

    })


}
    