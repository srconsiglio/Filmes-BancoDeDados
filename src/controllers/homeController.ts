import { Request, Response } from "express";
import { Filmes } from "../models/Filmes";
import { sequelize } from "../instances/mysql";

export const home = async (req:Request, res: Response) =>{
    let cinema = await Filmes.findAll()


    res.render('pages/home',{
        cinema
    })
} 


