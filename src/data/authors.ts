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
        bio: 'Formerly Compass Group and Reef. Leads operational excellence, fleet scaling, and customer success.',
        image: '/assets/images/chris.png',
        linkedin: 'https://www.linkedin.com/in/chrisjsargeant/'
    },
    {
        name: 'Rich Pleeth',
        role: 'Co-Founder & CEO',
        bio: 'Formerly at Google and Bolt. Drives growth strategy, partnerships, and go-to-market expansion.',
        image: '/assets/images/rich.png',
        linkedin: 'https://www.linkedin.com/in/richpleeth/'
    },
    {
        name: 'Alex Chindris',
        role: 'Chief Technology Officer',
        bio: 'AI and geospatial systems architect focused on routing algorithms, ML analytics, and scalable logistics infrastructure.',
        image: '/assets/images/alex.png',
        linkedin: 'https://www.linkedin.com/in/alexandru-chindris-628b68a2/'
    },
    {
        name: 'Andrei Chirila',
        role: 'Head of Product',
        bio: 'Mobility and fleet management SaaS leader focused on product development, UX, and customer feedback loops.',
        image: '/assets/images/andrei.png',
        linkedin: 'https://www.linkedin.com/in/chirilaandr/'
    },
    {
        name: 'Hiren Solanki',
        role: 'Head of Central Operations',
        bio: 'Leads large-scale courier operations, route auditing, compliance, and SLA performance delivery.',
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
