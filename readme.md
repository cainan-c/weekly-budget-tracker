# Weekly Budget Tracker
Simple Electron based application with the goal of helping manage finances, especially for UK-based University students.

![img1](https://i.imgur.com/zc9RRk3.png)
![img2](https://i.imgur.com/dbTW0vV.png)
![img3](https://i.imgur.com/KgrFyrh.png)
![img4](https://i.imgur.com/PM5dL1c.png)

Features:
Dynamically see your weekly budget based on one-time and weekly and monthly outgoings.  
Track where money is spending it, by adding what has been spent on any given week.  

## Build Instructions
###  Prerequisites

1. Ensure all application files (`budget_tracker.html`, `main.js`, `package.json`, `manifest.json`, `service_worker.js`) are in the same directory.
2. You must have Node.js and npm installed on your macOS machine.

### Step 1: Install Dependencies

Open your terminal in the project directory and run this command to install Electron and the build tool:

```
npm install
```

### Step 2: Run in Development Mode

To test the application instantly without compiling, use the start script:

```
npm run start
```

This will open your application in an Electron window.
### Step 3: Build for macOS (Creating the .app file)

When you are ready to create the final native application, run the dist script:

```
npm run dist
```

This command will:
1. Compile your Electron application.
2. Package it specifically for macOS.
3. Create a `dist` folder in your project directory containing the `.dmg` installer and the final `.app` bundle, ready for distribution on macOS.

