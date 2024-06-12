export const getFontSizeFromLevel = (level: number) => {
  return (
    {
      1: "text-6xl",
      2: "text-5xl",
      3: "text-4xl",
      4: "text-3xl",
      5: "text-2xl",
      6: "text-xl",
    }[level] || ""
  );
};