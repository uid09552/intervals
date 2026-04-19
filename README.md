# intervals

This is an n8n community node. It lets you use Intervals.icu in your n8n workflows.

Intervals.icu is a training and workout management platform for athletes and coaches. This node integrates with Intervals.icu API endpoints to retrieve activity and athlete data.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The Intervals node currently supports the following operations:

- Activity
  - Get an activity by ID
  - Get many activities
  - Delete an activity
- Athlete
  - Get athlete information
  - Get athlete profile

## Credentials

This node uses the `IntervalsApiKey` credential type.

Authentication is performed using HTTP Basic auth with the username `API_KEY` and the API key as the password.

## Compatibility

- Compatible with n8n community nodes format
- Tested with n8n v0.27.x
- Package name is `intervals`

## Usage

1. Install and link the package to n8n as a community node.
2. Add the Intervals node to your workflow.
3. Configure the `IntervalsApiKey` credential with your Intervals.icu API key.
4. Choose a resource and operation, then run the workflow.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Intervals.icu website](https://intervals.icu/)
* [Intervals.icu API documentation](https://intervals.icu/api/v1/docs/)

## Version history

- `1.0.0` — Initial release of the Intervals n8n community node.