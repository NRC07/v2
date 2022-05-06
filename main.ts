let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.showString("Kiketon Rivera")
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    # # # # #
    # . # . #
    `)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 0, 0))
    music.rest(music.beat(BeatFraction.Whole))
    strip.showColor(neopixel.rgb(255, 45, 180))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
})
basic.forever(function () {
	
})
