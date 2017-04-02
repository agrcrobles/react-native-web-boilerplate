import { app, BrowserWindow } from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});


app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 600, height: 600});

  mainWindow.loadURL(`http://localhost:3000/`);
  // mainWindow.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
