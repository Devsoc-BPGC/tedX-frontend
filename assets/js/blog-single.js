const singleBlog = (photo, title, author, content) => {
    console.log("!");
    const article = document.createElement("article");
    article.setAttribute("class", "entry");
    article.setAttribute("data-aos", "fade-up");

    const body = document.querySelector("#blog-content-single");
    body.append(article);

    const div1 = document.createElement("div");
    div1.classList.add('entry-img');
    article.append(div1);

    const div2 = document.createElement("div");
    div2.classList.add('blog-image');
    div2.setAttribute("style", `background-image: url('${photo}');`);
    div1.append(div2);

    const h2 = document.createElement("h2");
    h2.classList.add('entry-title');
    article.append(h2);

    const a = document.createElement("a");
    a.classList.add('blog-content-title');
    h2.append(a);
    a.innerHTML = title;

    const div3 = document.createElement("div");
    div3.classList.add('entry-meta');
    article.append(div3);

    const ul = document.createElement("ul");
    div3.append(ul);

    const li1 = document.createElement("li");
    li1.classList.add('d-flex');
    li1.classList.add('align-items-center');
    li1.innerHTML = `<i class="icofont-user"></i>`
    ul.append(li1);

    const a1 = document.createElement("a");
    a1.classList.add('blog-content-author');
    a1.innerHTML = author;
    li1.append(a1);

    const div4 = document.createElement("div");
    div4.classList.add('entry-content');
    article.append(div4);

    const p = document.createElement("p");
    p.classList.add('blog-content');
    p.innerHTML = content;
    div4.append(p);

}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogId = urlParams.get('blogId');
console.log(blogId);

const getsingleBlogs = () => {
    console.log("hey");
    axios
        .get(
            `https://tedx-backend.herokuapp.com/api/blogs/${blogId}`
        )
        .then((response) => {
            console.log(response);
            let photo = response.data.data.imageURL;
            let title = response.data.data.title;
            let author = response.data.data.author;
            let content = response.data.data.content;
            console.log(title);
            singleBlog(photo, title, author, content);

        });
};

getsingleBlogs();