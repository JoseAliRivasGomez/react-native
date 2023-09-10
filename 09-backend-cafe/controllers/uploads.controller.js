const {request, response} = require('express');
const { subirArchivo } = require('../helpers/subir-archivo');
const Producto = require('../models/producto');
const Usuario = require('../models/usuario');
const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

cloudinary.config(process.env.CLOUDINARY_URL); 

const cargarArchivo = async (req = request, res = response) => {

    try {

        const nombre = await subirArchivo(req.files, 'usuarios');
        res.json({nombre});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({error});
    }

}

const getImagen = async (req = request, res = response) => {

    const {coleccion, id} = req.params;

    let modelo;

    switch (coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if ( !modelo ) {
                return res.status(400).json({
                    msg: `No existe un usuario con el ID ${id}`,
                });
            }
            break;

        case 'productos':
            modelo = await Producto.findById(id);
            if ( !modelo ) {
                return res.status(400).json({
                    msg: `No existe un producto con el ID ${id}`,
                });
            }
            break;
    
        default:
            return res.status(500).json({
                msg: 'Hable con el administrador'
            });
    }

    try {

        if(modelo.img){
            const pathImagen = path.join(__dirname, '../uploads/', coleccion, '/', modelo.img);
            if(fs.existsSync(pathImagen)){
                return res.sendFile(pathImagen);
            }
        }

        const pathImagen = path.join(__dirname, '../assets/no-image.jpg');
        if(fs.existsSync(pathImagen)){
            return res.sendFile(pathImagen);
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({error});
    }

}

const actualizarImagen = async (req = request, res = response) => {

    const {coleccion, id} = req.params;

    let modelo;

    switch (coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if ( !modelo ) {
                return res.status(400).json({
                    msg: `No existe un usuario con el ID ${id}`,
                });
            }
            break;

        case 'productos':
            modelo = await Producto.findById(id);
            if ( !modelo ) {
                return res.status(400).json({
                    msg: `No existe un producto con el ID ${id}`,
                });
            }
            break;
    
        default:
            return res.status(500).json({
                msg: 'Hable con el administrador'
            });
    }

    try {

        if(modelo.img){
            const pathImagen = path.join(__dirname, '../uploads/', coleccion, '/', modelo.img);
            if(fs.existsSync(pathImagen)){
                fs.unlinkSync(pathImagen);
            }
        }

        const nombre = await subirArchivo(req.files, coleccion);
        modelo.img = nombre;
        await modelo.save();
        res.json(modelo);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({error});
    }

}

const actualizarImagenCloudinary = async (req = request, res = response) => {

    const {coleccion, id} = req.params;

    let modelo;

    switch (coleccion) {
        case 'usuarios':
            modelo = await Usuario.findById(id);
            if ( !modelo ) {
                return res.status(400).json({
                    msg: `No existe un usuario con el ID ${id}`,
                });
            }
            break;

        case 'productos':
            modelo = await Producto.findById(id);
            if ( !modelo ) {
                return res.status(400).json({
                    msg: `No existe un producto con el ID ${id}`,
                });
            }
            break;
    
        default:
            return res.status(500).json({
                msg: 'Hable con el administrador'
            });
    }

    try {

        if(modelo.img){
            const nombreArr = modelo.img.split('/');
            const nombre = nombreArr[nombreArr.length - 1];
            const [public_id] = nombre.split('.');
            const resp = await cloudinary.api.delete_resources(['cafe-app/' + public_id], {
                resource_type: 'image'
            })
        }

        const {tempFilePath} = req.files.archivo;

        const {secure_url} = await cloudinary.uploader.upload(tempFilePath, {
            resource_type: 'image',
            folder: 'cafe-app/'
        });

        modelo.img = secure_url;
        await modelo.save();
        res.json(modelo);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({error});
    }

}

module.exports = {
    cargarArchivo,
    actualizarImagen,
    getImagen,
    actualizarImagenCloudinary
}