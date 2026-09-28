const express = require("express");


const tasks = [
  { id: 1, title: "End your work on time", done: true },
  { id: 2, title: "Start your business on time", done: false },
  { id: 3, title: "Finish your task on time", done: true }
];
const app = express();
app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/",(req,res)=>{
    res.json({
        name:"Task API",
        version:"1.0",
        endpoints:["/tasks"]
    });
});
app.get("/health",(req,res)=>{
    res.status(200).json({
        status:"ok",
    });
});
app.get("/tasks",(req,res)=>{
    res.json(tasks)
})
app.get("/tasks/:id",(req,res)=>{
    const id=Number(req.params.id)
    const task =tasks.find(task=>task.id===id)
     if (!task) {
    return res.status(404).json({
      error: "Task 99 not found"
    });
  }

  res.json(task);
})
app.post("/tasks",(req,res)=>{
    const {title}=req.body;
    if(!title||title.trim()===''){
        return res.status(400).json({
            error:"title not found",
        });
    }
    const task={id:tasks.length+1,title:title,done:false}
    tasks.push(task)
    res.status(201).json(task);

})

app.put("/tasks/:id",(req,res)=>{
    const id = Number(req.params.id);
    const {title,done}=req.body;
    if(!title||title.trim()===''){
        return res.status(400).json({
            error:"title not found",
        });
    }
    const t=tasks.find(task=>task.id===id)
    if(!t){
        return res.status(404).json({
            error:"Unknown id",
        });
    }
    t.title=title;
    t.done=done;
    res.json(t);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: `Task ${id} not found`
    });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});