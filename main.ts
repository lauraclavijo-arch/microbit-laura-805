// Pulsando logo, se activa 1/16 hora
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // 1/16 hora = 3.75 min = 3.75*60*1000
    Hora = 225000
    basic.showString("1/16")
})
input.onButtonPressed(Button.A, function () {
    // 1/2 hora = 30 min = 30*60*1000
    Hora = 1800000
    basic.showString("1/2")
})
input.onButtonPressed(Button.AB, function () {
    // 1/8 hora = 7.5 min = 7.5*60*1000
    Hora = 450000
    basic.showString("1/8")
})
input.onButtonPressed(Button.B, function () {
    // 1/4 hora = 15 min = 15*60*1000
    Hora = 900000
    basic.showString("1/4")
})
let Tiempo = 0
let Iniciar = false
let lectura = 0
let Hora = 0
let Luz = 200
let Tolerancia = 20
// Valor por defecto: 1/2 hora (30 min en ms)
Hora = 1800000
// Mostrar icono al iniciar
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    lectura = input.lightLevel()
    if (lectura > Luz + Tolerancia) {
        if (!(Iniciar)) {
            Tiempo = 0
            Iniciar = true
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            Tiempo += 1000
            basic.pause(1000)
        }
    } else {
        Iniciar = false
        basic.clearScreen()
    }
    if (Tiempo >= Hora) {
        basic.showIcon(IconNames.Yes)
        music.playMelody("C D E F G A B C5 ", 120)
        Iniciar = false
        Tiempo = 0
    }
})
