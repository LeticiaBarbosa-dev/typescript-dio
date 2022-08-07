const funcionario = {
    codigo: 10,
    nome: 'Pedro'
};

const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Diego'
}

interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'Pedro';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'Diego'
}