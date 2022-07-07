const alunos = [
    {
        nome:'Cadete',
        nota: 10,
        turma: '1A',
    },
    {
        nome:'aluno 2',
        nota: 5,
        turma: '2C',
    },
    {
        nome:'Aluno 3',
        nota: 2,
        turma: '3D',
    },
]

function alunosAprovados (arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return console.log(aprovados);
}

alunosAprovados(alunos, 5);