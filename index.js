console.log("initial commit");
//some configuration in master branch like listening

async function getDetails() {
  return new Promise((resolve, reject) => {
    const name = "amjad";
    const email = "amjad@gmail.com";
    const password = "123456";
    resolve({ name, email, password });
  });
}

async function signup() {
  const { name, email, password } = await getDetails();
  console.log(name, email, password);
}


signup();




//after testing the all code of the feature branch i need to merge this feature branch to develop


async function login (){

   let email = 'some@gmail.com'
   let pass = '123456'

   return new Promise((resolve, reject) => {
       if (email == 'some@gmail.com' && pass == '123456'){
           resolve({email, pass})
       }else{
           reject('invalid')
       }
   })
}

//after testing the all code of the feature branch i need to merge this feature branch to develop


