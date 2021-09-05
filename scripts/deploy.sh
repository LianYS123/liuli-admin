#! /bin/bash

ssh lian 'rm -rf static/liuli-admin/*'
scp -r dist/* lian:~/static/liuli-admin/