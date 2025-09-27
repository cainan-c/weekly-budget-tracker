const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Use a sensible default size that looks good on desktop
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600,
    title: 'Weekly Budget Tracker',
    webPreferences: {
      // Allows Node.js features in the renderer process (important for Electron functions)
      nodeIntegration: true, 
      contextIsolation: false, 
      // Ensure local files can access other local files (like manifest.json, service_worker.js)
      webSecurity: false 
    }
  });

  // Load the index.html file from the same directory
  // Note: Electron runs the HTML content, resolving all the CORS issues we had locally.
  mainWindow.loadFile('budget_tracker.html');

  // Optional: Open DevTools for debugging during development
  // mainWindow.webContents.openDevTools();

  // Handle window closure: dereference the window object
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Ensure the app initializes the window when Electron is ready
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
// On macOS, it's common for applications and their menu bar to stay active until the user explicitly quits
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, re-create a window in the app when the dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
