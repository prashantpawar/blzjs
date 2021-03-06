"use strict";
//
// Copyright (C) 2020 Bluzelle
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//import {getAddress} from "./swarmClient/cosmos";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cosmos_1 = require("./swarmClient/cosmos");
var Api_1 = require("./swarmClient/Api");
exports.API = Api_1.API;
const Api_2 = require("./swarmClient/Api");
exports.bluzelle = (config) => __awaiter(void 0, void 0, void 0, function* () {
    const api = new Api_2.API(config);
    yield api.init();
    return api;
});
exports.bluzelle.mnemonicToAddress = cosmos_1.mnemonicToAddress;
//# sourceMappingURL=bluzelle-node.js.map