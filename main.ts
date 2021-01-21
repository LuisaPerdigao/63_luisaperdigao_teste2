input.onButtonPressed(Button.A, function () {
    num1 = num1 + 1
    basic.showNumber(num1)
})
input.onGesture(Gesture.Shake, function () {
    num1 = 0
    num2 = 0
    resultado = 0
    basic.showNumber(resultado)
})
input.onButtonPressed(Button.AB, function () {
    resultado = num1 + num2
    basic.showNumber(resultado)
})
input.onButtonPressed(Button.B, function () {
    num2 = num2 + 1
    basic.showNumber(num2)
})
let resultado = 0
let num2 = 0
let num1 = 0
basic.showString("Soma")
