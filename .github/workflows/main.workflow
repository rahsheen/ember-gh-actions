name: CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Setup for Ember tests
      uses: mydea/actions-ember-testing@v2.0.0

