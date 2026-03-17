import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { Author } from '@/data/authors';

interface AuthorProfileProps {
    author: Author;
}

export const AuthorProfile: React.FC<AuthorProfileProps> = ({ author }) => {
    return (
        <section className="w-full max-w-[800px] mx-auto mt-16 px-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 group transition-all duration-300 hover:bg-white/[0.05]">
                
                {/* Image Section */}
                <div className="relative shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(106,39,212,0.2)] group-hover:shadow-[0_0_40px_rgba(106,39,212,0.4)] transition-all duration-500">
                    <Image
                        src={author.image}
                        alt={author.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center sm:text-left flex flex-col items-center sm:items-start">
                    <div className="flex flex-col sm:flex-row items-center sm:justify-between w-full mb-4 gap-4">
                        <div>
                            <h3 className="text-[24px] font-bold text-white mb-1">
                                {author.name}
                            </h3>
                            <p className="text-[#A78BFA] font-medium text-[15px] tracking-wide">
                                {author.role}
                            </p>
                        </div>
                        {author.linkedin && (
                            <a
                                href={author.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#6A27D4] hover:border-[#6A27D4] transition-all duration-300 shrink-0"
                                aria-label={`LinkedIn profile for ${author.name}`}
                            >
                                <Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0.5} />
                            </a>
                        )}
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-4 hidden sm:block"></div>

                    <p className="text-[#9CA3AF] text-[15px] leading-relaxed font-medium">
                        {author.bio}
                    </p>
                </div>
            </div>
        </section>
    );
};
