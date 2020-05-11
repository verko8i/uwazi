# Hosting options
## Install Uwazi on your server

You can download the latest version of Uwazi here on [Github](https://github.com/huridocs/uwazi/releases). Be sure you have everything configured on your server first - here is a [list of Uwazi's dependencies](https://github.com/huridocs/uwazi/blob/development/README.md).  

### Production Configuration (advanced)

Uwazi is configured to run correctly with its default values. There is no need to change or reconfigure these values.

However, if you require different database names, elastic indexes, etc. you can override those defaults by exporting one or more of the following environment variables:
```
$ export DBHOST=localhost
$ export DATABASE_NAME=uwazi_development
$ export ELASTICSEARCH_URL=http://localhost:9200
$ export INDEX_NAME=uwazi_development
$ export PORT=3000
$ export UPLOADS_FOLDER=/path/to/uploaded_documents
$ export LOGS_DIR=/path/to/log
$ export LOCALHOST_ONLY = true
```
Again, please notice that there is no need to export any value for a normal installation and only do so if you are certain you need different defaults. If these values are not correctly overridden, Uwazi will fail to run properly.

For production environments, you may need to activate your system's sendmail so user's receive sign up and password recovery notifications.

Alternatively, you can use a custom SMTP configuration to send these emails. Find this option in settings > collection.

Example of linux system service:

```
[Unit]
Description=uwazi backend service for your-instance
After=network.target

[Service]
Environment=DBHOST=localhost
Environment=NODE_ENV=production
Environment=DATABASE_NAME=your-instance
Environment=ELASTICSEARCH_URL=http://elasticsearch:9200
Environment=INDEX_NAME=your-instance
Environment=PORT=40002
Environment=UPLOADS_FOLDER=/path/to/uploaded_documents
Environment=LOGS_DIR=/path/to/log

WorkingDirectory=/path/to/uwazi/code
ExecStart=/usr/bin/node server.js

Restart=always
RestartSec=30s
TimeoutSec=60s
User=uwazi

[Install]
WantedBy=multi-user.target
```
You don't need to keep your Uwazi code along with your user data, meaning that by configuring these variables you can use the same Uwazi code for running multiple Uwazi instances.

**Note on enabling HTTPS** the best to do this at the moment is by using a reverse-proxy (ie. Nginx) while activating LOCALHOST_ONLY in the configuration.

## Host Uwazi with HURIDOCS

HURIDOCS can provide hosting services to human rights organisations who do not have technical capacity to securely host and maintain Uwazi themselves, or who prefer to outsource it. Description of our hosting service:
* Automatic installation of upgrades with new features and patches.
* Secure hosting service in an undisclosed location in Europe.
* Data hosted on a dedicated encrypted server.
* Daily offline backups of database and files on encrypted storage facility (retention policy: daily backups kept for one week, weekly backups kept for one month, monthly backups kept for six months).
* SSL encryption of all communications with the server (https).

[Contact the Uwazi team](http://www.uwazi.io/) if you would like us to host an Uwazi instance for you.

## Backup and restore

Backup and restoring operations are performed manually. 

#### Backup
In order to have a full backup of your data, all you need to do is dump the whole collection in MongoDB, and keep a copy of everything contained in the "uploaded_documents" folder.

#### Restore

Follow these steps in a fresh Uwazi install:

1. Copy/extract the documents in the "uploaded_documents".
2. Restore the database.
3. Run "yarn migrate" in the uwazi directory. This will update your data if needed.
4. Run "yarn reindex".
5. Run the server and navigate to localhost:3000
