import express from "express"
import { getALLBarbies, getIDBarbies, createBarbie, deleteBarbie } from "../controllers/barbieController.js"

const router = express.Router();

router.get("/", getALLBarbies)
router.get("/:id", getIDBarbies)
router.post("/", createBarbie)
router.delete("/:id", deleteBarbie)

export default router