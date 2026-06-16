"use strict";

const chalk = require("chalk");
const { version } = require("../package.json");

const alyaHeader = `
   ${chalk.cyan.bold("╭──────────────────────────────────────────╮")}
   ${chalk.cyan.bold("│")}  ${chalk.white.bold("RIZKY ASSISTANT")} ${chalk.red.bold("v" + version)}            ${chalk.cyan.bold("│")}
   ${chalk.cyan.bold("│")}  ${chalk.gray("Mengembangkan, Memperbaiki, Menyempurnakan")}  ${chalk.cyan.bold("│")}
   ${chalk.cyan.bold("╰──────────────────────────────────────────╯")}
`;

console.log(alyaHeader);
console.log(`${chalk.blueBright("[ INFO ]")} ${chalk.white("Developer:")} ${chalk.yellow("Rizky")}`);
console.log(`${chalk.blueBright("[ INFO ]")} ${chalk.white("Status   :")} ${chalk.greenBright("System Active")}`);

const updateTime = new Date().toLocaleDateString('id-ID', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
});
console.log(`${chalk.blueBright("[ INFO ]")} ${chalk.white("Last Sync:")} ${chalk.magenta(updateTime)}`);
console.log(chalk.cyan("────────────────────────────────────────────\n"));

const ibra_decode = require("./Utils/ibra-decode");

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));

var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;

console.log(chalk.greenBright(" >> Rizky System Ready. Don't keep her waiting!\n"));
