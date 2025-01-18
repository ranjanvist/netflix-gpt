const TruncatedText = ({ overview, maxLength }) => {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return <p>{truncateString(overview, maxLength)}</p>;
};

export default TruncatedText;
