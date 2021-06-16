import express, { Request, Response } from 'express';
import { Todo } from '../src/models/user_model';
const router = express.Router();

//post req

router.post('/add', async (req:Request , res:Response)=>{
    const {title ,description} = req.body;

    const dataItem = Todo.set({title, description});
console.log(dataItem);
    await dataItem.save();

    return res.status(200).json({
        data: dataItem,
    });
});

//get req

router.get('/', async (req:Request , res:Response)=>{
    try{
        const dataItem = await Todo.find({});

        res.status(200).json({
            data: dataItem,
        });
    }catch(error){
        console.log(error);
    }
});

//delete one
router.delete('/delete', async (req:Request , res:Response)=>{
    const filter = {
        title: req.body.title,
    };
        const dataItem = await Todo.deleteOne(filter)
        .then((data)=>
            res.json({
                data:data,
            })
        ).catch((error)=>{
            return res.send(error);
        });   
    
});

//update one
router.put('/update', async (req:Request , res:Response)=>{
    const filter = {
        title: req.body.title,
    };
    const updateData =  {
        description: req.body.description
    }
        const dataItem = await Todo.updateOne(filter,updateData,{
            new:true,
        })
        .then((data)=>
            res.json({
                data:data,
            })
        ).catch((error)=>{
            return res.send(error);
        });   
    
});



module.exports = router;