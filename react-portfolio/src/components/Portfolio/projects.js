// screenshots
import cinemafiles from './screenshots/cinemafiles.jpg';
import nomadicAdventures from './screenshots/nomadic-adventures.jpg';

// icons

import api from './icons/api-svgrepo-com.svg';
import bulma from './icons/bulma.svg';
import css from './icons/css.svg';
import html from './icons/html.svg';
import expressjs from './icons/expressjs-icon.svg';
// import bootstrap from './icons/getbootstrap-icon.svg';
import git from './icons/git-scm-icon.svg';
// import bash from './icons/gnu_bash-icon.svg';
import handlebarsjs from './icons/handlebarsjs-icon.svg';
import javascript from './icons/javascript.svg';
import jquery from './icons/jquery-icon.svg';
import mysql from './icons/mysql-icon.svg';
import nodejs from './icons/nodejs-icon.svg';
import sequelizejs from './icons/sequelize-seeklogo.com.svg';



const projects = [
    {
        name: "Nomadic Adventures",
        desc: "Nomadic Adventures is an online travel site that allows the user to search their desire location of travel and return the best airfare for that location.",
        imgPath: nomadicAdventures,
        tech: [
            {
                name: "HTML",
                path: html
            },
            {
                name: "CSS",
                path: css
            },
            {
                name: "javaScript",
                path: javascript
            },
            {
                name: "bulma",
                path: bulma
            },
            {
                name: "JQuery",
                path: jquery
            },
            {
                name: "API",
                path: api
            },
            {
                name: "Git",
                path: git
            },
        ],
        repo: "https://github.com/JesusGonzalez05/Boolean-hooligans",
        deployed: "https://jesusgonzalez05.github.io/Boolean-hooligans/",
    },
    {
        name: "Cinemafiles",
        desc: "This application allows users to browse through movies and tv show or search for specific titles. Access movie reviews and post your own by signing up.",
        imgPath: cinemafiles,
        tech: [
            {
                name: "HTML",
                path: html
            },
            {
                name: "CSS",
                path: css
            },
            {
                name: "javaScript",
                path: javascript
            },
            {
                name: "Nodejs",
                path: nodejs
            },
            {
                name: "bulma",
                path: bulma
            },
            {
                name: "MySQL",
                path: mysql
            },
            {
                name: "Sequelize",
                path: sequelizejs
            },
            {
                name: "Handlebars.js",
                path: handlebarsjs
            },
            {
                name: "Express.js",
                path: expressjs
            },
            {
                name: "API",
                path: api
            },
            {
                name: "Git",
                path: git
            },
        ],
        repo: "https://github.com/sangki810/Project-2-The-Cinemaphiles",
        deployed: "https://cinemafiles-by-cinemaphiles.herokuapp.com/",
    }
];

export default projects;