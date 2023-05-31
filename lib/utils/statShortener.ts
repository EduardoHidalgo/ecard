export function statShortener(stat: number): string {
  const digits = String(stat).length;
  const thousandsLength = 4;
  const millionsLength = 7;
  const thousand = "K";
  const million = "M";

  if (digits >= thousandsLength && digits < millionsLength) {
    const reduced = +(stat / 1000).toFixed(2);
    return `${reduced} ${thousand}`;
  } else if (digits >= millionsLength) {
    const reduced = +(stat / 1000000).toFixed(2);
    return `${reduced} ${million}`;
  } else return String(stat);
}
