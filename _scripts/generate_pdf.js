const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();

    // We assume the server is running on localhost:4000 as per user's state
    const url = 'http://127.0.0.1:4000/cv_print/';

    console.log(`Generating PDF from ${url}...`);

    try {
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Ensure assets/pdf exists (it should, but just in case path is relative)
        // We assume running from root

        await page.pdf({
            path: 'assets/pdf/cv_jaewon.pdf',
            format: 'A4',
            printBackground: true,
            // Margin is handled by CSS in cv_clean.liquid
            margin: {
                top: '0',
                right: '0',
                bottom: '1cm', // Need space for footer
                left: '0'
            },
            displayHeaderFooter: true,
            headerTemplate: '<div></div>',
            footerTemplate: `
                <div style="font-size: 10px; font-family: 'Times New Roman'; text-align: center; width: 100%;">
                    <span class="pageNumber"></span>
                </div>
            `
        });

        console.log('✅ PDF generated successfully at assets/pdf/cv_jaewon.pdf');
    } catch (error) {
        console.error('❌ Error generating PDF:', error);
        console.error('Make sure your local server is running (bundle exec jekyll serve).');
        process.exit(1);
    }

    await browser.close();
})();
