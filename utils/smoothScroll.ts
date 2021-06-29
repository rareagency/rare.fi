export const smoothScroll = (url: string, event: React.MouseEvent) => {
  const contact = document.getElementById(url);

  if (contact && event) {
    event.preventDefault();
    contact.scrollIntoView({ behavior: "smooth" });
  }
};
