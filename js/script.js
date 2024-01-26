var app = document.getElementById('writer');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 60,
  deleteSpeed: 1,
});

typewriter
  .pauseFor(1000)
  .typeString(
    'Ordi Snipe is an innovative analytics platform built on advanced artificial intelligence technology, specifically designed to identify potentially profitable assets early on in the bitcoin network. Our goal is to provide users with a powerful tool capable of analyzing large volumes of data and highlighting key trends and investment opportunities.'
  )
  .typeString(
    '<br/> <p> The core functionality of Ordi Snipe is based on sophisticated algorithms and machine learning that allow the platform to process and interpret information with high accuracy. These algorithms are regularly updated to track changes in market dynamics and adapt to new trends in cryptocurrencies.</p>'
  )
  .start();
