const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter) => `<span>${letter}</span>`)
        //.map((letter, idx) => `<span style = "transition-delay:${idx *5}">${letter}</span>`)
        .join('')
})