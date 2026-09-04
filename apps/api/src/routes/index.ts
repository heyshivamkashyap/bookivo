import express, { type Router } from "express";
import healthRoutes from "./health.route";

const router: Router = express.Router();

router.use("/healthcheck", healthRoutes);

export default router;
