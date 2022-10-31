import { timeStamp } from "console"
import {Model, DataTypes} from "sequelize"

import {sequelize} from '../instances/mysql'



export interface FilmeInstance extends Model {
    id: number
    nome: string
    diretor: string
    anolancamento: string

}


export const Filmes = sequelize.define<FilmeInstance>("Filmes,",{
    id: {
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    diretor: {
        type: DataTypes.STRING
    },
    anolancamento:  {
        type: DataTypes.INTEGER,
        
    }

},{   
    tableName: 'filmes',
    timestamps: false
})








