export const parseAttributes = (iconString: string) => {
  // Use regular expressions to find the values for the name and prefix attributes
  const nameMatch = iconString.match(/name="([^"]+)"/);
  const prefixMatch = iconString.match(/prefix="([^"]+)"/);

  const name = nameMatch ? nameMatch[1] : null;
  const prefix = prefixMatch ? prefixMatch[1] : null;

  return { name, prefix };
}