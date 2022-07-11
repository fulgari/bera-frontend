const today = () => new Date();

function getToday(): string {
  const dt = today();
  const day = new String(dt.getDate()).padStart(2, "0");
  const month = new String(dt.getMonth() + 1).padStart(2, "0");
  const year = dt.getFullYear();
  return `${year}-${month}-${day}`;
}

function substract(dt: Date, value: number, unit: "d" | "m" | "y" = "d"): string {
  const time = dt.getTime();
  switch (unit) {
    case "d":
      dt.setTime(time - value * 24 * 60 * 60 * 1000);
      break;
    case "m":
      dt.setTime(time - value * 30 * 24 * 60 * 60 * 1000);
      break;
    case "y":
      dt.setTime(time - value * 365 * 24 * 60 * 60 * 1000);
      // dt.setFullYear(dt.getFullYear() - value);
      break;
    default:
      dt.setTime(time - value * 24 * 60 * 60 * 1000);
      break;
  }
  const day = new String(dt.getDate()).padStart(2, "0");
  const month = new String(dt.getMonth() + 1).padStart(2, "0");
  const year = dt.getFullYear();
  return `${year}-${month}-${day}`;
}

export { today, getToday, substract };
