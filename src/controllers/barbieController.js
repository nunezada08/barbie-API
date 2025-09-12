import dados from "../models/dados.js";
const { barbies } = dados;

const getALLBarbies = (req,res) => {
    const resultado = barbies

    res.status(200).json({
        total: resultado.length,
        barbies: resultado
    });

}

const getIDBarbies = (req,res) => {
    const id = parseInt(req.params.id);

    const barbie = barbies.find(b => b.id === id)

    if (barbie) {
        res.status(200).json(barbie)
    } else {
        res.status(400).json({
            message: "Barbie nao encontrada"
        })
    }

}

const createBarbie = (req,res) => {
    const { nome, profissao, anoLancamento } = req.body;

    if(!nome || !profissao || !anoLancamento) {
        return res.status(400).json({
            sucess: false,
            message: "Nome, profissão e ano de lançamento são obrigatorios!!"
        })
    }

    const novaBarbie = {
        
        id: barbies.length + 1,
        nome: nome,
        profissao: profissao,
        anoLancamento: anoLancamento
    };

    barbies.push(novaBarbie);

    res.status(201).json({
        sucess: true,
        message: "Nova barbie criada com sucesso"
    })

}

const deleteBarbie = (req,res) => {
    const id = parseInt(req.params.id);

    const BarbieParaRemover = barbies.find(b => b.id === id);

    if (!BarbieParaRemover) {
        return res.status(404).json({
            sucess: false,
            message: `Esse bruxo não existe ou já foi deletado, ${id}`
        })
    }

    const barbiesFiltradas = barbies.filter(barbie => barbie.id !== id);

    barbies.splice(0, barbies.length, ...barbiesFiltradas);

    res.status(200).json({
        sucess: true,
        message: "Barbie deletada com sucesso",
        barbieRemovida: BarbieParaRemover
    })

}


export { getALLBarbies, getIDBarbies, createBarbie, deleteBarbie }