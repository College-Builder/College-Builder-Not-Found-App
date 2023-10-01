# College-Builder REST API Gateway

This repository contains an Express app written in TypeScript, specifically designed to run on AWS Lambda. The app's primary purpose is to serve 
a custom [404 web page](https://collegebuilder.easyvirtual.net/404) for requests that are not found within [College Builder Website](https://collegebuilder.easyvirtual.net/) using AWS REST API Gateway.

<a href="https://collegebuilder.easyvirtual.net/404">
  <img src="https://github.com/College-Builder/College-Builder/blob/main/global-assets/College-Builder-Not-Found-App/page-image.png">
</a>

## Baisc AWS API Gateway Structure (Swagger)

The API Gateway is configured with the following structure:

```json
{
  "swagger": "2.0",
  "info": {
    "version": "2023-09-25T19:35:09Z",
    "title": "College-Builder"
  },
  "host": "collegebuilder.easyvirtual.net",
  "schemes": ["https"],
  "paths": {
    "/": {
      "options": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "proxy",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "schema": {
              "$ref": "#/definitions/Empty"
            },
            "headers": {
              "Access-Control-Allow-Origin": {
                "type": "string"
              },
              "Access-Control-Allow-Methods": {
                "type": "string"
              },
              "Access-Control-Allow-Headers": {
                "type": "string"
              }
            }
          }
        }
      },
      "x-amazon-apigateway-any-method": {
        "parameters": [
          {
            "name": "proxy",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {}
      }
    },
    "/{proxy+}": {
      "options": {
        "consumes": ["application/json"],
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "proxy",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response",
            "schema": {
              "$ref": "#/definitions/Empty"
            },
            "headers": {
              "Access-Control-Allow-Origin": {
                "type": "string"
              },
              "Access-Control-Allow-Methods": {
                "type": "string"
              },
              "Access-Control-Allow-Headers": {
                "type": "string"
              }
            }
          }
        }
      },
      "x-amazon-apigateway-any-method": {
        "parameters": [
          {
            "name": "proxy",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {}
      }
    }
  },
  "definitions": {
    "Empty": {
      "type": "object",
      "title": "Empty Schema"
    }
  }
}
```

## Swagger Info

- Version: 2023-09-25T19:35:09Z
  
- Title: College-Builder

## Definitions

- Empty Schema:
  
  - Type: object
    
  - Title: Empty Schema
 
##  License

This script is licensed under the GNU General Public License, Version 3, 29 June 2007.

Feel free to use, modify, and distribute this script as per the terms of the license.

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://opensource.org/licenses/GPL-3.0)
