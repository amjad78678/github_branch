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