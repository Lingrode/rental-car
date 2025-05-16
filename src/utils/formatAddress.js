export function formatAddress(address) {
  if (!address) return "";

  const parts = address.split(",").map((part) => part.trim());

  if (parts.length >= 2) {
    const city = parts[parts.length - 2];
    const country = parts[parts.length - 1];
    return `${city} | ${country}`;
  }

  return address;
}
