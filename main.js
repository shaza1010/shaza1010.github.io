const textField = document.getElementById('awesomeAnimation');

const typewriter = new Typewriter(textField, {
    loop: true,
    delay: 200,
    cursorClassName: `cursor`,
    cursor: ''
});

typewriter
    .typeString(`<span>I'm Shaza Alaa</span>`)
    .pauseFor(200)
    .deleteChars(15)
    .pauseFor(500)
    .typeString(`<span>Front-end Developer</span>`)
    .start()