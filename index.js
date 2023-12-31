const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?",
]

const ask = ( index = 0 ) => {
     process.stdout.write(questions[index] + " > ")
}

ask ()
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length) 
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Bacana Camy!

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje foi:
    ${answers[2]}

    Você ajudou ${answers[4]} pessoas hoje!!

    Volte amanhã para novas reflexões!!
    `)
})