const { Menu } = require('../models')

module.exports={
    getAll : async function (req,res,next){
        try{
            const menu = await Menu.findAll()
            res.json({message : 'OK',body:menu})
        }catch(e){
            console.log('Error',e)
        };
    },
    newMenu : async function(req,res,next){
        try {
            const {name ,description,price,comments,image,category} = req.body
            console.log(req.body)
            const newMenu = await Menu.create({name ,description,price,comments,image,category})
            res.json({message : 'Sucessfull' , body:newMenu})
        } catch (error) {
            res.json({message:'error' , body:error})
        }
    }
};