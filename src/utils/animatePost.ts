export function getAnimationDelay(index: number) {
  const mobileRow = index;
  const tabletRow = Math.floor(index / 2);
  const desktopRow = Math.floor(index / 3);

  return {
    base: `${mobileRow * 100}ms`,
    tablet: `${tabletRow * 100}ms`,
    desktop: `${desktopRow * 100}ms`
  };
}

export function getAnimationStyles(index: number) {
  const delays = getAnimationDelay(index);
  return `
    animation-delay: ${delays.base};
    @media (min-width: 768px) { animation-delay: ${delays.tablet}; }
    @media (min-width: 1024px) { animation-delay: ${delays.desktop}; };
    animation-fill-mode: forwards;
  `;
}

export const postAnimationClass = 'flex flex-col h-full opacity-0 animate-fade-up'; 