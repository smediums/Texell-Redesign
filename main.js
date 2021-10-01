const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.navLink');
const navUl = document.getElementById('navUl');
const convoArea = document.getElementById('messages');


//Time variables
const today = new Date();
const hour = today.getHours();
const hourFormat = (hour % 12 || 12);
const minutes = today.getMinutes();
const minFormat = minutes < 10 ? `0${minutes}` : minutes;
const day = today.getDay();
const amOrPm = hour < 12 ? 'am' : 'pm';
const curTime = `${hourFormat}:${minFormat}${amOrPm}`;



// toggle Function
const toggleMenu = () => {
    const navTab = document.querySelector('.fa-caret-left');
    navTab.addEventListener('click', () => {
        navTab.classList.toggle('clicked');
        body.classList.toggle('notActive');
        nav.classList.toggle('active');
        navLinks.forEach(link => {
            link.children[1].classList.remove('clicked');
            link.nextElementSibling.classList.remove('dropDown');
        });
    });

};



toggleMenu();


// Type of Loans Section going From Slider to Static
if (matchMedia) {
    const tbletScrn = window.matchMedia('(max-width: 834px)');
    tbletScrn.addListener(widthChange);
    widthChange(tbletScrn);
}

function widthChange(tbletScrn) {
    const loanSlider = document.getElementById('loanSlider');

    if (tbletScrn.matches) {
        loanSlider.innerHTML = '<div class=" active  carousel-item" data-bs-interval="9000"><a href="#" class="optsHeading">Auto Loans</a><p class="APR">as low as <br>    <span class="perc">1.49%</span>APR</p><a href="#">view loan rates</a></div><div class=" carousel-item" data-bs-interval="9000"><a href="#" class="optsHeading">Home Equity</a><p class="APR">as low as <br>    <span class="perc">2.79%</span>APR</p><a href="#">view home equity rates</a></div><div class=" carousel-item" data-bs-interval="9000"><a href="#" class="optsHeading">Fixed Mortgage</a><p class="APR">as low as <br> <span class="perc">2.13%</span>APR</p><a href="#">view mortgage rates</a></div><div class=" carousel-item" data-bs-interval="9000"><a href="#" class="optsHeading">Personal Loans</a><p class="APR">as low as <br>    <span class="perc">6.25%</span>APR</p><a href="#">view personal loan rates</a></div><div class=" carousel-item" data-bs-interval="9000"><a href="#" class="optsHeading">Ceriticates</a><p class="APR">as low as <br>    <span class="perc">1.05%</span>APR</p><a href="#">view savings rates</a></div>';


    } else {
        loanSlider.innerHTML = '<div class=" active  optns2" data-bs-interval="9000"><a href="#" class="optsHeading">Auto Loans</a><p class="APR">as low as <br>    <span class="perc">1.49%</span>APR</p><a href="#">view loan rates</a></div><div class=" optns2" data-bs-interval="9000"><a href="#" class="optsHeading">Home Equity</a><p class="APR">as low as <br>    <span class="perc">2.79%</span>APR</p><a href="#">view home equity rates</a></div><div class=" optns2" data-bs-interval="9000"><a href="#" class="optsHeading">Fixed Mortgage</a><p class="APR">as low as <br> <span class="perc">2.13%</span>APR</p><a href="#">view mortgage rates</a></div><div class=" optns2" data-bs-interval="9000"><a href="#" class="optsHeading">Personal Loans</a><p class="APR">as low as <br>    <span class="perc">6.25%</span>APR</p><a href="#">view personal loan rates</a></div><div class=" optns2" data-bs-interval="9000"><a href="#" class="optsHeading">Ceriticates</a><p class="APR">as low as <br>    <span class="perc">1.05%</span>APR</p><a href="#">view savings rates</a></div>';

        loanSlider.style.display = 'flex';
        document.getElementById('opts1').style.display = 'flex';


    }
}


