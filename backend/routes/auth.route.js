import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log('Hi')
})

export default router;