// make an address object with a street city and zipcode
let address = {
    street: '10800 McCombs st',
    city: 'El Paso',
    zipCode: 89214
  }
  
  function showAddress(address){
    for (let key in address)
    console.log(key, address[key])
  }
  showAddress(address)
  
  // factory function
  function createAddress(street, city, zipCode) {
    return {
      street,
      city,
      zipCode
    }
  }
  let address1 = createAddress('homes st.', 'taylor', '80214')
  console.log(address1)


  // constructor function
  function MakeAddress(street, city, zipCode){
    this.street = street;
    this.cty = city;
    this.zipCode = zipCode;
  }
  let address3 = new MakeAddress('burling st.', 'austin', '79987')
  console.log(address3)
  // Object equality
  let address4 = new MakeAddress('burling st.', 'austin', '79987')
  console.log(address4)


  function areEqual(add1, add2){
    return add1.street  === add2.street &&
    add1.city === add2.city &&
    add1.zipCode === add2.zipCode;
  }
  let equal = areEqual(address3, address4)
  console.log(equal)
  
  function areSame(add1, add2){
    return add1 === add2;
  }
  
  console.log(areSame(address3, address4))
  