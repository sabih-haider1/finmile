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
        image: '/assets/images/chris.png',
        linkedin: 'https://www.linkedin.com/in/chrisjsargeant/'
    },
    {
        name: 'Rich Pleeth',
        role: 'Co-Founder & CEO',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/rich.png',
        linkedin: 'https://www.linkedin.com/in/richpleeth/'
    },
    {
        name: 'Alex Chindris',
        role: 'Chief Technology Officer',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/alex.png',
        linkedin: 'https://www.linkedin.com/in/alexandru-chindris-628b68a2/'
    },
    {
        name: 'Andrei Chirila',
        role: 'Head of Product',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/andrei.png',
        linkedin: 'https://www.linkedin.com/in/chirilaandr/'
    },
    {
        name: 'Hiren Solanki',
        role: 'Co-Founder & CEO',
        bio: 'Former Google & Bolt. Leads vision, partnerships, and GTM.',
        image: '/assets/images/hiren.png',
        linkedin: 'https://www.linkedin.com/in/hirenkumar-solanki/'
    }
];

export const getAuthorByName = (name?: string | null): Author | undefined => {
    if (!name) return undefined;
    return authors.find(
        (author) => author.name.toLowerCase() === name.toLowerCase()
    );
};

export interface AuthorProfile {
    name: string;
    role: string;
    bio: string;
    avatar_url: string;
    linkedin?: string;
}

export const getAuthorProfileByName = (name?: string | null): AuthorProfile | undefined => {
    const author = getAuthorByName(name);
    if (!author) return undefined;

    return {
        name: author.name,
        role: author.role,
        bio: author.bio,
        avatar_url: author.image,
        linkedin: author.linkedin,
    };
};
