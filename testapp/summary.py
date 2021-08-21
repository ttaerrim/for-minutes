#!/usr/bin/python
# -*- coding: utf-8 -*-
import requests
import json
import my_settings

class ClovaSummary:
    # Clova Speech invoke URL
    

    url = 'https://naveropenapi.apigw.ntruss.com/text-summary/v1/summarize'
    client_id = my_settings.CLIENT_ID
    client_secret = my_settings.CLIENT_SECRET
    def req(self, content):
        request_body = {
            "document": {
                "content": content
            },
            "option": {
                "language": 'ko',
                "model": "general",
                "summaryCount": 3,
                "tone": 3
            }
        }
        headers = {
            'Accept': 'application/json;UTF-8',
            'Content-Type': 'application/json;UTF-8',
            'X-NCP-APIGW-API-KEY-ID': self.client_id,
            'X-NCP-APIGW-API-KEY': self.client_secret
        }
        return requests.post(headers=headers,
                             url=self.url,
                             data=json.dumps(request_body).encode('UTF-8'))



