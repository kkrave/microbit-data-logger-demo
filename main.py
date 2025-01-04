def on_button_pressed_a():
    datalogger.log(datalogger.create_cv("Accel.X", input.acceleration(Dimension.X)),
        datalogger.create_cv("Accel.Y", input.acceleration(Dimension.Y)),
        datalogger.create_cv("Accel.Z", input.acceleration(Dimension.Z)))
    datalogger.mirror_to_serial(True)
    basic.pause(25)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    datalogger.delete_log(datalogger.DeleteType.FAST)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.SMALL_HEART)
datalogger.delete_log(datalogger.DeleteType.FAST)

def on_forever():
    pass
basic.forever(on_forever)
