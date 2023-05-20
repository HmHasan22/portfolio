import {Fira_Code, Inter, Kanit} from 'next/font/google';
import localFont from 'next/font/local';

export const segio = localFont({
    variable: '--font-segio',
    src: [
        {
            path: '../public/fonts/Segoe_regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Segoe_bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
});
export const fira_code = Fira_Code({
    subsets: ['latin'],
    variable: '--font-fira-code',
});
export const kanit = Kanit({
    weight: '400',
    variable: '--font-kanit',
    subsets: ['latin'],
});

export const inter = Inter({
    weight: '400',
    variable: '--font-inter',
    subsets: ['latin'],
});