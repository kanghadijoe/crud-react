import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
    try {
        const response = await prisma.product.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = async (req, res) => {
    try {
        const response = await prisma.product.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createProduct = async (req, res) => {
    const {nameParam, priceParam} = req.body;

    try {
        const product = await prisma.product.create({
            data:{
                name: nameParam,
                price: priceParam
            }
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateProduct = async (req, res) => {
    const {nameParam, priceParam} = req.body;
    // !Note
    // Nama Parameter di request body 
    // harus sama dengan nama parameter di local method
    // dan ketika menjadi suatu response maka akan sama sesuai dengan schemanya
    // perbedaaan variable local dan model cukup merepotkan
    // namun bisa menjadi mengerti perbedaan
    // tanpa tambahan "Param" artinya value yang ditransaksikan
    // dengan "Param" artinya variable local

    try {
        const product = await prisma.product.update({
            where:{
                id: Number(req.params.id)
            },
            // nama field disini harus sama dengan nama di schema untuk databasenya
            // simpelnya nama field db disamakan dengan nama model/orm/schema nya
            data:{
                name: nameParam,
                price: priceParam
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await prisma.product.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}