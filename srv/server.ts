import express, { Express } from "express";
import { loadEnv } from "@sap/xsenv";
import path from "path";
import { plantRouter } from "./lib/routers/plant-router";
import { productRouter } from "./lib/routers/product-router";
import { salesRouter } from "./lib/routers/sales-router";

loadEnv(path.join(__dirname, "default-env.json"));

const port: number | string = process.env.PORT || 3000;
const app: Express = express();

// Add JSON middleware to parse JSON data
app.use(express.json());

// Add Routers
app.use("/plant", plantRouter);
app.use("/product", productRouter);
app.use("/sales", salesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});