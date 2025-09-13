import express from 'express';

const app = express();

app.listen(5001, () => {
    console.log('Server bắt đầu trên cổng 5001');
});

app.get("/api/tasks", (request , response) => {
    response.status(200).send("Bạn có 20 việc cần làm");
});

app.post("/api/tasks", (request , response) => {
    response.status(201).json(message: "Nhiệm vụ mới đã được thêm vào thành công");
});

app.put("/api/tasks/:id", (request , response) => {
    response.status(201).json(message: "Nhiệm vụ mới đã được update vào thành công");
});

app.delete("/api/tasks", (request , response) => {
    response.status(200).json(message: "Nhiệm vụ đã được xóa thành công");
});