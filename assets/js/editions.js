const createEditions = (photo, title, time, content, speakers, organizers) => {
    console.log("!");
    const article = document.createElement("article");
    article.setAttribute("class", "entry");
    article.setAttribute("data-aos", "fade-up");

    const body = document.querySelector(".entries");
    body.append(article);

    const div1 = document.createElement("div");
    div1.classList.add('entry-img');
    article.append(div1);

    const div2 = document.createElement("div");
    div2.classList.add('blog-image');
    div2.setAttribute("style", `background-image: url('${photo}'); background-size: cover`);
    div1.append(div2);

    const h2 = document.createElement("h2");
    h2.classList.add('entry-title');
    article.append(h2);

    const a = document.createElement("a");
    a.classList.add('blog-content-title');
    a.setAttribute("href", "blog-single.html");
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
    li1.innerHTML = `<i class="icofont-wall-clock"></i>`
    ul.append(li1);

    const a1 = document.createElement("a");
    a1.classList.add('blog-content-author');
    a1.setAttribute("href", "blog-single.html");
    a1.innerHTML = time;
    li1.append(a1);


    const div4 = document.createElement("div");
    div4.classList.add('entry-content');
    article.append(div4);

    const p = document.createElement("p");
    p.classList.add('blog-content');
    p.innerHTML = content;
    div4.append(p);

    const heading1 = document.createElement('h4');
    heading1.innerHTML = 'Speakers:';
    div4.append(heading1);

    const list1 = document.createElement("ul");
    div4.append(list1);

    speakers.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = element;
        list1.append(li);
    });

    const heading2 = document.createElement('h4');
    heading2.innerHTML = 'Organizers:';
    div4.append(heading2);

    const list2 = document.createElement("ul");
    div4.append(list2);

    organizers.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = element;
        list2.append(li);
    });
}

