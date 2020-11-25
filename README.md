# Motorcycles-list

A small project made with purpose of learning more about JSON APIs, React/Redux in Rails, Service Objects and RSpec.

# Install: 

1) Create *master.key* file in /config firectory and fill it with the *8c89379d015423709b718bbfa1b1183d* ( I make it public since it is just a project made for learning only) 

2) Set text editor 

   ```SET EDITOR="path/to/text/editor"```

3) Fill it with your postgresql username and password

   ```rails credentials:edit```

4) Install all dependencies including json-server dependency

   ```npm install```

5) Run json-server ( pseudo api in the background on port 1234 )

   ```json-server -p 1234 motorcycles.json & ```

6) Start rails server

   ```rails s```


# Running Tests: 

NOTICE: BEFORE EVERY TEST RUN IT IS IMPORTANT TO RESTART JSON-SERVER AND TO CLEAN RSPEC.JSON FILE TO ITS FIRST RECORD TO LOOK LIKE THIS:

```
{
  "motorcycles": [
    {
      "id": 1,
      "name": "test_motorcycle"
    }
  ]
}
```

1) Run json-server ( pseudo api in the background on port 1234 )

   ```json-server -p 1234 rspec.json & ```
   
2) Run tests 

   ``` bundle exec rspec ```

