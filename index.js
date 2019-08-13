function getData(){
fetch(`https://api.myjson.com/bins/so5pk`)
.then(response => response.json())
.then(data => renderPosters(data))
.catch(err => console.log(err))
}

function renderPosters(data){

    const poster1 = document.getElementById('post1')
    const poster2 = document.getElementById("post2");
    const poster3 = document.getElementById("post3");
    const poster4 = document.getElementById("post4");

    document.getElementById("movie__name1").innerHTML = `${data[0].name}`;
    document.getElementById("movie__name2").innerHTML = `${data[1].name}`;
    document.getElementById("movie__name3").innerHTML = `${data[2].name}`;
    document.getElementById("movie__name4").innerHTML = `${data[3].name}`;

    poster1.src = `${data[0].image}`
    poster2.src = `${data[1].image}`
    poster3.src = `${data[2].image}`
    poster4.src = `${data[3].image}`

    poster1.addEventListener('click', () => playMovie(data[0].video))
    poster1.addEventListener('mouseover', () => showTooltip(data[0].description, 1))

    poster2.addEventListener('click', () => playMovie(data[1].video))
    poster2.addEventListener('mouseover', () => showTooltip(data[1].description, 2))

    poster3.addEventListener('click', () => playMovie(data[2].video))
    poster3.addEventListener('mouseover', () => showTooltip(data[2].description, 3))

    poster4.addEventListener('click', () => playMovie(data[3].video))
    poster4.addEventListener('mouseover', () => showTooltip(data[3].description, 4))

}

function playMovie(movie){
let vid = document.getElementById("videoPlayer")
let vid1 = document.getElementById("videosource1")
vid1.src = `${movie}`
vid.play()
}

function showTooltip(data , num){
    document.getElementById(`movie${num}_desc`).innerHTML = `${data}`

}


window.onload = getData();

