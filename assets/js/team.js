//the bellow code will add a new speaker card for every speaker in speakers array
const buildorganizerCard = (name, photo, email, facebook, insta, info, component) => {
    const div = document.createElement("div");
    div.setAttribute("class", "col-lg-4");
    div.classList.add("col-md-6");
    div.classList.add("d-flex");

    const body = document.querySelector(component);
    body.append(div);
  
    const div1 = document.createElement("div");
    div1.classList.add('member');
    div1.setAttribute("data-aos", "fade-up");
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
  
    const a1 = document.createElement("a");
    div3.append(a1);
    a1.setAttribute("href", facebook);
    a1.setAttribute("target", "_blank");
    a1.innerHTML = '<i class="icofont-facebook">';

    const a2 = document.createElement("a");
    div3.append(a2);
    a2.setAttribute("href", insta);
    a2.setAttribute("target", "_blank");
    a2.innerHTML = '<i class="icofont-instagram"></i>';

    const a3 = document.createElement("a");
    div3.append(a3);
    a3.setAttribute("href", "mailto:" + email);
    a3.setAttribute("target", "_blank");
    a3.innerHTML = '<i class="icofont-email"></i>';
  
    const div4 = document.createElement("div");
    div4.classList.add('member-info');
    div1.append(div4);
  
    const h4 = document.createElement("h4");
    div4.append(h4);
  
    const span = document.createElement("span");
    div4.append(span);
  
    img.setAttribute("src", photo);
    h4.innerHTML = name;
    span.innerHTML = info;
  
  }

axios
    .get(
    "https://tedx-backend.herokuapp.com/api/organizers"
    )
    .then((response) => {
    const members = response.data.data;
    members.forEach(element => {
        console.log(element);
        const name = element.name;
        const photo = element.imageURL[0];
        const email = element.email;
        const facebook = element.facebook;
        const insta = element.instagram;
        const info = element.role;
        buildorganizerCard(name, photo, email, facebook, insta, info, '.rowTeam')
    });
    document.querySelectorAll(".loader")[0]
              .setAttribute("style", "display : none");
    });