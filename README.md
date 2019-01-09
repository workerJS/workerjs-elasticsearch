# workerjs-elasticsearch

Elasticsearch plugin for WorkerJS.

## Example

```javascript
const mapping = {
    mappings: {
        doc: {
            properties: {
                date: {
                    type: 'date',
                    format: 'yyyy-MM-dd HH:mm:ss'
                },
                log_type: {
                    type: 'text'
                },
                request_type: {
                    type: 'text'
                },
                request_link: {
                    type: 'text'
                },
                request_method: {
                    type: 'text'
                },
                request_status: {
                    type: 'integer'
                },
                request_code: {
                    type: 'integer'
                },
                call_stack: {
                    type: 'text'
                },
                error_message: {
                    type: 'text'
                },
                tags: {
                    type: 'text'
                },
            }
        }
    }
};

const data = {
    date: '2018-12-21 10:10:54',
    log_type: 'INFO',
    request_type: 'PUT',
    request_link: '/some/link.json',
    request_method: 'HTTP/1.1',
    request_status: 201,
    request_code: 12345,
    call_stack: 'Clients first request, second request, third request, final request...',
    error_message: 'Internal server error',
    tags: [
        'IMPLEMENT_MESSAGE_HANDLER',
        'IMPLEMENT_SUBSCRIBER_HANDLER'
    ]
};

elastic.login('localhost:9200');
elastic.createIndex('test', mapping);
elastic.insert('test', data);
```

