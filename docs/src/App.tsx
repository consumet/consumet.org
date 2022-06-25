import { RedocStandalone } from 'redoc';

function App() {
  return (
    <RedocStandalone spec={{
      "openapi": "3.0.1",
      "info": {
        "title": "TheCodeBuzz-Service",
        "version": "v1"
      },
      "paths": {
        "/api/Pay": {
          "get": {
            "tags": [
              "Pay"
            ],
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/Employee"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Employee"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Employee"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "components": {
        "schemas": {
          "Employee": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "nullable": true,
                "readOnly": true
              },
              "name": {
                "type": "string",
                "nullable": true,
                "readOnly": true
              }
            },
            "additionalProperties": false
          }
        },
        "securitySchemes": {
          "bearerAuth": {
            "type": "http",
            "description": "JWT Authorization header using the Bearer scheme.",
            "scheme": "bearer",
            "bearerFormat": "JWT"
          }
        }
      },
      "security": [
        {
          "bearerAuth": []
        }
      ]
    }} />
  );
}

export default App;
