export interface Author {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
}

export const authors: Author[] = [
    {
        name: 'Chris Sargeant',
        role: 'Co-Founder & COO',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/chris.png'
    },
    {
        name: 'Rich Pleeth',
        role: 'Co-Founder & CEO',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/rich.png'
    },
    {
        name: 'Alex Chindris',
        role: 'Chief Technology Officer',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/alex.png'
    },
    {
        name: 'Andrei Chirila',
        role: 'Head of Product',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/andrei.png'
    },
    {
        name: 'Hiren Solanki',
        role: 'Co-Founder & CEO',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/hiren.png'
    }
];

export const getAuthorByName = (name?: string | null): Author | undefined => {
    if (!name) return undefined;
    return authors.find(
        (author) => author.name.toLowerCase() === name.toLowerCase()
    );
};
