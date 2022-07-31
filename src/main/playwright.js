const electron = require('electron');
const { chromium } = require('playwright')

const ipcMain = electron.ipcMain

module.exports = () => {
    ipcMain.on('playwright', (event, arg) => {
        (async () => {
            const browser = await chromium.launch();
            // Create pages, interact with UI elements, assert values
            const page = await browser.newPage();
            await page.goto('https://google.com/');
            await page.screenshot({ path: `example.png` });
            await browser.close();
        })();
    })
}