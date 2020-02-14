Administrators are able to configure the available languages in your collection by;

1. Click **Settings**
2. Click on **Languages**

![](https://github.com/quincywiele/HURIDOCS-User-Manuals/blob/master/languages.png)

Here you will notice “Default language.” This is language you cannot delete as it is used as a reference for certain maintenance operations. If the data does not match, the default language will be the reference.
There are different levels of support depending on the language:
* UI level: in principle all languages are supported and the UI can be translated including RTL languages.

* Search Engine: please refer to ElasticSearch's Language Analytizers page. We support all the languages supported by default. Also please note that there are a few more supported via plug-ins.

* Database level: all languages supported by MongoDB.

If your language is not in the list, please get in touch with us.

Refer to the "Translate your collection" section of this Wiki to get more information.

**Some notes on internationalization model**

When a user uploads a document or creates an entity, a copy of this information will be added to the other available languages. In order to have that piece of information translated, users must switch languages and update the information in the other languages. If the translation is not provided, the information will be displayed in the language it was uploaded regardless of the language the user is working on.

**For example:** There is an Uwazi instance with two languages: English and Arabic. While working in Arabic, an administrator uploads a document with Arabic text. An exact copy of this document will appear when switching to English. 
Now, Admins need to edit this information and provide the English version, if available. If it is not available, the arabic document originally uploaded will act as a “fallback” so users navigating the instance in English will see that document in Arabic. If the Admin uploads a document in English, a copy of that document will appear in English in the Arabic version of the site. 

Some metadata is automatically synched across all languages. They are; 
* thesauri based properties (select and multiselect), 
* Relationships
* date based properties,
* Geolocation
* Numeric.
* The Table of Content is also synched as long as the same source document is used (since it depends on the contents of the document). 

**For Example**: If an Admin uploads a document in English and it got copied to the Arabic version- and the arabic version has never been uploaded- creating table of content entries will also create them in Arabic since it’s the same text (English). Once the Arabic document is uploaded, the table of content will not sync anymore.
Other metadata like text references and media and text fields (text and rich fields) are not synced across languages upon edition. They are, however, synced along with the rest of the properties on creation.This is because when you upload a document or create an entity, all the metadata added before you click save for the first time will be copied to other languages. Further editions won’t update the not syncronizable fields. 


***
