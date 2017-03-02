import { IPagePartExperiencesData } from '../page-about-me.types';

export const pagePartExperiencesData: IPagePartExperiencesData = {
    header: 'Experiences',
    educationsHeader: 'Educations',
    educations: [
        {
            university: 'Vladimir State University',
            period: 'September 2003 - June 2009',
            faculty: 'Information Technology',
            qualification: 'Master of Engineering (M.Eng.)',
            location: 'Internally'
        }
    ],
    careersHeader: 'Careers',
    careers: [
        {
            company: 'isone.tech',
            period: 'May 2016 – Present',
            position: 'Front-end developer',
            // siteUrl: 'https://imanagerent.com/',
            role: `
                Angular2+TypeScript development. 
                Other used libraries and technologies: Leaflet, Mapbox GL JS, 
                Canvas API, Web Workers API, JS Typed Arrays, SVG, Node.js, TSLint,
                Gulp, SystemJS, Karma, Twitter Bootstrap.`
        },
        {
            company: 'iManageRent - Property management system',
            period: 'March 2011 – Present',
            position: 'Full-stack developer',
            siteUrl: 'https://imanagerent.com/',
            role: 'Web development (PHP, JavaScript, MySQL, jQuery, Silex, Twig, third-party APIs)'
        },
        {
            company: 'The Institute of Informatics Problems of The Russian Academy of Sciences',
            period: 'August 2009 – June 2012',
            position: 'Experimental engineer',
            siteUrl: 'http://ipiran.ru/',
            role: 'Hardware development (VHDL). Web development (PHP, JavaScript, HTML, CSS, XML, XSLT).'
        },
        {
            company: 'Gnosis Project System',
            period: 'June 2007 – September 2008',
            position: 'Full-stack Developer',
            siteUrlText: 'http:/www.gnosistools.com/',
            siteUrl: 'https://web.archive.org/web/20140711182750/http:/www.gnosistools.com/',
            role: 'Project System support and functionality extension (Perl, MySQL, JavaScript, XML, HTML, CSS, jQuery)'
        },
        {
            company: 'Own CMS',
            period: '2005 - 2009',
            position: 'Full-stack Developer',
            role: '	Architecture design and development (PHP, MySQL, JavaScript, HTML, CSS)',
            sites: [
                {
                    text: 'Unofficial site of specialty',
                    urlText: '2301.ru',
                    url: 'https://web.archive.org/web/20060506080348/http:/2301.ru/',
                },
                {
                    text: 'Official site of the facility',
                    urlText: 'fit.vlsu.ru',
                    url: 'https://web.archive.org/web/20080302034002/http:/www.fit.vlsu.ru/',
                }
            ]
        }
    ]
};
