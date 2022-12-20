fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        var data = json.data;

        data.forEach(function (colors, index, array) {
            let randomnumber = Math.floor(Math.random() * 50);

            //            console.log(colors);
            //            console.log(colors.font_colors);
            console.log(array[1].font_colors);
            console.log(array[12].font_colors);
            console.log(randomnumber);
            document.querySelector('body').style.color = `${array[randomnumber].font_colors}`;
            //            document.querySelector('body').style.backgroundColorcolor = `${colors[randomnumber].bg_colors}`;
        })
    });


//fetchJson();



//Separate all of the text content into separated letters
const text = document.querySelector('.text');
const infotext = document.querySelector('.info');
let words = text.textContent.split(' ');
words = words.map(word => {
    let letters = word.split('');
    letters = letters.map(letter => `<span class="word_inner">${letter}</span>`);
    return letters.join('');
});
words = words.map(word => `<span class="word">${word}</span>`);
text.innerHTML = words.join(' ');


let allLetters = document.querySelectorAll(".word_inner");

let CharacterAmount = allLetters.length;
let TextWidth = document.querySelector(".text").clientWidth;
let ScreenWidth = window.innerWidth;


allLetters.forEach(function (singleLetter, index, array) {

    //place the first and last letter to the edges of the screen
    array[0].style.marginLeft = "0px";
    allLetters[allLetters.length - 1].style.marginRight = "0px";


    //for each letter, create a div with height 100%;
    const parentDiv = document.createElement("div");
    parentDiv.classList.add('parent_div');
    parentDiv.append(singleLetter);

    document.querySelector('.word').append(parentDiv);

    //place the letters randomly with a certain offset value
    singleLetter.style.top = `${Math.random() * 80}vh`
})


document.querySelectorAll('.parent_div').forEach(function (lettercontainer, index, parent_array) {
    lettercontainer.style.width = `${(ScreenWidth / CharacterAmount)}px`;
    //lettercontainer styling could go here.
    lettercontainer.addEventListener('mousemove', function () {

        //move the letters to the mouse position
        document.querySelectorAll('.word_inner.animated').forEach(function (animatedletters) {
            animatedletters.style.top = event.offsetY + "px";
        });
        //add the animated class, where the y position will be updated
        lettercontainer.firstElementChild.classList.add('animated');

        //remove the animated class when the animation is completed
        lettercontainer.addEventListener('animationend', function () {
            lettercontainer.firstElementChild.classList.remove('animated');
        })

    })

    //reset the y position when the mouse leaves the letter
    lettercontainer.addEventListener('mouseleave', function () {
        lettercontainer.firstElementChild.classList.remove('animated');
    })
});
