# Personal Site

This repo contains all the code used to run my personal site [grocock.email](grocock.email).

## Description of the project
The project is broken down into 3 servers

 - frontend
 - backend
 - assets

Each of which performs a different role:
### Frontend
The frontend server uses react to take data collected from the other two servers and renders a complete webpage.
### Backend
The backend server takes takes requests from the client and queries the database, which provides a layer of abstraction from the database.
### Assets
The assets server is purely used to provide assets for the frontend. I made this a seperate server from the backend to allow it to run more specific features than the backend. For example the resizing and formatting of images. 

# Installation
## Prerequisites

     - Docker
     - Docker Compose
     - Traefik
Traefik is required to run each server at the same time on a seperate subdomain. SImilar to how it would be done in production. The default development compose file, has the server running on blog.test.
## Running the servers

From the root directory running the following command should be enough to get it running

    docker-compose up -d

# Preview
The code in this repositiory is the same code [that is running my website](grocock.email) 
