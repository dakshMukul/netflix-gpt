export const checkValidteData = (email, password) => {
  // if (name === "") return "Please enter your name.";
  if (email === "") return "Please enter the email id.";
  if (password === "") return "Please enter the password.";

  // const isNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);

  const isEmailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(password);

  // if (!/^[a-zA-Z\s]*$/.test(name)) {
  //   return "Names can only contain alphabetical characters and spaces.";
  // }
  if (!isEmailValid) {
    return "Email is not valid.";
  }

  if (!isPasswordValid) {
    return "Password is not valid.";
  }

  return null;
};
