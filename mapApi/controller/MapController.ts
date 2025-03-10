import { Request, Response } from "express";
import MapaModel from "../model/mapaModel";

export class MapController {

  async criarLocalizacao(req: Request, res: Response) {
    try {
      console.log("BODY DA REQUISIÇÂO NO CONTROLLER")
      console.log(req.body);
      const { localizacao } = req.body;
      const { nome, coordinates } = localizacao 

      const localizacaoToSave = new MapaModel({
        localizacao: {
          nome,
          type: 'Point',
          coordinates,
        },
      });

      const resultado = await localizacaoToSave.save();
      console.log("Localização salva:", resultado);
      res.status(201).json(resultado);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao criar nova localização' });
    }
  }

  async deletarLocalizacaoPorNome(req: Request, res: Response) {
    const nome = req.params.nome;
    console.log("Tentando apagar a localização com nome:", nome);

    try {
      const resultado = await MapaModel.deleteOne({
        "localizacao.nome": { $regex: new RegExp(nome, 'i') }, // Ignora case sensitive
      });
      if (resultado.deletedCount > 0) {
        console.log("Localização deletada com sucesso", req.params);
        res.json({ message: 'Localização deletada com sucesso', nome });
      } else {
        res.status(404).json({ message: 'Localização não encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao tentar deletar a localização' });
    }
  }

 
  async buscarLocalizacoes(req: Request, res: Response) {
    try {
      const localizacoes = await MapaModel.find();
      res.status(200).json(localizacoes);
    } catch (error) {
      res.status(500).json({ error: "Não foi possível recuperar as localizações" });
    }
  }

 
  async buscarLocalizacaoPorNome(req: Request, res: Response) {
    const nome = req.params.nome;

    try {
      console.log(nome);
      const resultado = await MapaModel.findOne({
        'localizacao.nome': { $regex: new RegExp(nome, 'i') },
      });
      console.log('Localização encontrada:', resultado);
      res.status(200).json(resultado);
      return;
    } catch (error) {
      console.error('Erro ao buscar localização:', error);
      res.status(500).json({ error: 'Erro ao buscar localização' });
    }
  }


async atualizarLocalizacao(req: Request, res: Response) {
  const id = req.params.nome;
  const { localizacao } = req.body; 
 

  if (!localizacao || !Array.isArray(localizacao.coordinates) || localizacao.coordinates.length !== 2) {
    res.status(400).json({ message: "Formato inválido. Envie { localizacao: { coordinates: [lon, lat] } }" });
    return;
  }

  const [lon, lat] = localizacao.coordinates;
  const nome= localizacao.nome;

  if (typeof lat !== 'number' || typeof lon !== 'number') {
    res.status(400).json({ message: "Latitude e Longitude devem ser números válidos" });
    return;
  }

  //VERIFICANDO SE RECEBEU O ANTES CORRETAMENTE
  const localizacaoAntes = await MapaModel.findOne({ _id: id });
  console.log("Antes", localizacaoAntes)

  try {
    const resultado = await MapaModel.updateOne(
      { _id: id }, 
      { $set: {
        "localizacao.nome": nome,
         "localizacao.coordinates": [lon, lat] } }
    );

    //verificiando os dados depois da atualização
    const localizacaoDepois = await MapaModel.findOne({ _id: id });
    console.log("Depois", localizacaoDepois)

    if (resultado.modifiedCount > 0) {
      res.json({ message: "Localização atualizada com sucesso" });
    } else {
      res.status(404).json({ message: "Localização não encontrada" });
    }
  } catch (error) {
    console.error("Erro ao atualizar a localização:", error);
    res.status(500).json({ error: "Erro ao atualizar a localização" });
  }
}
}