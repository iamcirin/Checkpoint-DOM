let url = [
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
];

let container = document.createElement("div");
container.classList.add("container");

document.body.append(container);

let navbar = document.createElement("div");
navbar.classList.add("navbar");
container.append(navbar);

let subdiv = document.createElement("div");

subdiv.classList.add("subdiv");

let humberger = document.createElement("i");
humberger.setAttribute("class", "fas fa-bars");
// humberger.classList.add('')
navbar.append(humberger);

// let ul = document.createElement("ul");

// ul.innerHTML = `<li>home</li><li>home</li><li>home</li>`;

navbar.append(subdiv);

let input = document.createElement("input");
input.classList.add("text");

subdiv.append(input);

const submit = document.createElement("button");
submit.textContent = "add";
submit.classList.add("submit");
subdiv.append(submit);
let main = document.createElement("main");


 

submit.addEventListener("click", (e) => {
  if (input.value == "") {
    e.preventDefault;
    alert("please fill out the field");
  } else {
    let times = document.createElement("i");
    let random = Math.floor(Math.random() * url.length);

    let article = document.createElement("article");

    let collector = document.createElement("div");
    collector.classList.add("collector");
    let img = document.createElement("img");
    img.src = url[random];
    img.className = "img";
    article.append(img);
    container.append(article);
    main.append(article);
    container.append(main);

    collector.append(img);

    article.append(collector);

    times.setAttribute("class", "fas fa-times");

    let box = document.createElement("div");
    box.className = "box";
    article.append(box);
    let firstline = document.createElement("div");
    firstline.className = "line1";
    let secondline = document.createElement("div");
    secondline.className = "line2";
    let thirdline = document.createElement("div");
    thirdline.className = "line3";
    box.append(firstline);
    box.append(secondline);
    box.append(thirdline);

    let value = document.createElement("p");
    value.className = "value";
    value.textContent = input.value;
    firstline.append(value);

    let heart = document.createElement("img");

    heart.src =
      "https://img.icons8.com/fluency-systems-filled/48/000000/heart-plus.png";
    heart.className = "heart";
    let redheart = document.createElement("img");
    redheart.className = "redheart";
    redheart.src = "https://img.icons8.com/fluency/48/000000/heart-plus.png";

    let heartbox = document.createElement("div");
    heartbox.className = "heartbox";

    heartbox.append(heart);
    heartbox.append(redheart);

    firstline.append(heartbox);

    firstline.append(times);

    let quantity = document.createElement("p");
    quantity.className = "quantity";
    quantity.textContent = "quantity";
    secondline.append(quantity);

    let price = document.createElement("p");
    price.className = "price";
    price.textContent = "price";
    secondline.append(price);
   
    let number = document.createElement("input");
   
    number.setAttribute("type", "number");
    number.min = "1";

    let plus = document.createElement("i");
    plus.setAttribute("class", "fas fa-plus");

    let minus = document.createElement("i");

    minus.setAttribute("class", "fas fa-minus");

    let money = document.createElement("p");
    money.className = "money";

    thirdline.append(minus);
    thirdline.append(number);
    thirdline.append(plus);

    let gadget = document.createElement("div");

    gadget.append(minus);
    gadget.append(number);
    gadget.append(plus);
    thirdline.append(gadget);
    thirdline.append(money);
    

  

    input.value = "";

    heartbox.addEventListener("click", () => {
      heart.classList.toggle('show')
      redheart.classList.toggle('hide')

      
     
    if (heart.classList.contains("show") && redheart.classList.contains('hide')) {
      heart.classList += " hide";
      heart.classList += " show";
      
    }
  });

   

    times.addEventListener("click", () => {
      article.remove();
    });


    plus.addEventListener("click", () => {
      number.value++;
      money.textContent = 5 * number.value + " " + "$";
      
    });

    minus.addEventListener("click", () => {
      number.value--;
      money.textContent = 5 * number.value + " " + "$";
      

      if (number.value < 0) {
        number.value = 0;
        money.textContent = 5 * number.value+ " " + "$";
      }
    });
   
  }

  
});







