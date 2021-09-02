const ascii = document.getElementById('ascii')
const binary = document.getElementById('binary')
const hexadecimal = document.getElementById('hexadecimal')
const octal = document.getElementById('octal')
const output = document.getElementById('output')

document.querySelector('.dark-light').addEventListener
('click', () => {
    document.body.classList.toggle('dark-light');
})  

    binary.addEventListener('click', () => {
        const input = document.getElementById('text').value
        output.value = ""
        for(let i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " "
        }
})

    ascii.addEventListener('click', () => {
        const input = document.getElementById('text').value
        output.value = ""
        for(let i = 0; i < input.length; i++) {
            output.value += input[i].charCodeAt(0) + "  "
        }
    })


    hexadecimal.addEventListener('click', () => {
        const input = document.getElementById('text').value
        output.value = ""
        for(let i = 0; i < input.length; i++) {
            output.value += input[i].charCodeAt(0).toString(16).toUpperCase() + " "
        }
    })


    octal.addEventListener('click', () => {
        const input = document.getElementById('text').value
        output.value = ""
        for(let i = 0; i < input.length; i++) {
            output.value += input[i].charCodeAt(0).toString(8) + " "
        }
    })




