let Simbolo = 0
let Numero1 = 0
let Numero2 = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Simbolo += 1
    if (Simbolo == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (Simbolo == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (Simbolo == 4) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (Simbolo == 5) {
        Simbolo = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    Numero1 += 1
    basic.showNumber(Numero1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Numero1 = 0
    Numero2 = 0
    Simbolo = 0
})
input.onButtonPressed(Button.AB, function () {
    if (Simbolo == 1) {
        basic.pause(1500)
        basic.showNumber(Numero1 + Numero2)
    } else if (Simbolo == 3) {
        basic.pause(1500)
        basic.showNumber(Numero1 * Numero2)
    } else if (Simbolo == 4) {
        basic.pause(1500)
        basic.showNumber(Numero1 / Numero2)
    } else {
        basic.pause(1500)
        basic.showNumber(Numero1 - Numero2)
    }
})
input.onButtonPressed(Button.B, function () {
    Numero2 += 1
    basic.showNumber(Numero2)
})
