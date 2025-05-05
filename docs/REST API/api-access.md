---
id: api-access
title: SmartDust Lab REST API access
sidebar_position: 1
---
# SmartDust Lab REST API access
Every SmartDust Lab instance exposes a REST API that allows you to access the system programmatically.
It enables integration with other systems and workflows, providing ways to retrieve information and perform actions.
For example, the API can be used in a CI/CD pipeline to automate the process of running tests on devices.

# Documentation
The main documentation for the REST API is available in a Swagger JSON format at: `https://[your-instance-name].smartdust.me/api/v1/swagger.json`.

## Authentication
The API uses a Bearer token for authentication.
To access the API, you need to generate an access key.

## Generating an access key
Log in to your SmartDust Lab instance in your web browser.
Click “Settings” on the upper menu bar:
![](/cli-client/upper-menu-settings.png)

Then go to the “Keys” tab and in the “Access Tokens” pane click on the “+” icon on the right.
![](/cli-client/access-token-settings.png)
Name your token however you like and after clicking “Generate New Token” your token will be displayed as a string of characters.
Copy it and keep it somewhere you’ll have access to.
