const createPhoneNumber = (str) => '(' + str.substr(0,3) + ') ' + str.substr(3,3) + '-' + str.substr(6,4);
  console.log(createPhoneNumber('7772304563'))