//Nav Dropdown menu & icon rotation
navLinks.forEach(link => {
    
    link.addEventListener('click', () => {
     const subMenu = document.querySelectorAll('.subMenu');   
        
        subMenu.forEach(menu => {
            menu.classList.remove('dropDown');
        });
        navLinks.forEach(link => {
            link.children[1].classList.remove('clicked');
        });
        link.nextElementSibling.classList.toggle('dropDown');
        link.children[1].classList.add('clicked');
    });
});


// Close all drop down menus when mouse leaves ul

navUl.addEventListener('mouseleave', () => {
    navLinks.forEach(link => {
        link.classList.remove('clicked');
        link.nextElementSibling.classList.remove('dropDown');
    });
});


//Back 2 Top
const bck2Top = () => {
    const b2TContainer = document.getElementById('bck2Top');
    const bck2TopBtn = document.getElementById('toTop');

    b2TContainer.addEventListener('mouseenter', () => {
        bck2TopBtn.style.animation = 'bckTop 1s linear infinite';
    });

    b2TContainer.addEventListener('mouseleave', () => {
        bck2TopBtn.style.animation = 'none';
    });
};
bck2Top();


//Chat Icon change Color on scroll
window.onscroll = () => {
    chatScroll()
};

const chatScroll = () => {
    const header = document.querySelector('.header').offsetHeight;
    const banner = document.getElementById('banner').offsetHeight;
    const endeavors = document.getElementById('endeavors').offsetHeight;
    let windowTop = window.scrollY;
    if (windowTop >= (header + banner + (endeavors / 5.6))) {
        document.querySelector('.fa-comments').style.color = '#ddd';
    } else if (windowTop < (header + banner + (endeavors / 5.5))) {
        document.querySelector('.fa-comments').style.color = '#0f7a5b';
    };
};


// ChatBot Open and Close

const chatBotOpen = () => {
    const chatBot = document.getElementById('chatBot');
    const chatIcon = document.getElementById('chat');
    const close = document.getElementById('close');
    const minimize = document.getElementById('minimize');
    const userNameScrn = document.getElementById('username');
    const guest = document.getElementById('guest');
    

    chatIcon.addEventListener('click', () => {
        chatBot.classList.add('chatOpen');
        chatIcon.classList.add('chatOpen');
        
    });

    // Close Chat
    close.addEventListener('click', () => {
        const end = document.querySelector('.end');
        const cancel = document.querySelector('.cancel');

        document.querySelector('.closeChat').classList.add('chatClose');
        end.addEventListener('click', () => {
            
            chatBot.classList.remove('chatOpen');
            setTimeout(() => {
              chatIcon.classList.remove('chatOpen');
                document.querySelector('.closeChat').classList.remove('chatClose'); 
            }, 300);
            convoArea.innerHTML = '';
            userNameScrn.classList.remove('enterChat');
        });
        cancel.addEventListener('click', () => {
            document.querySelector('.closeChat').classList.remove('chatClose');
        })
    });


    //Minimize Chat
    minimize.addEventListener('click', () => {
        chatBot.classList.toggle('minimize');
    });


    //The users name
    let user = document.getElementById('user');
    user.addEventListener('keydown', (event) => {
       const userName = user.value;

       const userValidation = () => {
            let notUsable1 = /nigger/i.test(userName);

           if(userName.length >= 4 && notUsable1 == false){

            userNameScrn.classList.add('enterChat');
            convoArea.innerHTML += `<div class="botResponse"><p class="reponse">Hello <span class="user">${userName}</span>,<br><br> This is Clark, Texell's virtual Assistant. How can I help you today?</p>${curTime}</div>`;
            convoArea.lastElementChild.scrollIntoView(false);
            
           } else {
               document.querySelector('.specs').innerHTML = 'Not enough characters(at least 4),<br> or username is not allowed.';
               document.querySelector('.specs').style.textAlign = 'center';
               document.querySelector('.specs').style.fontWeight = '500';
               document.querySelector('.specs').style.color = '#ddd';
               document.querySelector('.specs').style.fontSize = '0.9rem';
            }
        }

        if(event.key === 'Enter'){
            userValidation();
         
        };
    });
    
    //Proceed as Guest
    guest.addEventListener('click', () => {
        userNameScrn.classList.add('enterChat');
        convoArea.innerHTML += `<div class="botResponse"><p class="reponse">Hello <span class="user">Guest</span>,<br><br> This is Clark, Texell's virtual Assistant. How can I help you today?</p>${curTime}</div>`;
        convoArea.lastElementChild.scrollIntoView(false);
    });
};
chatBotOpen();



