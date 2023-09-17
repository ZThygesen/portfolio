import battleship1 from './images/battleship/1.png';
import battleship2 from './images/battleship/2.png';
import battleship3 from './images/battleship/3.png';
import battleship4 from './images/battleship/4.png';
import dc1 from './images/digital_closet/1.png';
import dc2 from './images/digital_closet/2.png';
import dc3 from './images/digital_closet/3.png';
import dc4 from './images/digital_closet/4.png';
import dc5 from './images/digital_closet/5.png';
import dc6 from './images/digital_closet/6.png';
import dc7 from './images/digital_closet/7.png';
import dc8 from './images/digital_closet/8.png';
import hangman1 from './images/hangman/1.png';
import hangman2 from './images/hangman/2.png';
import hangman3 from './images/hangman/3.png';
import hangman4 from './images/hangman/4.png';
import hangman5 from './images/hangman/5.png';
import hangman6 from './images/hangman/6.png';
import hangman7 from './images/hangman/7.png';
import ontrack1 from './images/ontrack/1.png';
import ontrack2 from './images/ontrack/2.png';
import ontrack3 from './images/ontrack/3.png';
import ontrack4 from './images/ontrack/4.png';
import ph1 from './images/pom_honey/1.png';
import ph2 from './images/pom_honey/2.png';
import ph3 from './images/pom_honey/3.png';
import ph4 from './images/pom_honey/4.png';
import ph5 from './images/pom_honey/5.png';
import ph6 from './images/pom_honey/6.png';
import pmc1 from './images/pmc_attendance/1.png';
import pmc2 from './images/pmc_attendance/2.png';
import pmc3 from './images/pmc_attendance/3.png';
import pmc4 from './images/pmc_attendance/4.png';
import pmc5 from './images/pmc_attendance/5.png';
import pmc6 from './images/pmc_attendance/6.png';
import pmc7 from './images/pmc_attendance/7.png';
import pmc8 from './images/pmc_attendance/8.png';
import pmc9 from './images/pmc_attendance/9.png';
import quizcabulary1 from './images/quizcabulary/1.png';
import quizcabulary2 from './images/quizcabulary/2.png';
import quizcabulary3 from './images/quizcabulary/3.png';
import quizcabulary4 from './images/quizcabulary/4.png';
import quizcabulary5 from './images/quizcabulary/5.png';
import quizcabulary6 from './images/quizcabulary/6.png';
import sketch1 from './images/etch_a_sketch/1.png';
import sketch2 from './images/etch_a_sketch/2.png';
import sketch3 from './images/etch_a_sketch/3.png';
import sketch4 from './images/etch_a_sketch/4.png';
import sketch5 from './images/etch_a_sketch/5.png';
import weather1 from './images/weather_forecast/1.png';
import weather2 from './images/weather_forecast/2.png';
import weather3 from './images/weather_forecast/3.png';
import weather4 from './images/weather_forecast/4.png';

