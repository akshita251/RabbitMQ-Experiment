# RabbitMQ nodejs Implementation

## docker commands

### Spin rabbitmq server docker
docker run --name rabbitmq -p 5672:5672 -d rabbitmq

### Spin rabbitmq server HTTP server docker
docker run --name rabbitmq -p 5672:5672 -p 15672:15672 -d rabbitmq:3-management

http://localhost:15672 - RabbitMQ dashboards