export const scrollToBottom = (objectRef) => {
  objectRef.current.scrollIntoView({ behavior: "smooth" });
};