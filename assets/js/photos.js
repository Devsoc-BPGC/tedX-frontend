const createCard = (photo, name, component) => {
  const div = document.createElement("div");
  div.setAttribute("class", "col-lg-3");
  div.classList.add("col-sm-6");
  div.classList.add("portfolio-item");
  if (name === "Team's Snap") {
    div.classList.add("filter-card");
  } else if (name === "Speaker's Snap") {
    div.classList.add("filter-app");
  } else {
    div.classList.add("filter-web");
  }
  //   div.setAttribute("data-aos", "fade-up");

  const body = document.querySelector(component);
  body.append(div);

  const image = document.createElement("img");
  div.append(image);
  image.setAttribute("class", "img-fluid2");

  const info = document.createElement("div");
  info.setAttribute("class", "portfolio-info");
  div.append(info);

  const title = document.createElement("h4");
  info.append(title);
  title.innerHTML = name;

  const link = document.createElement("a");
  info.append(link);
  link.setAttribute("class", "venobox");
  link.classList.add("preview-link");
  link.setAttribute("data-gall", "portfolioGallery");
  link.setAttribute("href", photo);
  link.setAttribute("title", name);

  const button = document.createElement("i");
  button.setAttribute("class", "icofont-expand");
  link.append(button);

  image.setAttribute("src", photo);
};

// createCard("D:/Arpit/Code/tedX-frontend/assets/img/TEDxpressions[DoPy]%20(30).jpg", "Speaker's Snap", ".portfolio-container");

const getPhotos = () => {
  axios
    .get(
      "https://tedx-backend.herokuapp.com/api/albums"
    )
    .then((response) => {
      for (let index = 0; index < response.data.data.length; index++) {
        let photos = response.data.data[index].imageURL;
        console.log(response);
        let category = response.data.data[index].name;
        console.log(document.getElementsByClassName("row1").length);
        if (document.getElementsByClassName("row1").length) {
          photos.forEach((element) => {
            createCard(element, category, ".portfolio-container");
            document
              .querySelectorAll(".loader")[0]
              .setAttribute("style", "display : none");
          });
        } else {
          photos.slice(0, 8).forEach((element) => {
            createCard(element, category, ".portfolio-container-home");
            document
              .querySelectorAll(".loader")[1]
              .setAttribute("style", "display : none");
          });
        }
      }
    });
};

getPhotos();