import express from 'express';

const router = express.Router();

router.get("/", (request , response) => {
response.status(201).json({ message: "Nhiệm vụ mới đã được thêm vào thành công" });
});

router.post("/", (request , response) => {
    response.status(201).json({ message: "Nhiệm vụ mới đã được thêm vào thành công" });
});

router.put("/:id", (request , response) => {
response.status(201).json({ message: "Nhiệm vụ mới đã được thêm vào thành công" });
});

router.delete("/", (request , response) => {
    response.status(201).json({ message: "Nhiệm vụ mới đã được xóa vào thành công" });
});

export default router;
