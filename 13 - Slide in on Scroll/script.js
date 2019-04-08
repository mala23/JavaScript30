function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slidingImages = document.querySelectorAll('.slide-in')

function checkSlide(e) {
    console.count(e)
    slidingImages.forEach(slidingImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - slidingImage.height / 2
        const imageBottom = slidingImage.offsetTop + slidingImage.height
        const isHalfShown = slideInAt > slidingImage.offsetTop
        const isNotScrolledPast = window.scrollY < imageBottom
        if(isHalfShown && isNotScrolledPast) {
            slidingImage.classList.add('active')
        } else {
            slidingImage.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide))
