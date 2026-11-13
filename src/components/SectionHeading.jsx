import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
  eyebrowColor = "text-primary",
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {eyebrow && (
        <span className={`${eyebrowColor} font-label-sm text-label-sm uppercase tracking-widest block mb-2`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-headline-xl text-headline-xl-mobile sm:text-headline-xl font-bold mb-4 ${
        isDark ? 'text-clean-white' : 'text-institutional-navy'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`font-body-lg text-body-lg ${
          isDark ? 'text-white/80' : 'text-secondary'
        } leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};
