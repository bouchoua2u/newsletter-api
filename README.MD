This project is an minimalist API to store user emails and send them a confirmation email, built with Node.js. It uses MongoDB as its database.

## Dependencies
- Node.js
- MongoDB
- Sendgrid to send emails

## Configuration
Before running the API, you need to configure some environment variables. You can do this by creating a .env.local, simply copy the .env and fill in the values

Set the environment variable IS_SERVERLESS to 1 to run serverless

## Running the Project Locally
To run the project locally, you can use Docker if you have it installed with Docker Compose on your machine.

Once you have Docker and Docker Compose installed and your environment variables configured, you can start the API by running the following command at the root of the project:

This command will start your API and MongoDB database in Docker containers. The API will be accessible at http://localhost:3000

## Usage

This API provides the endpoints:

- `POST /subscribers`: This endpoint accepts a JSON body with the following structure:

```json
{
  "email": "subscriberEmail@gmail.com"
}
```
## DEPLOYMENT

easily deploy to aws lambda using commands below :

```
sam package --output-template-file packaged.yaml --s3-bucket S3_DESTINATION_BUCKET

sam deploy --template-file packaged.yaml --region eu-north-1 --capabilities CAPABILITY_IAM --stack-name newsletter-api```