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
            company: 'iManageRent - Property management system',
            period: 'March 2011 – April 2015',
            position: 'Web Developer',
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
            company: 'nosis Project System',
            period: 'June 2007 – September 2008',
            position: 'Web Developer',
            role: 'Project System support and functionality extension (Perl, MySQL, JavaScript, XML, HTML, CSS, DOM)'
        }
    ]
};
