let updateDivHeight = () => {
    let divWidth = $('.btnSound')[0]
    divWidth = $(divWidth).width()
    $('.btnSound').attr('style', `height: ${divWidth}px;`)
}

$(window).resize(function() {
    updateDivHeight()
})

updateDivHeight()