const TodoModel=require('../Models/TodoModel');

const getTodo=async(req,res)=>{
    try{
        const data=await TodoModel.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
}

const saveTodo= async(req,res)=>{
    const {text}=req.body;
    try {
        const todo = await TodoModel.create({text});
        res.status(201).json(todo);


    } catch (error) {
        res.status(500).json(error);
    }

     
}

const updateTodo= async(req,res) =>{
    try {
        const { _id, text } = req.body;
        if (!_id || !text) {
          return res.status(400).send({ error: 'Invalid data' });
        }
        await TodoModel.updateOne({ _id }, { text });
        res.status(200).send({ message: 'Todo updated successfully' });
      } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).send({ error: 'Internal Server Error' });
      }
}
const deleteTodo= async (req,res)=>{
    const {_id}=req.body;
    try {
        const deleted =await TodoModel.findByIdAndDelete(_id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports={getTodo,saveTodo,updateTodo,deleteTodo};





