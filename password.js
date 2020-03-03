const passwordObfuscator = function(password) {

  let obfuscatePassword = "";
  for (let i = 0; i < password.length; i++) {
    switch (password[i]) {
      case 'a':
        obfuscatePassword += '4';
        break;
      case 'e':
        obfuscatePassword += '3';
        break;
      case 'o':
        obfuscatePassword += '0';
        break;
      case 'l': 
        obfuscatePassword += '1';
        break;
      default:
        obfuscatePassword += password[i];
        break;
    }
  }
  console.log(obfuscatePassword);
}

passwordObfuscator(process.argv.slice(2)[0]);