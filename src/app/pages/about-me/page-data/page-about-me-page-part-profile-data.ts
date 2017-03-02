import { IPagePartProfileData } from '../page-about-me.types';

export const pagePartProfileData: IPagePartProfileData = {
    header: 'Profile',
    lead: `I'm a front-end web developer`,
    aboutMe: {
        header: 'About me',
        paragraphs: [`
I am a web developer with a ten years of professional experience as full-stack
(JavaScript, HTML, CSS, PHP, MySQL) programmer. Seven years of it is a remote work
for clients from USA and Europe.
I have profound knowledge of developing web services and relational databases,
experience in common third-party APIs.
            `,
            `
My today priority is to grow as front-end developer 
(ECMAScript (JavaScript), HTML, CSS, TypeScript, Angular, ReactJS).
Also I’m interested to learn and use a new technologies of 
application design and build automation as Gulp, Webpack, Jasmine, 
Protractor, BEM, SASS, PostCSS and etc.
            `]
    },
    detail: {
        header: 'Details',
        fullNameLabel: 'Name',
        fullName: 'Prokofyev Alexander',
        ageLabel: 'Age',
        age: '30 years',
        locationLabel: 'Location',
        location: 'Vladimir state, Russian Federation'
    },
};
