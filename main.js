const answers = document.querySelectorAll('.question-answer');
answers.forEach(answer => {
    answer.style.display = 'none';
});

const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('click', () => {

        const answer = icon.parentElement.nextElementSibling;
        if (answer.style.display === 'none') {
            answer.style.display = 'block';

            icon.style.backgroundImage = 'url(https://raw.githubusercontent.com/ydctnr/FAQ-Accordion/8d98941fbaec7e080ff8ab0d3b838148a7b843f4/assets/images/icon-minus.svg)';
        } else {
            answer.style.display = 'none';

            icon.style.backgroundImage = 'url(https://raw.githubusercontent.com/ydctnr/FAQ-Accordion/8d98941fbaec7e080ff8ab0d3b838148a7b843f4/assets/images/icon-plus.svg)';
        }
    });
});