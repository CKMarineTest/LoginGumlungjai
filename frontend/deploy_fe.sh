#!/bin/bash

FOLDER_PATH="./dist"        
S3_BUCKET_PATH="s3://mrg-s3fe-prod-aps11-thegift-backoffice/thegift_backoffice/"
AWS_ACCESS_KEY_ID="AKIAYYT2EEIAQT4AK5QH"             #Access Key and Secret key is only using for deploy Frontend
AWS_SECRET_ACCESS_KEY="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"
AWS_REGION="ap-southeast-1"

export AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY
export AWS_REGION
export VUE_APP_API_URL="https://portal.thmarinegold.com"
  
npm run build

if [ ! -d "$FOLDER_PATH" ]; then
    echo "Error: Folder '$FOLDER_PATH' does not exist."
    exit 1
fi

aws s3 sync "$FOLDER_PATH" "$S3_BUCKET_PATH" --delete --region "$AWS_REGION"

if [ $? -eq 0 ]; then
    echo "Upload successful!"
else
    echo "Error: Upload failed."
    exit 1
fi
