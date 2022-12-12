input.onButtonPressed(Button.A, function () {
    if (eigeneNummer < 9) {
        eigeneNummer += 1
    }
    basic.showNumber(eigeneNummer)
})
pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    radio.sendString("" + (counter))
    led.unplot(4, 0)
    basic.showNumber(counter)
})
pins.onPulsed(DigitalPin.P1, PulseValue.High, function () {
    basic.clearScreen()
    counter = 0
    led.plot(4, 0)
})
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    led.unplot(0, 0)
})
input.onButtonPressed(Button.B, function () {
    if (eigeneNummer > 0) {
        eigeneNummer += -1
    }
    basic.showNumber(eigeneNummer)
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    led.plot(0, 0)
    if (counter < 9) {
        counter += 1
    } else {
        counter = 0
    }
})
let counter = 0
let eigeneNummer = 0
radio.setGroup(1)
eigeneNummer = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showNumber(counter)
basic.forever(function () {
    serial.writeLine("" + pins.digitalReadPin(DigitalPin.P1) + " " + pins.digitalReadPin(DigitalPin.P0))
})
