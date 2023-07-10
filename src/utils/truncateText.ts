function truncateText(text: string, maxCharacters: number) {
  return text.length > maxCharacters ? `${text.substring(0, maxCharacters - 3)}...` : text;
}

export default truncateText;
