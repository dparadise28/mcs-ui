// took out of computed for flexibility (maybe abstract them out to centralize all validation and pull in on page load)
function email_format_check(store) {
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(store.data_models.user.email);
};
function username_format_check(data) {
    const usernameRegexp = /^[a-zA-Z0-9]+$/;
    return usernameRegexp.test(data);
};
function password_format_check(store) {
    /**
          * (?=.*\d)         should contain at least 1 digit
          * (?=(.*\W))       should contain at least 1 special characters
          * (?=.*[a-zA-Z])   should contain at least 1 alphabetic character
          * (?!.*\s)         should not contain any blank space
          * {8,30}           8 <= pw length <= 30
    */
    const pwRegexp = /^(?=.*\d)(?=(.*\W))(?=.*[a-zA-Z])(?!.*\s).{8,30}$/;
    return pwRegexp.test(store.data_models.user.password);
};
function categories_format_check(store) {
    if (store.data_models.user.store_categories.length > 0) {
      return true;
    }; return false
};


function store_address_format_check(store) {
    if (store.address) {
      return true;
    }; return false
};
