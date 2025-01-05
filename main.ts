datalogger.onLogFull(function () {
    Logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    Logging = true
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    while (Logging) {
        datalogger.log(
        datalogger.createCV("Accel.X", input.acceleration(Dimension.X)),
        datalogger.createCV("Accel.Y", input.acceleration(Dimension.Y)),
        datalogger.createCV("Accel.Z", input.acceleration(Dimension.Z)),
        datalogger.createCV("Sound", input.soundLevel()),
        datalogger.createCV("Light", input.lightLevel())
        )
        serial.writeValue("Accel.X", input.acceleration(Dimension.X))
        serial.writeValue("Accel.Y", input.acceleration(Dimension.Y))
        serial.writeValue("Accel.Z", input.acceleration(Dimension.Z))
        serial.writeValue("Ambient.Sound", input.soundLevel())
        serial.writeValue("Ambient.Light", input.lightLevel())
        basic.pause(25)
    }
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    Logging = false
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
})
let Logging = false
basic.showIcon(IconNames.Happy)
datalogger.setColumnTitles(
"Accel.X",
"Accel.Y",
"Accel.Z",
"Sound",
"Light"
)
