const { spawn } = require('child_process');
const http = require('http');

async function testEndpoint(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path,
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, data });
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function main() {
  console.log('Starting next start on port 3000...');
  const nextProcess = spawn('npx.cmd', ['next', 'start', '-p', '3000'], {
    shell: true,
    stdio: 'inherit'
  });

  // wait 3 seconds
  await new Promise(r => setTimeout(r, 3000));

  try {
    console.log('--- Probing GET / ---');
    const home = await testEndpoint('/');
    console.log('Home Status:', home.statusCode, 'Length:', home.data.length);

    console.log('--- Probing POST /api/contact ---');
    const contact = await testEndpoint('/api/contact', 'POST', {
      name: 'Muhammad Asif (Lead Project Engineer)',
      email: 'asif@alnoorsugar.com',
      phone: '0300-1234567',
      subject: 'Refinery Shutdown Maintenance',
      division: 'Mechanical',
      message: 'Need high-pressure steam line fabrication and hydro-testing schedule.'
    });
    console.log('Contact API Status:', contact.statusCode, 'Response:', contact.data);

    console.log('--- Probing POST /api/quote ---');
    const quote = await testEndpoint('/api/quote', 'POST', {
      companyName: 'Lucky Electric Power Company',
      contactPerson: 'Engr. Tariq Mehmood',
      email: 'tariq@luckyelectric.com',
      phone: '0333-9876543',
      division: 'Multi-Disciplinary',
      projectTitle: 'Cooling Tower Water Pipeline Overhaul',
      projectScope: 'Trenching, concrete foundations and high-pressure pipe welding',
      siteLocation: 'Port Qasim Karachi',
      estimatedTimeline: '1 - 3 Months',
      estimatedBudget: 'Custom Tender',
      technicalRequirements: 'ASME B31.3 certified welding and NDT inspection'
    });
    console.log('Quote API Status:', quote.statusCode, 'Response:', quote.data);

    console.log('--- Probing POST /api/newsletter ---');
    const news = await testEndpoint('/api/newsletter', 'POST', {
      email: 'procurement@sugarconglomerate.com'
    });
    console.log('Newsletter API Status:', news.statusCode, 'Response:', news.data);

  } catch (err) {
    console.error('Error during testing:', err);
  } finally {
    console.log('Shutting down server...');
    nextProcess.kill('SIGTERM');
    process.exit(0);
  }
}

main();

