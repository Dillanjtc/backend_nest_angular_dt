"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatebaseModule = void 0;
const common_1 = require("@nestjs/common");
const database_providers_1 = require("./database.providers");
const config_service_1 = require("../config/config.service");
let DatebaseModule = class DatebaseModule {
};
exports.DatebaseModule = DatebaseModule;
exports.DatebaseModule = DatebaseModule = __decorate([
    (0, common_1.Module)({
        providers: [...database_providers_1.databaseProvider, config_service_1.ConfigService],
        exports: [...database_providers_1.databaseProvider]
    })
], DatebaseModule);
//# sourceMappingURL=datebase.module.js.map