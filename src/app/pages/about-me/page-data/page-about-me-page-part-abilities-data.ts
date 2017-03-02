
import { IPagePartAbilitiesData } from '../page-about-me.types';

export const pagePartAbilitiesData: IPagePartAbilitiesData = {
    header: 'Abilities',
    subParts: [
        {
            header: 'Skills',
            listItems: [
                {
                    title: 'JavaScript',
                    score: 5
                },
                {
                    title: 'TypeScript',
                    score: 5
                },
                {
                    title: 'DOM, BOM',
                    score: 4
                },
                {
                    title: 'HTML',
                    score: 4
                },
                {
                    title: 'CSS',
                    score: 3
                },
                {
                    title: 'Node.js',
                    score: 4
                },
                {
                    title: 'AngularJS 2',
                    score: 4
                },
                {
                    title: 'jQuery',
                    score: 4
                },
                {
                    title: 'Express (framework for Node.js)',
                    score: 3
                },
                {
                    title: 'PHP',
                    score: 5
                },
                {
                    title: 'MySQL',
                    score: 4
                },
                {
                    title: 'Silex (PHP micro-framework)',
                    score: 4
                },
                {
                    title: 'Twig (template engine for PHP)',
                    score: 4
                },
                {
                    title: 'Laravel (PHP framework)',
                    score: 2
                }
            ],
            projectInfo: {
                description: 'This project is build using Angular2 + TypeScript, ' +
                'Twitter Bootstrap, jQuery, Webpack, SCSS, Pug template engine.',
                url: 'https://github.com/ProkofyevAlexander/personal-page',
                btnText: 'See project on GitHub'
            }
        },
        {
            header: 'Languages',
            listItems: [
                {
                    title: 'Russian (Mother tongue)',
                    score: 5
                },
                {
                    title: 'English (Intermediate)',
                    score: 3
                }
            ]
        },
        {
            header: 'Tools',
            listItems: [
                {
                    title: 'PhpStorm',
                    score: 5
                },
                {
                    title: 'Git',
                    score: 4
                },
                {
                    title: 'SVN',
                    score: 4
                },
                {
                    title: 'Gulp',
                    score: 4
                },
                {
                    title: 'Selenium IDE',
                    score: 3
                },
                {
                    title: 'Selenium WebDriver',
                    score: 3
                },
                {
                    title: 'Vagrant',
                    score: 3
                },
                {
                    title: 'Adobe Photoshop',
                    score: 3
                }
            ]
        }
    ]
};
