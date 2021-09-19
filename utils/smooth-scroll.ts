export const smoothScroll = (url: string, event: React.MouseEvent) => {
  const element = document.getElementById(url);

  if (element && event) {
    event.preventDefault();
    element.scrollIntoView({ behavior: "smooth" });
  }
};
