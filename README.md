# serverless-pagespeed-monitoring

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

Measure your webpage real speed from multiple regions in a serverless way.

## Usage
First, ensure that you have [Serverless Framework](serverless.com) installed. If not, install it:

```sh
$ npm install serverless -g
```

Clone the repo, install dependencies and deploy function:

```
$ git clone https://github.com/RafalWilinski/serverless-pagespeed-monitoring
$ npm install
$ serverless deploy
```

OR if you'd like to deploy to multiple regions at once, use:
```sh
$ ./deploy_global.sh
```

## Config
serverless-pagespeed-monitoring can be configured using `config.yml` file:

```
metrics: <comma separated list of metrics e.g.: 'domInteractive,requestStart'>
url: <url to be tested e.g.: https://google.com>
rate: <cloudwatch schedule expression e.g.: rate(1 hour)>
```

## Demo & Example Dashboard

After deploying, you can use CloudWatch Dashboard included in `example_dashboard.json` to visualize data:

![Demo](assets/demo.png?raw=true "Serverless Pagespeed Demo")

## Development 

```sh
AWS_REGION=us-east-1 npm run local
```

## License
MIT © [Rafal Wilinski](http://rwilinski.me)
