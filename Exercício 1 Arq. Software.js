class Aluno {
    constructor(name, login, RA) {
        this.name = name;
        this.login = login;
        this.RA = RA;
    }
}

class Turma {
    constructor(codigo, nota) {
        this.codigo = codigo;
        this.nota = nota;
        this.aprovado = false;
    }
    verifyGrade(nota) {
        this.aprovado = nota >= 6; 
        return this.aprovado;
    }
}

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    verifyGrade(nota, frequencia) {
        this.aprovado = nota >= 6 && frequencia > 10; 
        return this.aprovado;
    }
}

const grade = new TurmaPresencial(230, 10, 9);
const result = grade.verifyGrade(grade.nota, grade.frequencia); 
console.log(result);