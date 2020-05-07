"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
// app.get('/', (request, response) => {
//   return response.json({ message: 'Hello World'});
// });
app.get('/', routes_1.default);
app.listen(process.env.PORT || 3333);
