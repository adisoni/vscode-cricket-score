"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const io = require("socket.io-client");
let myStatusBarItem;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    myStatusBarItem.command = 'extension.helloWorld';
    var socket = io.connect('http://localhost:3000/');
    socket.on('connect', function () {
        console.log("new");
        socket.emit('new_user', {
            preferences: ["score"]
        });
    });
    socket.on('update', (msg) => {
        console.log("update: " + msg.score);
        myStatusBarItem.text = `${msg.score}`;
        myStatusBarItem.show();
    });
    socket.on('new_user_ack', (msg) => {
        console.log('new user has joined room: ' + msg);
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map