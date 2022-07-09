const today = () => new Date();

function getToday(): string {
  const dt = today();
  const day = dt.getDay();
  const month = new String(dt.getMonth() + 1).padStart(2, "0");
  const year = dt.getFullYear();
  return `${year}-${month}-${day}`;
}

function substract(dt: Date, value: number, unit: "d" | "m" | "y" = "d"): string {
  switch (unit) {
    case "d":
      dt.setDate(dt.getDate() - value);
      break;
    case "m":
      dt.setMonth(dt.getMonth() - value);
      break;
    case "y":
      dt.setFullYear(dt.getFullYear() - value);
      break;
    default:
      dt.setDate(dt.getDate() - value);
      break;
  }
  const day = dt.getDay();
  const month = new String(dt.getMonth() + 1).padStart(2, "0");
  const year = dt.getFullYear();
  return `${year}-${month}-${day}`;
}

export { today, getToday, substract };
