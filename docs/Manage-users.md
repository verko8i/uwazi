## Add New Users

If you work in collaboration with other people, Uwazi allows you to create users with specific permissions to help you update your collection of documents.

As you can notice, you do not need to create visitors. This is the basic role when anyone visits your collection!

However, if you want to allow some people to perform specific actions into your collection, you can create Users that will allow them login the same way you login into your admin account.

To create a new user, you need to go to Settings and click on the Users section. It will appear a list with all current users inside your collection. You will be able to create new ones, edit or delete them if necessary.

A user has three fields to be completed:
* Username
* E-Mail
* Role (Editor or Admin).

![](https://github.com/quincywiele/HURIDOCS-User-Manuals/blob/master/image65.png)


We will send an email to that person with a link to set the user's password.

__Note__: If you are hosting your own Uwazi or if you are accessing the instance as localhost, e.g. http://localhost:3000/settings to send the invitation, the email will be sent to the address of the instance URL.

If you have a proper domain, create the account from that url, e.g. http://yourdomain.com/settings. This will send a 'yourdomain.com' URL.
If you are using a local IP, then use something like http://192.168.xx.yy/settings, for it to send with that address.

## Manage user permissions

Any  **visitor** to an Uwazi instance is able to:
* View all the documents, entities, properties, connections, etc in Uwazi (but cannot edit, create, or delete anything)
* User the search and filter functionalities

A user with the role of **editor** is able to:

* Do all the things that a visitor can do
* Upload documents and create entities
* Delete documents and entities
* Organize the collection, including: apply properties, create connections and references, create a table of contents
* Add/edit translations

A user with the role of **administrator** is able to:

* Do all the things that an editor can do
* Manage settings
* Configure the information architecture, including: create document and entity types/templates, create dictionaries, name connections
* Configure filters
* Add and delete users

