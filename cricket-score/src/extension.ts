// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as io from 'socket.io-client';

let myStatusBarItem: vscode.StatusBarItem;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	myStatusBarItem.command = 'extension.helloWorld';	
	var socket = io.connect('http://ec2-3-15-137-133.us-east-2.compute.amazonaws.com:3000/');
	socket.on('connect', function () {
		console.log("new")
		socket.emit
		(
			'new_user', 
			{
			preferences: ["score"]
			
			}
		)
	});
	socket.on('update', (msg:any) => {
		console.log("update: " + msg.score)
		myStatusBarItem.text = `${msg.score}`;
		myStatusBarItem.show();
	})
	socket.on('new_user_ack', (msg:any) =>{
		console.log('new user has joined room: ' + msg);
	})
}

// this method is called when your extension is deactivated
export function deactivate() {}
