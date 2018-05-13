## serverless-pagespeed-monitoring

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

Expose AWS Cloudwatch Metrics as a public HTML page using AWS Lambda.

## Usage
First, ensure that you have [Serverless Framework](serverless.com) installed. If not, install it:

```sh
$ npm install serverless -g
```

Clone the repo, install dependencies and deploy function:

```
$ git clone https://github.com/RafalWilinski/serverless-pagespeed-monitoring
$ npm install
$ npm run deploy
```

## Config
serverless-pagespeed-monitoring can be configured using `config.yml` file:

```
metrics: <comma separated list of metrics e.g.: 'domInteractive,requestStart'>
url: <url to be tested e.g.: https://google.com>
rate: <cloudwatch schedule expression e.g.: rate(1 hour)>
```

## Development 

```sh
AWS_REGION=us-east-1 npm run local
```

## License
MIT © [Rafal Wilinski](http://rwilinski.me)

### Credits
Logo by [Dinosoft Labs](https://thenounproject.com/dinosoftlabs/)