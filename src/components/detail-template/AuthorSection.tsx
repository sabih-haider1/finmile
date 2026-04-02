import Image from 'next/image';

interface AuthorInfo {
  name: string;
  bio?: string;
  avatar_url?: string;
  email?: string;
}

interface AuthorSectionProps {
  author?: AuthorInfo | string;
  className?: string;
}

export function AuthorSection({ author, className = '' }: AuthorSectionProps) {
  if (!author) {
    return null;
  }

  // Handle string author names (backward compatibility)
  if (typeof author === 'string') {
    return (
      <section className={`w-full my-12 md:my-16 py-12 border-t border-gray-100 ${className}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h3 className="text-sm font-bold text-gray-500 tracking-wider mb-3 uppercase">Written by</h3>
            <p className="text-xl font-bold text-[#2D126B]">{author}</p>
          </div>
        </div>
      </section>
    );
  }

  // Handle full author object
  const { name, bio, avatar_url, email } = author;

  return (
    <section className={`w-full my-12 md:my-16 py-12 border-t border-gray-100 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <h3 className="text-sm font-bold text-gray-500 tracking-wider mb-8 uppercase">About the author</h3>

          <div className="flex gap-6 md:gap-8 items-center">
            {/* Avatar */}
            {avatar_url && (
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full overflow-hidden shadow-md">
                <Image
                  src={avatar_url}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            )}

            {/* Author info */}
            <div className="flex-1">
              <h4 className="text-xl md:text-2xl font-bold text-[#2D126B] mb-3">{name}</h4>

              {bio && (
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  {bio}
                </p>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-[#6A27D4] hover:text-[#531FD1] font-semibold text-sm transition-colors"
                >
                  <span className="text-lg">✉️</span>
                  {email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
