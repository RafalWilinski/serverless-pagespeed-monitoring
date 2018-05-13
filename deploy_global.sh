declare -a regions=("us-east-1" "us-west-1" "us-east-2" "us-west-2" "eu-central-1" "sa-east-1")

## now loop through the above array
for region in "${regions[@]}"
do
   echo "Deploying to $region..."
   eval "AWS_REGION=$region serverless deploy --region $region"
done