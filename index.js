const puppeteer = require('puppeteer'); // Pulling puppeteer package
const fs = require('fs/promises'); // FileSytem module

async function start() {
  const browser = await puppeteer.launch(); // Lauching browser.. Await it
  const page = await browser.newPage(); // Create new tab in the browser
  // await page.goto('https://learnwebcode.github.io/practice-requests/'); // Navigate to a specific URL
  // await page.goto('https://en.wikipedia.org/wiki/JavaScript');
  await page.goto('https://learnwebcode.github.io/practice-requests/');
  // Examples..
  // await page.screenshot({ path: 'amazing.png' }); // Take a png ss of that page
  // await page.screenshot({ path: 'amazing.png', fullPage: true }); // Take full length of the page ss
  const names = ['red', 'orange', 'yellow'];
  await fs.writeFile('names.txt', names.join('\r\n')); // Write names into a txt file
  await browser.close(); // Close the browser
}

start();
