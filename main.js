document.addEventListener('DOMContentLoaded', () =>{
    const  faqContainer = document.querySelector('.card');

    faqContainer.addEventListener('click', (e)=>{
        const groupHeader = e.target.closest('.question-header');

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupbody = group.querySelector('.question-answer');
        const icon = groupHeader.querySelector('.icon');

        icon.classList.toggle('open');
        groupbody.classList.toggle('open');

        const otherGroups = faqContainer.querySelectorAll('.question');
        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector('.question-answer');
                const otherIcon = otherGroup.querySelector('.icon');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('open');
            }
        })
    })
})