const response = [{
    title: 'Theme – Pushing A Pull Door',
    imageURL: 'https://lh6.googleusercontent.com/qwpv_IgY8uP6SSoxeJc9XIqDQlx0_Knvk_KFNNDaQtlEp2uGKpZSdJYk_noAYMLcUcCrb25VMtnugxzDLpwxW2FBsvoV_-cviV3qUv5HnohD6Ass4ywZWPWQxNj-BXFEyh8WCC7U7k-9Q7xfCA',
    content: "Our conference was built along the theme - 'Pushing a Pull Door.' It makes immediate impressions. It makes you think of trying something unusual. Of something which could well be possible but will appear absurd to the world. Of not caring about failure. We have doors all around. Most of them ask us to pull them in only a particular direction. So to not look stupid and check if it can be pushed instead, we pull it nevertheless. But, maybe, in some cases, it can be pushed. But how can we find out without trying something we are not supposed to? Doors are opportunities. Sometimes, we struggle to make the most of them. We are stuck. And the way ahead could well be trying something entirely unconventional, and apparently irrational. And to do this, one needs ideas that raise eyebrows. Ideas that have enough inertia to fall through. They may fail, but if successful, they change the way we perceive our 'doors'.",
    speakers: ["Grace", "Abhay Kumar", "Arun Prakash", "Atul Singh", "Bharat Bhushan", "Clea Chandmal", "Mani Vajipeyajula"],
    time: '25th January, 2015',
    organizers: ["Sajal Chakravarty (Licensee)", "Siddharth Jadhav (Curator)"]
}, {
    title: 'Theme – Just Look Around',
    imageURL: 'https://lh4.googleusercontent.com/iYuXaagi0GZT4RMyy4K0HsotB61oPIuz4L0uIUJau_nAPR-IRYUtaZirPfyFLpzwFY55-0Zpc2kWLmSr1qXslPwNphCas_wW5MiHV4isY3I5aWtvF8cwj8LxyV9vg03uZeOY6bAedxPjGHnnpA',
    content: "Far far away, about 300,000 billion light years away, there exists another group of living and breathing beings trying to contact us. Closer, about a hundred thousand miles away, is mars. And it’s only a matter of time before life is eventually discovered there. Still closer, you have the moon. And of course, we’ve all heard of the Man on the Moon. Coming to earth, your long lost school friend whose last name you don’t remember is probably checking out your pictures on Facebook right now. Your soul mate could be within a few hundred meters of you, and both of you are completely oblivious to that fact. What are all these seemingly disconnected sentences trying to tell us? We like to believe we are individuals distinct from each other, but the truth is, we are connected together in ways that transcend Darwin’s theory of evolution. Everything you say or do could have drastic implications on the future of human survival. Life is unpredictable. Who you are today may become who you were tomorrow. If you’re lucky, your time on this planet will alternate between calm and chaos. When you realize this, it becomes far more rewarding to appreciate the simple pleasures in life, like drinking a glass of cold water after an hour of playing football, or the feel of fresh clean bedsheets inviting you to a good night’s sleep, or the pitter-patter of rain on your umbrella as you walk home after a long day. If you look up from your phone/tablet/laptop occasionally, in addition to relieving the strain on your neck, you will witness a whole new world. One that exists outside of the screens you constantly stare at. One in which you can touch and feel and smell. A world in which real live people exist. So the next time you feel overwhelmed by the amount of work life throws at you, or the numerous assignments fighting for your attention, or the constant buzzing of your phone and the blinking of your laptop screen, pause and reflect on the boundless capacity of nature and the ways of the world. Because sometimes, it helps to Just Look Around.",
    speakers: ["Lubhyathi Rangarajan", "Nitin Sisodia", "Nitin Sisodiay", "Rahul Sen", "Ritu Dalmia", "Tushar Lall"],
    time: '24th January, 2016',
    organizers: ["Sunit Jain (Licensee)", "Dharinee Bhandari (Curator)"]
}, {
    title: 'Theme – Rewired',
    imageURL: 'https://lh6.googleusercontent.com/YhqtdhOjuuZ_QnU3p_GbnJr3U23GzlyeqV64O5_Kvde0o47hzKwCGskZyOyMLLz0sTJmN2kGX7mrwoXGVnWA2sSJBensqH6dhZMKU0Gyok59AUc279TOehJuBZwTlt2fpOzipUuMXlTDXE5PtA',
    content: "Just twenty-six letters of the alphabet, combine in different ways to form words. Words that can change lives, words that can instigate an entire country to a revolution, or just the words that you are reading right now. Just seven notes of music come together and make up all of music. An entire art form, in all its glory and beauty, can be traced back to in seven sounds. Just two digits, zero and one, govern the entirety of computer science. Your laptops, iPads, phones (and probably your future robotic rulers, if the venerable Stephen Hawking is to be believed), all dictated by two numbers. Now if you wondering what the point of all this is, it is this- it requires just a little tweaking with small, meaningless, seemingly unrelated things to make something brilliant. Several particles of dust, arranged in a particular way, came together to create the living, breathing, thinking powerhouse of a being that is now peering into a screen, reading this article. And that is all it takes! A little change, a small adjustment, a slight variation can create something new, something beautiful. What makes something ordinary, extraordinary? A worthless carbon stone lying beneath the earth when cleaned and cut in just the right way, becomes a diamond. A canvas, with blotches of color at just the right places, becomes a work of art. A million little colored dots joined perfectly, become movies. Beauty created from abstraction, art created from meaninglessness. This time, change the way you look at and think about this world. This time, escape the mundane and look for ideas, opportunities, innovation. Because a little change in how all of us think can completely change our reality. After all, who wants to live in a world where everyone thinks exactly the same thoughts? Add a bit off eccentricity, a dash of weirdness, a sprinkle of jugaad, and you have something entirely unique and original. This time, just remember that some things may work better if ‘rewired’.",
    speakers: ["Malaika Vaz", "Piyush Mishra", "Pranav Lal", "Raul V. Rodriguez", "Sonam Wangchuk", "Sumeet Vyas", "Suvrat Raju", "Ulrike Reinhard"],
    time: '22nd January, 2017',
    organizers: ["Tanay J (Licensee)", "Sammit Jain (Curator)"]
}, {
    title: 'Theme – Unheard',
    imageURL: 'https://lh3.googleusercontent.com/0zhYYiz2WgiYsNcZOosW3anjBa6UYegSN45hpGicoGMPHwWqXUBpWMpFcH5v2yz4bP_yHeoH7LRcVD4BZyTLsH4p9CDh9C2QfJRTSUaTahcgdmHCVUAlEVCob_2F4NYL7nB_MZWCJG7lTlSOQw',
    content: "After rewiring and just looking around in our previous editions, let us strive to achieve more! This year we want to illustrate the exclusivity of our talks based on the fact that the stories are “unheard” of, while driving home the point that these speakers dared to walk the path least tread upon. We have immense respect for those who choose to not “Jump on the Bandwagon,” knowing that this decision was the first step on their journey to success. This TEDxBITSGoa, in the spirit of “Unherd,” let’s celebrate individuality! ",
    speakers: ["Aadar Malik", "Ami Shroff", "Anam Hashim", "Jay Weinstein", "Kajal Aggarwal", "Naveen Polishetty", "Rahul Roushan", "Sanket Deshpande", "Suhani Shah"],
    time: '28th January, 2018',
    organizers: ["Yash Shanbag (Licensee)", "Jash Kamdar (Curator)"]
}, {
    title: 'Theme – Flip The Script',
    imageURL: 'https://lh3.googleusercontent.com/KxiajSdvY8VtJga7zdMA0QFcLYr2JM9YvsBxOMEk2OxCvtd2xejG6VMlDzZAxiAKqTnytS5poUZWIyzqg_oBv6yiY1zwbMh7NK3ulDxZC7GHNKM5dIGbTFTzyZgwGFZlJZdfypvgwsVFpCivtg',
    content: "When we talk about the future, we seek comfort in words like fate or destiny. We find solace in knowing that our life is written in the stars like words against the inked sky. It is this relinquishment of power over our story that adds a full stop to accomplishments.Be your own director to steer yourself in the direction you want. Write your own dialogues instead of letting society dictate what should be said. If we truly strive to bring about a change in the world, to inspire millions, and to incubate growth, it is time we start wielding the pen to the script titled Life.“Encore” and standing ovations follow the plays that flipped their script around and didn’t let conventions define the climax of their stories.TEDxBITSGoa 2019 cherishes people who flipped the script around and proudly presents their unscripted life stories.",
    speakers: ["Elena Fernandes", "Franz Gastler", "Gayatri Parameswaran", "Hormis Tharakan", "Jagdish Chaturvedi", "Karishma Boolani", "Kirti Kulhari", "Prateep Basu", "Vilas Nayak"],
    time: '27th January, 2019',
    organizers: ["Anurag Kumar (Licensee)", "Vandit Jain (Curator)", "Saurabh Tiwari (Coordinator)"]
}, {
    title: 'Theme – Youreka',
    imageURL: 'https://lh6.googleusercontent.com/I4e2b6QbNXsACuTPZ-9pC9yr1oTHMC234kK0OoXyyeMxzIF7lYtdvRZjkPSU6mzwbUKrifUX7lz1wbwn9oiCEH7MtsYTlBkPLIgRAynm7GJlly9AIB_Kr7JZyqxBRNTzpkYEJL9nbyIMZTrCNQ',
    content: "From the discovery of fire to the invention of the incandescent light bulb, we have seen the conception of several eureka moments that have made the world a brighter place. Like the pioneers behind these innovations and inventions, we all kindle a spark within us ignited by our passion and vision; a spark that has the potential to positively impact and change the world. Like Wilfred Peterson once said “Words of encouragement fan the spark of genius into the flame of achievement”, this conference hopes to achieve exactly that. We aim to spread inspiration and encouragement by presenting to you a diverse line up of speakers, whose “eureka moments” have transformed into breakthroughs that are changing spaces around us. This TEDxBITSGoa let us celebrate the beacons of lights in our society who constantly endeavour to make this world a better place!",
    speakers: ["Anand Bhaskar", "Anil Lamba", "Archis Patil", "Elli Avrram", "Jimmy Mistry", "Padmashri Saravanan", "Priya Mishra", "Rajan Singh", "Sudhir R", "Viraj Ghelani"],
    time: '22nd January, 2017',
    organizers: ["Ajinkya Deshpande (Licensee)", "Mann Verlekar (Curator)", "Shubh Khandelwal (Coordinator)"]
}]

const getEditons = () => {
    for (let index = 0; index < response.length; index++) {
        let photo = response[index].imageURL;
        let title = response[index].title;
        let content = response[index].content;
        let time = response[index].time;
        let speakers = response[index].speakers;
        let organizers = response[index].organizers;
        createEditions(photo, title, time, content, speakers, organizers);
    }

};

getEditons();