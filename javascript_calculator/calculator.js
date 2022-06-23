let n1 =window.prompt("enter your first number")
let oper = window.prompt("enter your operator(+, -, x and / )")
let n2 =window.prompt("enter your second number")
let total = undefined

if (oper == '+')
  {
    total = parseInt(n1) + parseInt(n2)
    alert(n1 + " + " + n2 + " = " + total)
  }

else {
  if (oper == '-')
  {
    total = parseInt(n1) - parseInt(n2)
    alert(n1 + " - " + n2 + " = " + total)
  }
  if (oper == 'x')
  {
    total = parseInt(n1) * parseInt(n2)
    alert(n1 + " x " + n2 + " = " + total)
  }
  if (oper == '/')
  {
    total = parseInt(n1) / parseInt(n2)
    alert(n1 + " - " + n2 + " = " + total)
  }
}
