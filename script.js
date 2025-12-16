function checkpasswordstrength(){
    const password=document.getElementById("password").Value;
    const specialCharacters="!\"#$'()*+,-./:;<=>?@[\\]^_'{|}";

    let passwordStrength = 0;
    //length check
    if(password.length >= 8 && password.length<12){
        passwordStrength += 0.5;
    }else if(password.length >= 12){
        passwordStrength += 1;
    }

    //Digit check
    if(/[0-9]/.test(password)){
        passwordStrength += 1;
    }

    //special character check
    if([...password].some(char => specialCharacters.includes(char))){
        passwordStrength += 1;
    }

    //Uppercase & Lowercase check
    if(/[A-Z]/.test(password)&&/[a-z]/.test(password)){
        passwordStrength +=1;
    }else if(/[A-Za-z]/.test(password)){
        passwordStrength += 0.5;
    }

    let strengthCategory = "";
    if(passwordStrength >= 3){
        strengthCategory = "Strong";
    }else if(passwordStrength >= 2){
        strengthCategory = "Modrate";
    }else{
        strengthCategory="Weak";
    }

    document.getElementById("strength").innerText= "Password Strength:" + strengthCategory;
    document.getElementById("score").innerText = "Password Score:" + passwordStrength;
}