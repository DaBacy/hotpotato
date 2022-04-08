input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . # .
        . . # . .
        . # # # #
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    random_number = randint(5, 15)
    while (random_number > 0) {
        basic.clearScreen()
        basic.pause(1000)
        random_number += -1
        basic.showIcon(IconNames.Square)
    }
    if (random_number == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
    }
})
let random_number = 0
basic.showString("Hi")
basic.forever(function () {
	
})
