input.onButtonPressed(Button.A, function () {
    if (eigeneNummer < 9) {
        eigeneNummer += 1
    }
    basic.showNumber(eigeneNummer)
})
pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    radio.sendString("phone/onDialed " + counter)
    led.unplot(4, 0)
    basic.showNumber(counter)
})
pins.onPulsed(DigitalPin.P1, PulseValue.High, function () {
    radio.sendString("phone/onStartDial")
    basic.clearScreen()
    counter = 0
    led.plot(4, 0)
    control.waitMicros(2000)
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
    if (control.millis() - lastPulse > 70) {
        radio.sendString("phone/onPulse")
        led.plot(0, 0)
        if (counter < 9) {
            counter += 1
        } else {
            counter = 0
        }
        lastPulse = control.millis()
    }
})
let lastPulse = 0
let counter = 0
let eigeneNummer = 0
radio.setTransmitPower(7)
radio.setGroup(1)
radio.setFrequencyBand(42)
eigeneNummer = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showNumber(counter)
basic.forever(function () {
	
})
