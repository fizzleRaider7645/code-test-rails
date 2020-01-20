# Code Test: Rails

A simple Rails 6 app designed to provide a basic API for our code test.

### Requirements

1. [Ruby](http://rvm.io) (2.5+)

### Setup

1. Run the following: `bundle install && cd client && npm install && cd ..` to install gems and client packages

2. Run `bin/rails db:setup` to migrate and seed your development database

3. Run `rake start` to start up the rails and react.js server

You should get JSON output from http://localhost:3001/members

### Testing

Run `bin/rspec` to run the test suite.
