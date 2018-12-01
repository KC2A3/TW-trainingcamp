function showLogicResult() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("pass").value;
  if (name === "123" && password === "123") {
    alert("登陆成功")
  } else {
    document.getElementById('tip').innerHTML = "用户名或密码错误"
  }
  return
}