export const projects = [
    {
        title: 'Digital Closet',
        codeLink: 'https://github.com/ZThygesen/digital-closet',
        images: [
            { src: dc1, alt: 'Home page of the app' },
            { src: dc2, alt: 'Manage clients view' },
            { src: dc3, alt: 'Main view of a client\'s digital closet: showing all items' },
            { src: dc4, alt: 'Viewing specific category a client\'s items ' },
            { src: dc5, alt: 'Viewing category with no items' },
            { src: dc6, alt: 'Page where you can add image files to a category' },
            { src: dc7, alt: 'Preview of the image files to be submitted' },
            { src: dc8, alt: 'Category being populated with the image files just submitted' }
        ],
        descriptions: [
            
        ]
    },
    {
        title: 'Parsons Mounted Cavalry Attendance',
        codeLink: 'https://github.com/ZThygesen/parsons-mounted-cavalry-attendance',
        images: [
            { src: pmc1, alt: 'Main scheduling feature of app' },
            { src: pmc2, alt: 'Usage counter showing how many days each horse has been scheduled that week' },
            { src: pmc3, alt: 'A list of all users\'s schedules' },
            { src: pmc4, alt: 'Sidebar with navigation options for the app' },
            { src: pmc5, alt: 'Table view of all horse information' },
            { src: pmc6, alt: 'Monthly report for horse usage' },
            { src: pmc7, alt: 'Monthly report for cadet attendance' },
            { src: pmc8, alt: 'Cadet-side view of weekly schedule' },
            { src: pmc9, alt: 'What it looks like when trying to check in with no scheduled attendance for the day' }
        ],
        descriptions: [
        
        ]
    },
    {
        title: 'Pom & Honey Point of Sale System',
        codeLink: 'https://github.com/ZThygesen/pom-and-honey-pos-system',
        images: [
            { src: ph1, alt: 'Home screen of the POS system' },
            { src: ph2, alt: 'The primary order screen with all potential food items' },
            { src: ph3, alt: 'Selecting options for building a bowl' },
            { src: ph4, alt: 'Bowl added to order and viewing the bowl\'s items' },
            { src: ph5, alt: 'Adding side options to order' },
            { src: ph6, alt: 'Final view of order screen with all items and prices' },
        ],
        descriptions: [
           
        ]
    },
    {
        title: 'Hangman',
        codeLink: 'https://github.com/ZThygesen/hangman',
        demoLink: 'https://zthygesen.github.io/hangman/',
        images: [
            { src: hangman1, alt: 'Beginning of Hangman game' },
            { src: hangman2, alt: 'Guessing letter incorrectly example' },
            { src: hangman3, alt: 'Guessing letter incorrectly example' },
            { src: hangman4, alt: 'Guessing letter correctly example' },
            { src: hangman5, alt: 'Guessing letter correctly example' },
            { src: hangman6, alt: 'Winning the game' },
            { src: hangman7, alt: 'Losing the game' },
        ],
        descriptions: [
            'Technologies: Python, JavaScript, HTML, CSS',
            'This web application is a recreation of a classic game: Hangman! Guess the letters to a secret word, but don\'t guess too many wrong! Or else... well... you know...',
            'The chalky hang stand and the progressional phases are custom designed. The word base was webscraped from a random word generator website using the Beautiful Soup library in Python. The scores are stored locally in the browser to keep track of your performance over time!'
        ]
    },
    {
        title: 'Weather Forecast',
        codeLink: 'https://github.com/ZThygesen/weather-forecast',
        demoLink: 'https://zthygesen.github.io/weather-forecast/',
        images: [
            { src: weather1, alt: 'Weather forecast for College Station' },
            { src: weather2, alt: 'Weather forecast for London' },
            { src: weather3, alt: 'Weather forecast with future forecast for London' },
            { src: weather4, alt: 'Closeup of future forecast for London' }
        ],
        descriptions: [
            'Technologies: JavaScript, HTML, CSS',
            'This weather forecasting app will give you basic weather data for any city, state, country; you name it! See the current temperature, condition, real feel, sunrise, sunset, humidity, pressure, wind speed and direction, and the next five days of weather for your selected location.',
            'This project makes use of OpenWeather API to fetch the requested location\'s weather data and display it to the screen.'
        ]
    },
    {
        title: 'Battleship',
        codeLink: 'https://github.com/ZThygesen/battleship',
        demoLink: 'https://zthygesen.github.io/battleship/',
        images: [
            { src: battleship1, alt: 'Deploying battleships' },
            { src: battleship2, alt: 'Start of game: displays both players\' boards (You vs Computer)' },
            { src: battleship3, alt: 'Early-game view of boards' },
            { src: battleship4, alt: 'Later-game view of boards' }
        ],
        descriptions: [
            'Technologies: JavaScript, Jest, HTML, CSS',
            'The game that everyone knows and loves: Battleship! Deploy your fleet of ships and take turns with the computer attacking each others\' fleets. Sink all of the computer\'s ships before it sinks yours to win.',
            'This project was created in an effort to practice test-driven development. Unit tests were created throughout the development process using the JavaScrpt testing library Jest. This resulted in far fewer bugs that were much easier to fix and a reduction in code complexity.'
        ]
    },
    {
        title: 'Etch-A-Sketch',
        codeLink: 'https://github.com/ZThygesen/etch-a-sketch',
        demoLink: 'https://zthygesen.github.io/etch-a-sketch/',
        images: [
            { src: sketch1, alt: 'Etch-A-Sketch interface with blank canvas' },
            { src: sketch2, alt: 'Canvas with smiley face' },
            { src: sketch3, alt: 'Smiley face with background color changed' },
            { src: sketch4, alt: 'Demonstration of increasing the number of squares in the grid' },
            { src: sketch5, alt: 'Toggling off the gridlines' }
        ],
        descriptions: [
            'Technologies: JavaScript, HTML, CSS',
            'This web application is a modernized, digital version of Etch-A-Sketch. Choose from several different tools to create whatever beautiful (or terrifying) art your heart desires! There is a pen with any color of your choice, a rainbow, shade and eraser option, and you can even change the background color. You can also toggle the gridlines, reset the board and change the size of the grid.',
            'This project makes heavy use of JavaScript to dynamically change the size of the grid, color the squares and toggle between different modes.'
        ]
    },
    {
        title: 'OnTrack',
        codeLink: 'https://github.com/ZThygesen/todo-list',
        demoLink: 'https://zthygesen.github.io/todo-list/',
        images: [
            { src: ontrack1, alt: 'Showing all tasks in OnTrack app' },
            { src: ontrack2, alt: 'Showing more details of specific task' },
            { src: ontrack3, alt: 'Editing task' },
            { src: ontrack4, alt: 'Showing tasks filtered by project' }
        ],
        descriptions: [
            'Technologies: JavaScript, HTML, CSS',
            'OnTrack is a web application to help you manage your tasks. You can create different projects and assign tasks to those projects. A task has a name, description, project (if desired), priority and an optional due date. Sort the tasks you are viewing by the day, week or project.',
            'This project makes use of object-oriented programming and local storage in JavaScript to store and organize task and project data.'
        ]
    },
    {
        title: 'QuizCabulary',
        codeLink: 'https://github.com/ZThygesen/quizcabulary',
        images: [
            { src: quizcabulary1, alt: 'Game menu for QuizCabulary' },
            { src: quizcabulary2, alt: 'Example of question in game' },
            { src: quizcabulary3, alt: 'Answering question incorrectly' },
            { src: quizcabulary4, alt: 'Answering question correctly' },
            { src: quizcabulary5, alt: 'Info for completed game: how many questions answered correctly' },
            { src: quizcabulary6, alt: 'How to play screen' }
        ],
        descriptions: [
            'Technologies: Python',
            'QuizCabulary is a fun learning tool to improve and test your vocabulary! It features 3 game modes. Two of them are matching as many definition-word or word-definition pairs correctly in a minute. The other is a time trial: match 10 pairs correctly as quick as you can.',
            'This vocabulary game was created with a team of three engineers during a coding hackathon: TAMUhack 2022. It makes use of the Beautiful Soup Python library to webscrape for all the words and their definitions. The game itself was created with Pygame.'
        ]
    }
];
