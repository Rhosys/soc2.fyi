module.exports = {
  getTemplate() {
    return {
      AWSTemplateFormatVersion: '2010-09-09',
      Description: 'SOC2.FYI deployment template',
      Parameters: {},

      Resources: {
        HostedZone: {
          Type: 'AWS::Route53::HostedZone',
          Properties: {
            Name: 'soc2.fyi'
          }
        }
      }
    };
  }
};

