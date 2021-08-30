const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

const TableName = 'LeadCaptureTable';

exports.handler = async (event, context) => {
    // console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'GET, POST',
    };
    const paramsBody = JSON.parse(event.body);
    

    const dateNow = new Date();
    dateNow.setHours(dateNow.getHours()-3);
   

    try {
        switch (event.httpMethod) {
            case 'DELETE':
                body = await dynamo.delete({TableName, Item: paramsBody}).promise();
                break;
            case 'GET':
                const ScanFilter = {'email': {
                    ComparisonOperator: 'EQ',
                    AttributeValueList: [event.queryStringParameters.email]
                }};
                const {Items} = await dynamo.scan({ TableName, ScanFilter}).promise();
                body = Items[0];
                break;
            case 'POST':
                paramsBody.created_at = dateNow.toISOString();
                paramsBody.updated_at = dateNow.toISOString();
                paramsBody.id = context.awsRequestId;
                paramsBody.client_type = 'PROSPECT';
                await dynamo.put({TableName, Item: paramsBody}).promise();
                body = paramsBody; 
                break;
            case 'PUT':
                paramsBody.updated_at = dateNow.toISOString();
                await dynamo.update({
                    TableName, 
                    Key: { id : paramsBody.id  },
                    AttributeUpdates: {
                        client_type: {
                            Action: 'PUT',
                            Value: paramsBody.client_type 
                         },
                        updated_at: {
                            Action: 'PUT',
                            Value: paramsBody.updated_at 
                         },
                    }
                }).promise();
                body = paramsBody;
                break;
            case 'OPTIONS':
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
