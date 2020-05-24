const createBlog = (photo, title, author, blogid, content) => {
    console.log("!");
    const article = document.createElement("article");
    article.setAttribute("class", "entry");
    article.setAttribute("data-aos", "fade-up");

    const body = document.querySelector("#blog-content");
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
    a.setAttribute("href", "blog-single.html?blogId=" + blogid);
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
    a1.setAttribute("href", "blog-single.html?blogId=" + blogid);
    a1.innerHTML = author;
    li1.append(a1);


    const div4 = document.createElement("div");
    div4.classList.add('entry-content');
    article.append(div4);

    const p = document.createElement("p");
    p.classList.add('blog-content');
    let introContent = content.slice(0, 400);
    p.innerHTML = introContent + " . . . .";
    div4.append(p);

    const div5 = document.createElement("div");
    div5.classList.add('read-more');
    div4.append(div5);

    const a3 = document.createElement("a");
    a3.setAttribute("href", `blog-single.html?blogId=${blogid}`);
    a3.innerHTML = `Read More`
    div5.append(a3);

}

const getBlogs = () => {
    axios
        .get(
            "https://tedx-backend.herokuapp.com/api/blogs"
        )
        .then((response) => {
            let blogs = response.data.data.reverse();
            for (let index = 0; index < blogs.length; index++) {
                console.log(blogs);
                let photo = blogs[index].imageURL;
                console.log(response);
                let title = blogs[index].title;
                let author = blogs[index].author;
                let content = blogs[index].content;
                let blogid = blogs[index]._id;
                createBlog(photo, title, author, blogid, content);
            }
        });
};

getBlogs();