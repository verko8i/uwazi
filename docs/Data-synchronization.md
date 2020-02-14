With Uwazi, you can share data between two or more instances. This feature is experimental and has no UI access to it yet, so you need some technical skills to activate data-sync.

It is meant to solve the following scenarios:
- You have a private collection with sensitive data, but you want to make part of the data public. In this case, you need two Uwazis and configure the data sync to push from the private instance to the public one.
- Several Uwazis want to share their data into a single one with access to all or part of the information from each other.
- You need to work off-line but send the data to an on-line server when you have connectivity for backup or publishing purposes.

It has some rules and limitations:
- The current model is based in white-listing templates and properties. By default everything is blacklisted for security reasons and only synced if explicitly configured to do so.
- The information flows only in one direction for now. So its not a bidirectional data-sync, although we have plans for implementing this model as well.
- For security reasons, the instance sharing the data will push the data into the server receiving the data. This is a drawback when what we want its keeping a local backup of the online data for, ie: offline access to the database.
- You need a credentials with write privileges in the receiving Uwazi.
- There is no duplicate control.
- IDs of entities are overwritten, so if you happen to have duplicated IDs (very low probability), new data will erase older data.
- Not everything is synced, only entities, thesauri and relationships. Pages, menus and other configs are independent to each Uwazi.


## Configuration

The host or "Master" database needs to be modified.  The **settings** collection of the MongoDB database should have a single document.  Edit that document to hold a new key named "**sync**" (please, be careful not to modify or delete any of the existing keys, ie: filters, links, languages, etc.).

That _sync_ key should have the following structure:
```
"sync": {
  "active": true|false, // whether sync is active or not
  "url": "https://some.url.com", // Address of the remote slave
  "username": "johndoe", // Validated username on the remote instance that can perform admin operations
  "password": "verysecurepassword", // Validated password of the username
  "config": {
    "templates": {
      "58c8a99a89da989aaa": ["777a8dsf7a", "87da87da", ...], // Keys are the white-listed template _id strings, values are an array of white-listed property _id strings
      ... // You can add as many templates as desired, white-listing ids and property ids.
    },
    "relationtypes": ["2djava12", ...], // (Optional) An array of relationType _id strings of white-listed type of relationships you want included
  }
},
```

In order for this to work, you need to:
* Ensure that _https://some.url.com_ is a valid Uwazi instance URL
* Ensure that _johndoe_ can log into _https://some.url.com_ with password: _verysecurepassword_
* Ensure that _johndoe_ has admin privileges in the remote or "slave" instance
* Ensure that the template _ids and the property _ids are valid IDs in the MASTER instance
* Ensure that the relationtypes _ids are valid IDs in the MASTER instance
* IMPORTANT! : Restart the Master instance in order for the Master UWAZI to process the changes in the _settings_ configuration

Please remember that this feature is at an experimental or beta stage.