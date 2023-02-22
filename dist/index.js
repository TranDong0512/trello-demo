"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./src/data-source");
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./src/router/router");
const PORT = 8080;
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Connect Database Success!');
}).catch((e) => {
    console.log(e.message);
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('', router_1.router);
app.listen(PORT, () => {
    console.log(`Server is running with port ${PORT} !`);
});
//# sourceMappingURL=index.js.map