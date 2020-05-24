//add speakers data in bellow array

// const data = [{
//   id: 1,
//   pic: "./assets/speakers/2.jpg",
//   name: "Elli Avrram",
//   info: "Year 2010"
// },
// {
//   id: 2,
//   pic: "./assets/speakers/5.jpg",
//   name: "Viraj Ghelani",
//   info: "Year 2020"
// },
// {
//   id: 3,
//   pic: "./assets/speakers/18.jpg",
//   name: "Kirti Kulhari",
//   info: "Year 2019"
// },
// {
//   id: 4,
//   pic: "./assets/speakers/15.jpg",
//   name: "Naveen Polishetty",
//   info: "Year 2018"
// },
// {
//   id: 5,
//   pic: "./assets/speakers/12.jpg",
//   name: "Sumeet Vyas",
//   info: "Year 2017"
// },
// {
//   id: 6,
//   pic: "./assets/speakers/11.jpg",
//   name: "Piyush Mishra",
//   info: "Year 2017"
// },
// {
//   id: 7,
//   pic: "./assets/speakers/16.jpg",
//   name: "Kajal Agarwal",
//   info: "Year 2018"
// },
// {
//   id: 8,
//   pic: "./assets/speakers/14.jpg",
//   name: "Aadar Malik",
//   info: "Year 2018"
// },
// {
//   id: 9,
//   pic: "./assets/speakers/9.jpg",
//   name: "Priya Mishra",
//   info: "Year 2020"
// },
// {
//   id: 10,
//   pic: "./assets/speakers/10.jpg",
//   name: "Sudhir R",
//   info: "Year 2020"
// },
// {
//   id: 11,
//   pic: "./assets/speakers/11.jpg",
//   name: "Arpit",
//   info: "Year 2020"
// },
// {
//   id: 12,
//   pic: "./assets/speakers/12.jpg",
//   name: "Arpit",
//   info: "Year 2020"
// },
// {
//   id: 13,
//   pic: "./assets/speakers/13.jpg",
//   name: "Arpit",
//   info: "Year 2020"
// },
// {
//   id: 14,
//   pic: "./assets/speakers/14.jpg",
//   name: "Arpit",
//   info: "Year 2020"
// },
// {
//   id: 15,
//   pic: "./assets/speakers/15.jpg",
//   name: "Arpit",
//   info: "Year 2020"
// },
// {
//   id: 16,
//   pic: "./assets/speakers/16.jpg",
//   name: "Arpit",
//   info: "jdata"
// },
// {
//   id: 17,
//   pic: "./assets/speakers/17.jpg",
//   name: "Arpit",
//   info: "jdata"
// },
// {
//   id: 18,
//   pic: "./assets/speakers/18.jpg",
//   name: "Arpit",
//   info: "jdata"
// },
// {
//   id: 19,
//   pic: "./assets/speakers/19.jpg",
//   name: "Arpit",
//   info: "jdata"
// },
// {
//   id: 204,
//   pic: "./assets/speakers/20.jpg",
//   name: "Padmashri Saravanan",
//   info: "Year 2020"
// }
// ]


//the bellow code will add a new speaker card for every speaker in speakers array
const buildspeakerCard = (name, photo, info, component, id) => {
  const div = document.createElement("div");
  div.setAttribute("class", "col-lg-3");
  div.classList.add("col-md-6");
  div.classList.add("d-flex");
  div.classList.add("align-items-stretch");
  //  div.classList.add("col-lg-3, col-md-6, d-flex, align-items-stretch");
  const body = document.querySelector(component);
  body.append(div);

  const div1 = document.createElement("div");
  div1.classList.add('member');
  div.append(div1);

  const div2 = document.createElement("div");
  div2.classList.add('member-img');
  div1.append(div2);

  const img = document.createElement("img");
  img.classList.add('img-fluid');
  div2.append(img);

  const div3 = document.createElement("div");
  div3.classList.add('social');
  div2.append(div3);

  const a = document.createElement("a");
  div3.append(a);
  const link = "./speaker-single.html?id=" + id;
  a.setAttribute("href", link);
  a.innerHTML = "Visit Speaker Page";

  const div4 = document.createElement("div");
  div4.classList.add('member-info');
  div1.append(div4);

  const h4 = document.createElement("h4");
  div4.append(h4);

  const span = document.createElement("span");
  div4.append(span);

  img.setAttribute("src", photo);
  h4.innerHTML = name;
  span.innerHTML = "Year " + info;

}

// if (document.getElementsByClassName("row1").length) {
//   data.forEach(speaker => buildspeakerCard(speaker, ".row1"));
// } else
//   data.slice(0, 8).forEach(speaker => buildspeakerCard(speaker, ".rowHome"));


const getSpeakers = () => {
  axios
    .get(
      "https://tedx-backend.herokuapp.com/api/speakers"
    )
    .then((response) => {
      for (let index = 0; index < response.data.data.length; index++) {
        let photo = response.data.data[index].imageURL;
        let name = response.data.data[index].name;
        let year = response.data.data[index].year;
        let id = response.data.data[index]._id;
        if (document.getElementsByClassName("row1").length) {
          buildspeakerCard(name, photo, year, ".row1", id);
        } else buildspeakerCard(name, photo, year, ".rowHome", id);

      }
      document
        .querySelector(".loader")
        .setAttribute("style", "display : none");
    });
};

getSpeakers();