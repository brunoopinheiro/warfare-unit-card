const stringToArray = (initialString) => {
  const arr = initialString.split('\n')
    .filter(item => item !== '');

  return arr;
}

export default stringToArray;
