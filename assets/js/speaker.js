const id = window.location.href.split('?')[1].split('=')[1];

const link = 'https://tedxbackend.herokuapp.com/api/speakers/' + id;
console.log(link);

axios
    .get(
      link
    )
    .then((response) => {
      console.log(response.data.data);
      document.getElementById('title').innerHTML = response.data.data.name;
      document.getElementById('profile-pic').setAttribute("src", response.data.data.imageURL[0]);
      document.getElementById('about-content').innerHTML = response.data.data.description;
      document.getElementById('year').innerHTML = response.data.data.year;
      document.getElementById('profile-link').setAttribute("href", response.data.data.imageURL[0]);
      document.title = response.data.data.name + " - TEDx BITSGoa";
    });