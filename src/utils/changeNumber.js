export default function changeNumber(number) {
  number = number.toString().trim();
  if (number.length < 4) {
  } else if (number.length === 4) {
    if (number[1] !== 0) {
      number = number[0] + '.' + number[1] + 'K';
    } else {
      number = number[0] + 'K';
    }
  } else if (number.length > 4 && number.length < 7) {
    number = [...number];

    number[number.length - 3] = 'K';
    number = number
      .reduce((total, value, index) => {
        return index > 1 ? [...total, number[number.length - index - 1]] : [...total, ''];
      }, [])
      .reverse()
      .join('');
  } else if (number.length === 7) {
    if (number[1] !== 0) {
      number = number[0] + '.' + number[1] + 'M';
    } else {
      number = number[0] + 'M';
    }
  } else if (number.length > 7 && number.length < 10) {
    number = [...number];

    number[number.length - 6] = 'M';
    number = number
      .reduce((total, value, index) => {
        return index > 4 ? [...total, number[number.length - index - 1]] : [...total, ''];
      }, [])
      .reverse()
      .join('');
  } else if (number.length === 10) {
    if (number[1] !== 0) {
      number = number[0] + '.' + number[1] + 'B';
    } else {
      number = number[0] + 'B';
    }
  }
  return number;
}
