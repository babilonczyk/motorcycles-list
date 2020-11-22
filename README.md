# Motorcycles-list

A small project made with purpose of learning more about JSON APIs, React/Redux in Rails, Service Objects and RSpec.

# Usage: 

1) Create *master.key* file in /config firectory and fill it with the *8c89379d015423709b718bbfa1b1183d* ( I make it public since it is just a project made for learning only) 

2) Set text editor 

   ```SET EDITOR="path/to/text/editor"```

3) Fill it with your postgresql username and password

   ```rails credentials:edit```

4) We need to install json-server dependency

   ```npm install```

5) Run json-server ( pseudo api in the background on port 1234 )

   ```json-server -p 1234 db-1605979820493.json & ```

6) Start rails server

   ```rails s```
