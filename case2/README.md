# How to build and run the solution locally.

# view on
http://localhost:3900/

install dependencies

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

The view part

I preferred ejs view engine for the project. For this project my alternative options were handlebar, pug (jade), mustache and ejs. EJS is simple and easy also allows to plain JavaScript. Ideal for small projects.

Framework

Express.Js is proffered for speed, flexibility, and minimalism. It is suitable for developing both web and mobile applications. Also this NodeJs framework comes with MVC (Model-View-Controller). Extremely fast I/O and it’s robust API making routing easier and faster.

Loggin

Winston:
simple and universal logging library with support for multiple transports.


###  TO RUN CASE 2

step 1: please Download the latest Kafka release and extract it: (https://www.apache.org/dyn/closer.cgi?path=/kafka/2.7.0/kafka_2.13-2.7.0.tgz)

$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0

step 2: START THE KAFKA ENVIRONMENT
NOTE: Your local environment must have Java 8+ installed.

Run the following commands in order to start all services in the correct order:

# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
Open another terminal session and run:

# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
Once all services have successfully launched, you will have a basic Kafka environment running and ready to use.

STEP 3: CREATE A TOPIC TO STORE YOUR EVENTS:
$ bin/kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092

source : https://kafka.apache.org/quickstart#quickstart_send

STEP4: npm start

please open:
http://localhost:3900/