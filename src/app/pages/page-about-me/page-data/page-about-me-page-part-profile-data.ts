import { IPagePartProfileData } from '../page-about-me.types';

export const pagePartProfileData: IPagePartProfileData = {
    header: 'Profile',
    lead: `I'm a PHP/JavaScript web developer`,
    aboutMe: {
        header: 'About me',
        paragraphs: [`
I am a web developer with a ten years of professional experience as back-end (PHP, MySQL)
and front-end (HTML, CSS, JavaScript, jQuery) programmer. Seven years of it is a remote work
for clients from US.
I have profound knowledge of developing web services and relational databases,
experience in common third-party APIs.
            `,
            `
My today priority is to grow as front-end developer
(HTML5, CSS3, AngularJS2, TypeScript, Less, Sass).
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
