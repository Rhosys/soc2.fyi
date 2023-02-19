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
        },

        GitHubWebsiteRecord: {
          Type: 'AWS::Route53::RecordSet',
          Properties: {
            HostedZoneId: { 'Fn::Sub': '${HostedZone}' },
            Name: { 'Fn::Sub': 'soc2.fyi' },
            Type: 'A',
            TTL: '3600',
            // https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain
            ResourceRecords: [
              '185.199.108.153',
              '185.199.109.153',
              '185.199.110.153',
              '185.199.111.153'
            ]
          }
        },
        GitHubWebsiteRecordIpv6: {
          Type: 'AWS::Route53::RecordSet',
          Properties: {
            HostedZoneId: { 'Fn::Sub': '${HostedZone}' },
            Name: { 'Fn::Sub': 'soc2.fyi' },
            Type: 'AAAA',
            TTL: '3600',
            ResourceRecords: [
              '2606:50c0:8000::153',
              '2606:50c0:8001::153',
              '2606:50c0:8002::153',
              '2606:50c0:8003::153'
            ]
          }
        },

        GitHubSubdomainRouting: {
          Type: 'AWS::Route53::RecordSet',
          Properties: {
            HostedZoneId: { 'Fn::Sub': '${HostedZone}' },
            // https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain
            Name: { 'Fn::Sub': 'www.soc2.fyi' },
            Type: 'CNAME',
            TTL: '3600',
            ResourceRecords: ['rhosys.github.io']
          }
        }
      }
    };
  }
};

