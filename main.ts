input.onButtonPressed(Button.A, function () {
    SuperBit.Servo(SuperBit.enServo.S5, 0)
})
input.onButtonPressed(Button.B, function () {
    SuperBit.Servo(SuperBit.enServo.S5, 90)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    _10cents20cents = _10cents + _20cents
    total = _50cents + _10cents20cents
    basic.showNumber(total)
})
let ultrasonic = 0
let total = 0
let _10cents20cents = 0
let _50cents = 0
let _20cents = 0
let _10cents = 0
_10cents = 0
_20cents = 0
_50cents = 0
_10cents20cents = 0
total = 0
basic.forever(function () {
    ultrasonic = CrocoKit_Sensor.Ultrasonic(DigitalPin.P1, DigitalPin.P0)
    if (ultrasonic == 4) {
        _10cents += 0.1
        CrocoKit.Music_Handle(CrocoKit.enMusic.dadadum)
        basic.showNumber(0.1)
        basic.clearScreen()
    } else if (ultrasonic == 7) {
        _20cents += 0.2
        CrocoKit.Music_Handle(CrocoKit.enMusic.dadadum)
        basic.showNumber(0.2)
        basic.clearScreen()
    } else if (ultrasonic == 9) {
        _50cents += 0.5
        CrocoKit.Music_Handle(CrocoKit.enMusic.dadadum)
        basic.showNumber(0.5)
        basic.clearScreen()
    }
    basic.showLeds(`
        . # # # .
        # # . # #
        . # . # .
        # # . # #
        . # # # .
        `)
})
