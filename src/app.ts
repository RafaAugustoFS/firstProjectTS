import express, { Request, Response } from "express";
import { IUser } from "./types/user";

const nome: String | null = null;

const app = express();

app.use(express.json());

app.post('/criar', (req: Request, res:Response) =>{
    const {nome, endereco, senha} = req.body;
    const usuario: IUser ={
        nome, 
        senha,
        endereco
    }
    
});