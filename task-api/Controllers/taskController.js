const Task = require("../models/Task");

exports.createTask = async(req,res,next)=>{     //create a new task

try{

const task = await Task.create(req.body);

res.status(201).json(task);

}

catch(error){

next(error);

}

};

exports.getTasks = async(req,res,next)=>{    //get all tasks

try{

const tasks = await Task.find();

res.status(200).json(tasks);

}

catch(error){

next(error);

}

};

exports.getTask = async(req,res,next)=>{  //get a single task by id

try{

const task = await Task.findById(req.params.id);

if(!task){

return res.status(404).json({

success:false,
message:"Task not found"

});

}

res.json(task);

}

catch(error){

next(error);

}

};

exports.updateTask = async(req,res,next)=>{  //update a task by id

try{

const task = await Task.findByIdAndUpdate(

req.params.id,
req.body,
{
new:true,
runValidators:true
}

);

if(!task){

return res.status(404).json({

success:false,
message:"Task not found"

});

}

res.json(task);

}

catch(error){

next(error);

}

};

exports.deleteTask = async(req,res,next)=>{        //delete a task by id

try{

const task = await Task.findByIdAndDelete(req.params.id);

if(!task){

return res.status(404).json({

success:false,
message:"Task not found"

});

}

res.json({

success:true,
message:"Task deleted successfully"

});

}

catch(error){

next(error);

}

};