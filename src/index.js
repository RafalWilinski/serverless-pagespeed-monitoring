const setup = require('./starter-kit/setup');
const AWS = require('aws-sdk');
const CloudWatch = new AWS.CloudWatch();

exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const browser = await setup.getBrowser();

  exports
    .run(browser)
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
};

exports.run = async (browser) => {
  console.log('Running measurement...');
  const page = await browser.newPage();
  const observedMetrics = process.env.metrics.split(',');

  await page.goto(process.env.url, {
    waitUntil: ['domcontentloaded', 'networkidle0'],
  });

  const paints = await page.evaluate((_) => performance.timing.toJSON());
  const requestStart = paints.navigationStart;

  const MetricData = Object.keys(paints)
    .filter((key) => observedMetrics.includes(key))
    .map((key) => ({
      MetricName: key,
      Unit: 'Milliseconds',
      Value: paints[key] - requestStart,
      Dimensions: [
        {
          Name: 'URL',
          Value: process.env.url,
        },
        {
          Name: 'Region',
          Value: process.env.AWS_REGION,
        },
      ],
    }));

  await CloudWatch.putMetricData({
    MetricData,
    Namespace: 'Pagespeed',
  }).promise();

  await page.close();
  return MetricData;
};
