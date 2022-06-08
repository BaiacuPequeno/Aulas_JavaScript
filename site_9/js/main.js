// pegar elementos do formulario

const myForm = document.querySelector('#_form');
const nameInput = document.querySelector('#us');
const emailInput = document.querySelector('#em');
const pao = document.querySelector('#pao');
const ms = document.querySelector('.mens');
const ms_email = document.querySelector('.mens-em');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefaul();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.valeu === '') {
        // alert('Por favor, preencha os dados.');
        ms.classLists.add('error');
        ms.innerHTML = 'Por favor, preencha os dados.';0
        setTimeout(() => ms.remove(), 3000);
    } else {
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${pao.value}`
            )
        );

        userList.appendChild(li);
        // limpa o form
        nameInput.value = '';
        emailInput.value = '';
        pao.getElementsByTagName('option')[0].selected = 'selected';
        nameInput = focus; // coloca o foco no elemento

        emailInput.addEventListener('change', (e) => {
            let padrao = new RegExp(/.*@.*\..*/i);
            if (!padrao.test(emailInput.value)) {
                // alert('Por favor, insira um e-mail válido.');
                ms_email.classList.add('error');
                ms_email.innerHTML = 'Por favor, insira um e-mail válido.';
                setTimeout(() => ms.remove(), remove(), 3000);
            }
        });
    }
}