// ChatBot Responses
const chatBotResponses = () => {
    //Varibales
    let userInput = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';


    // Regex to trigger Bot Response

    let greeting1 = /ello/i.test(userInput);
    let greeting2 = /hey/i.test(userInput);
    let greeting3 = /hi/i.test(userInput);
    let loans = /loans/i.test(userInput);
    let loan = /loan/i.test(userInput);
    let weather = /weather/i.test(userInput);;
    let food = /food/i.test(userInput);
    let restaurant = /restaurant/i.test(userInput);
    let help = /help/i.test(userInput);
    let todayDate = /date/i.test(userInput);

convoArea.innerHTML += `<div class="userText"><i class="fas fa-user-circle"></i><p>${userInput}</p>${curTime}</div>`;

    if(greeting1 || greeting2 || greeting3){
        setTimeout(() => {
            convoArea.innerHTML += `<div class="botResponse"><p class="reponse">Hello Customer, this is Clark, Texell's virtual Assistant. How can I help you today?</p>${curTime}</div>`;
            convoArea.lastElementChild.scrollIntoView(false);
        }, 550);
        convoArea.lastElementChild.scrollIntoView(false);
    }
    if(loans || loan){
        setTimeout(() => {
            convoArea.innerHTML += `<div class="botResponse"><p class="reponse">To help me clarify your goal, please choose an option from the following list:<br>• Payments<br>• Where can I apply for a loan?<br>• I need to get a loan<br>• None of these</p>${curTime}</div>`;
            convoArea.lastElementChild.scrollIntoView(false);
        }, 550);
        convoArea.lastElementChild.scrollIntoView(false)
    }
    if(/payment/i.test(userInput)){
        setTimeout(() => {
            convoArea.innerHTML += `<div class="botResponse"><p class="reponse">You are able to make loan payments through Mobile Banking or e-Branch Home Banking here <a href="https://texellcu.financialhost.org/Login">Texell Loan Assistance</a>. Or, type "Representative" for live chat assistance during business hours. 


            Did this answer your question (Yes or No)?</p>${curTime}</div>`;
            convoArea.lastElementChild.scrollIntoView(false);
        }, 550);
    }
    
}


//Run Bot response function when press Enter

let userInput = document.getElementById('userInput');
userInput.addEventListener('keydown', (event) => {

    if(event.key === 'Enter'){
        chatBotResponses();

        const botTyping = document.createElement('div');
        botTyping.className = 'typing';
        botTyping.innerHTML = `<div class="typing"><p><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i></p>Typing...</div>`;
        convoArea.appendChild(botTyping);
        setTimeout(() => {
            convoArea.removeChild(botTyping)
        }, 445);
    };
})



// Run Bot response function when arrow clicked





//jQuery

$(document).ready(function() {
    const searchIcon = $('.fa-search');
    const findLocation = $('.fa-map-marker-alt');
    const searchBar = $(searchIcon).prev();

    $(searchBar).hide();
    
    $(searchIcon).click(function() {
        $(searchBar).toggle('slide');
        $(findLocation).toggle(300);
    });

    $(findLocation).click(function() {
        $(searchIcon).toggle('slide');
        $('.locations').toggle('slideDown');
    });
});