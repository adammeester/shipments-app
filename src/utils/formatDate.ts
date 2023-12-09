export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  return `${month} ${day} ${year} ${hour}:${minute} ${ampm}`;
};
