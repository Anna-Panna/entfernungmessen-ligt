input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    a = 1
    b = 0
    ab = 0
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    ab = 1
    b = 0
    a = 0
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    b = 1
    a = 0
    ab = 0
})
let ab = 0
let b = 0
let a = 0
a = 0
b = 0
ab = 0
basic.forever(function () {
    if (a == 1) {
        if (calliBot2.entfernung(C2Einheit.cm) <= 30) {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
            basic.showString("30 ")
            a = 0
        } else {
            basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
        }
    }
    if (b == 1) {
        if (calliBot2.entfernung(C2Einheit.cm) <= 20) {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
            basic.showString(" 20")
            b = 0
        } else {
            basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
        }
    }
    if (ab == 1) {
        if (calliBot2.entfernung(C2Einheit.cm) <= 10) {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
            basic.showString(" 10 ")
            ab = 0
        } else {
            basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
        }
    }
})
