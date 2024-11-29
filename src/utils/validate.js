export const checkValidateData = (email, password, fName) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //   const isValidFullName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fName);
  if (!isEmailValid) {
    return "Invalid email id";
  }
  if (!isValidPassword) {
    return "Please enter strong password";
  }
  //   if (!isValidFullName) {
  //     return "Please enter first and last name";
  //   }

  return null;
};
