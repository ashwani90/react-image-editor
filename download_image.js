const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Load your HTML content
    const htmlContent = `<html>
        <body>
            <div id="capture" style="width: 500px; height: 300px; background: lightblue; text-align: center;">
                <h2>Hello, World!</h2>
            </div>
        </body>
    </html>`;
    await page.setContent(htmlContent);

    // Wait for the div to render (if needed)
    await page.waitForSelector('#capture');

    // Capture the div as an image
    const element = await page.$('#capture');
    await element.screenshot({ path: 'output.png' });

    await browser.close();
    console.log('Image saved as output.png');
})();