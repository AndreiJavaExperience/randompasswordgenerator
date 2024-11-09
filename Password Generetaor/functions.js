function generatePasswords() {
    var length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=",
        password1 = "",
        password2 = "";
    
    for (var i = 0, n = charset.length; i < length; ++i) {
      password1 += charset.charAt(Math.floor(Math.random() * n));
      password2 += charset.charAt(Math.floor(Math.random() * n));
    }
    
    document.getElementById("password1").value = password1;
    document.getElementById("password2").value = password2;
  }
  
  
  
