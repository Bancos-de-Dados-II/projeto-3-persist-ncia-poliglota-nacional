import mongoose from "../database/mongoose";
import { randomUUID } from "crypto";
const { Schema } = mongoose;
import ILocalizacao from "./repositories/ILocalizacao";
import IMapa from "./repositories/IMapa";


const LocalizacaoSchema = new Schema<ILocalizacao>({
  nome: {
    type:String,
   
  },
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});


const MapaSchema = new Schema<IMapa>({
  id: {
    type: String,
    default: () => randomUUID(),
  },
  localizacao: {
    type: LocalizacaoSchema
  },
});


//indice para usar  busca com $text
MapaSchema.index({"localizacao.nome": "text"},
  {default_language: "pt"});

const MapaModel = mongoose.model<IMapa>("mapa", MapaSchema);
export default MapaModel;
