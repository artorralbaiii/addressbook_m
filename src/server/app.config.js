'use strict';

module.exports = function () {
    var config = {
    	services: {
				    "compose-for-mongodb": [
				        {
				            "credentials": {
				                "db_type": "mongodb",
				                "name": "bmix_dal_yp_ae5ab4d2_e70f_4baa_afbd_3d521cb45de2",
				                "uri_cli": "mongo --ssl --sslAllowInvalidCertificates sl-us-dal-9-portal.4.dblayer.com:17447/admin -u admin -p AHUCQSZXZXVVTWDL",
				                "ca_certificate_base64": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURpVENDQW5HZ0F3SUJBZ0lFV0VjVllqQU5CZ2txaGtpRzl3MEJBUTBGQURCR01VUXdRZ1lEVlFRREREdGgKTG5JdWRHOXljbUZzWW1FdWFXbHBRR2R0WVdsc0xtTnZiUzB6WXpNM1l6Qm1NbVUxT1RSbU9HSmhPRFJrWW1NeQpaV1JsWXpNNVlUZzFNekFlRncweE5qRXlNRFl4T1RRMU16aGFGdzB6TmpFeU1EWXhPVEF3TURCYU1FWXhSREJDCkJnTlZCQU1NTzJFdWNpNTBiM0p5WVd4aVlTNXBhV2xBWjIxaGFXd3VZMjl0TFROak16ZGpNR1l5WlRVNU5HWTQKWW1FNE5HUmlZekpsWkdWak16bGhPRFV6TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQwpBUUVBOFJRcmJCTWlyM1N5VC9lRmR1NW9EZnF3eUdmNUpVZytsRlFSdDlRSTBEOGtlTTY2VmxLWjBoTG11RXpwCmhiZkxhWGdNTU9HKzNlR204T0VmUmVzM3UvcXVKY25IcFhER3ErVUxMWVFRanh5eTZTbDI2bHRzNnRoUzNDNkQKSDQ4WnJlemlTQk5uQksvb1dnYWs5NTQ0OEE5blVqRWNyY0ZVbXdoN3dUNmt2dmhMWEhiZEN1MjJtekl6U2ZRNgp0WTRFWDJsTkNTY28zL2cvb0xkV1Fnek80eFlBaFV2NnFKMUQzSGtRbkZuSWhuaURYRTVjQzhSTEJMVFpVamJHCnBLQlZ4cE1ySHQxWTcxc09XeFBzeU03VWd6VmhMWXJoUkNkeHQ0Y0xNbnJlU2FXV2hiU0R6NHltd211MEQ1NlMKR0JMUGRGRmNERjJ2VzJzWnhpV0NtT1RzSndJREFRQUJvMzh3ZlRBZEJnTlZIUTRFRmdRVVJnK1JrbHhxbml4cQphb0RwT0h0ODQ2RFNYNnN3RGdZRFZSMFBBUUgvQkFRREFnSUVNQjBHQTFVZEpRUVdNQlFHQ0NzR0FRVUZCd01CCkJnZ3JCZ0VGQlFjREFqQU1CZ05WSFJNRUJUQURBUUgvTUI4R0ExVWRJd1FZTUJhQUZFWVBrWkpjYXA0c2FtcUEKNlRoN2ZPT2cwbCtyTUEwR0NTcUdTSWIzRFFFQkRRVUFBNElCQVFDeld0ZGx5UVNidWk0OVE3ZG4wbmVMV1crRworNG91TTJGb1ByYjhqTWxqcTlnY2luRUFzWHgzNXgyMnBzaWJQd21XWm1EOHFZVDFLUldzYlJpVnlYYnA2bzZtCmlsOE5JOFdra2dwbU5sM1JWRTh5dVNPRWNCeVhCNktMbTNQaURySENuUk5pdVpqeW1aczd1SjY3Sm04YXZkQVkKa3ZCY2Qxa3EwbW00ZjVURXVIT0hMbjBQWng1aE5sRHcvYnp0QW9sY1ZJRHlmcDluT1hVK0c4c1VuN2xlMnQ0egpPdlpXL2xVb1FLOFBvYUdnZFRXYnRDb2F5Q3VyOVRRamNNVFh4Q3l3VHVYOFFhL0FRSTcyT0Rjd3NKUTU0VVgwCi9xczVkZmdSQ21pNG9QSTZQd0Q3TG9ENnZ6N1B2Z2x2YUVWdkRPMFdmUlNKVzlHY1V0dDh1QmtsVUNGNwotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==",
				                "deployment_id": "5847155bcde1b80017000055",
				                "uri": "mongodb://admin:AHUCQSZXZXVVTWDL@sl-us-dal-9-portal.4.dblayer.com:17447,sl-us-dal-9-portal.3.dblayer.com:17447/admin?ssl=true"
				            },
				            "syslog_drain_url": null,
				            "label": "compose-for-mongodb",
				            "provider": null,
				            "plan": "Standard",
				            "name": "Compose for MongoDB-2v",
				            "tags": [
				                "big_data",
				                "data_management",
				                "ibm_created"
				            ]
				        }
				    ]
				}
    };

    return config;
};