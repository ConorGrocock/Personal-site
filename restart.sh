#!/bin/bash

env=$1

echo $env;

docker-compose -f "docker-compose.${env}.yml" down;
docker-compose -f "docker-compose.${env}.yml" up -d;
