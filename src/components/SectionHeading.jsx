import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
  eyebrowColor = "text-atria-red",
  theme = "light",
  className = ""
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          {centered && <span className="h-px w-6 bg-atria-red/40" />}
          <span className={`${eyebrowColor} font-nav text-xs font-semibold tracking-wider uppercase`}>
            {eyebrow}
          </span>
          {centered && <span className="h-px w-6 bg-atria-red/40" />}
        </div>
      )}
      <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
        isDark ? 'text-clean-white' : 'text-yc-dark'
      } leading-tight`}>
        {title}
      </h2>
      {description && (
        <p className={`font-body text-base sm:text-lg ${
          isDark ? 'text-white/70' : 'text-yc-muted'
        } leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};
