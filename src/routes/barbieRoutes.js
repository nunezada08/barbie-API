import express from "express"
import { getALLBarbies, getIDBarbies, createBarbie, deleteBarbie, updateBarbie } from "../controllers/barbieController.js"

const router = express.Router();

router.get("/", getALLBarbies)
router.get("/:id", getIDBarbies)
router.post("/", createBarbie)
router.delete("/:id", deleteBarbie)
router.put("/:id", updateBarbie)

export default router