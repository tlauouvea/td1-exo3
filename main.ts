input.onButtonPressed(Button.A, function () {
    if (nb <= 10) {
        basic.showNumber(nb)
        nb += 1
    }
})
let nb = 0
nb = 1
basic.showNumber(nb)
basic.forever(function () {
    nb += 1
    basic.showNumber(nb)
})
