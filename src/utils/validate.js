const isRequired = (value, callback) => {
  if (value.length === 0) {
    callback('input field is blank');
    return true;
  }

  return false;
};

const isEmail = (value, callback) => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    callback('you have entered an invalid email adress');
    return true;
  }

  return false;
};
const checkConFirmPassword = (value, confirmValue, callback) => {
  if (value !== confirmValue) {
    callback(`Incorrect password validation`);
    return true;
  }

  return false;
};
const maxLength = (value, callback, length) => {
  if (value.length > length) {
    callback(`input field is over ${length} characters`);
    return true;
  }

  return false;
};
const isExist = () => {};
const validate = { maxLength, isEmail, isExist, isRequired, checkConFirmPassword };
export default validate;
