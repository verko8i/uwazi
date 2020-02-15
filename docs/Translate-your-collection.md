# Manage languages

Administrators can configure the available languages in settings > languages:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/manage-languages.png)

"Default language" means: it can't be deleted. It is used as the reference language for certain maintenance operations. So if there is a mismatch in the data, the default language will be the one used as reference. Ie, when adding a new language, if the database already has existing information, a copy of the existing information needs to be added to that new language as fallback content. The default language will be used as reference for that copy.

There are different levels of support depending on the language:

* UI level: in principle all languages are supported and the UI can be translated including RTL languages.
* Search Engine: please refer to [ElasticSearch's Language Analyzers  page](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-lang-analyzer.html). All the languages supported by default. Also please note that there are a few more supported via plug-ins.
* Database level: all languages supported by MongoDB.

If your language is not in the list, please get in touch with us.

Refer to the "Translate your collection" section of this Wiki to get more information.

## Some notes on the Uwazi's internationalization model

When a user uploads a document or creates an entity, a copy of this information will be added to the other available languages. In order to have that piece of information translated, users must switch languages and update the information in the other languages. If the translation is not provided, the information will be displayed in the language it was uploaded regardless of the language the user is working on.

Example. Imagine we have an Uwazi instance with two languages, Arabic and English. While working in Arabic, an administrator uploads a document written in Arabic. An exact copy of this document will appear when switching to English. Admins need to edit this information and provide the English version, if available. If not, this acts as a "fallback" so users navigating in English will see that document in Arabic. Now, if the admin uploads a document in English while working in English, a copy of the document (in English) will appear in the Arabic version of the site.

Some metadata is automatically synced across languages: thesauri based properties (select and multi-select), relationships, date based properties, geolocation and numeric. These properties can be automatically translated, so they just get synced when edited.

Table of contents is also synced as long as we are using the same source document (since it depends on the contents of the documents). So if an admin uploaded a document in English and got copied to the Arabic version, and we never uploaded the Arabic document, creating table of contents entries will also create them in the Arabic version since its the same text (yes, in English). The moment we upload the Arabic document, the table of contents won't be synced anymore.

Text references, media and text fields (text and rich text), are not synced across languages on edition. But they are synced along with the rest of properties on creation: when initially uploading a document or creating an entity, all the metadata added before hitting save for the first time will be copied to the other languages. Further editions won't update the not synchronizable fields.

# How to translate content

## Which content can you translate?

All the content inside Uwazi can be translated to any language you want. There are different ways to translate content (depending on what you want to have translated) but basically they are divided into two main groups:

### Uwazi Interface

The Uwazi Interface (also called "System") contains all translations for every component you see in the application: buttons, alerts, messages... 

As an open source tool, we aim collaboration and personalization on those translations. Inside `Settings > Translation`, you will find all the languages available on your collection. If you want a language that is not already available, [ask our developers team](https://www.uwazi.io/contact/) to add it. Once all the languages are setup, you will be able to add your own translations or modify the default ones to fit your own criteria.

For more information you can review our [guide to translate the interface](https://github.com/huridocs/uwazi/wiki/Translate-the-interface).

### Your content

Every document you upload, entity you create, property or thesauri you add is also translatable.

Sometimes you will need to translate them from `Settings > Translation`, other times it will be as easy as changing the language and modify the content there.

Check our [guide to translate documents](https://github.com/huridocs/uwazi/wiki/Upload-translated-documents) and our [guide to translate metadata and filters](https://github.com/huridocs/uwazi/wiki/Translate-document-metadata-and-filters) for more information.

![translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-context.png)

## Our translation methodology

The Uwazi translation system works with a methodology called **fallback**. A fallback refers to an alternative document if the main (or intended) one is not available.

In the example below, we have an instance with three different languages: English, Spanish and French.

![translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-selector.png)

When you upload a document in English, that document serves as the *fallback for the other languages*. This is because a Spanish nor French translation of this document is available. In this way, the same document will be available in the collection regardless the language selected by the user.

![translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-upload.png)

If a translation of a document is available, the administrator can add that translation on that same document under its corresponding language, and the two documents will be linked. 

![translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-replace.png)

As you can imagine, this methodology has some pros and cons.
Pros:
- Users will be able to interact with your collection in any language you want: the interface, templates, properties, thesaurus and filters can be translated even though your documents are just available in one language.
- Your data will be consistent between languages. All the languages will points to the same documents. No more orphan languages with just a few PDFs.

Con:
- Because the fallback approach shares documents through different languages, users may find a document written in a language different from the interface you are navigating.

# Additional notes
* As from version 1.4 (November 2018), you can add languages yourself - see https://github.com/huridocs/uwazi/wiki/Manage-languages
* When languages are enabled, you will see the language abbreviation in the top right corner of the site.

# Upload translated documents

This guide tackles one of the main aspect of translations in Uwazi: **how to upload a translated document into the system**. You can also check [how to translate metadata, properties, thesaurus...](https://github.com/huridocs/uwazi/wiki/Translate-document-metadata-and-filters) or [how to translate the interface](https://github.com/huridocs/uwazi/wiki/Translate-the-interface).

![Upload translated documents](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-documents.png)

First thing you will want to do is check is the fallback ([more information on Uwazi's fallback translation methodology](https://github.com/huridocs/uwazi/wiki/How-to-translate-content)) by opening the document you want to translate and check both languages. If the document appears in both, the fallback is working properly. (Notice that if you already translated the properties and thesaurus, they will appear translated in each document, regardless the language of the main document.)

![translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-fallback.png)

Next, switch the Uwazi platform to the language of the translation you are uploading and open the target document. Go to the *Attachments* tab. You will see three buttons below the name of the document. You should click on the second one: *Reupload a document*. This will replace the current document with the translated one. The main document will remain in the original language and both PDFs will be linked. That way you can navigate between languages and see both documents.

![translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-replace-button.png)

Notice that replacing documents will reset the document's *Table of Contents* and *References*, if they had been applied to the original document. This is because the new, translated document may have new content such as different paragraphs, and a different number of pages. 

Once you confirm the upload, and after some seconds of waiting, your new document will be uploaded and accessible to the user via the system language options. (Remember that if you already translated the properties and thesaurus, these will be automatically translated too.)

![translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-translated.png)

# Translate metadata and filters

This guide tackles one of the main aspect of translations in Uwazi: **how to translate document metadata and filters**. You can also check [how to upload translated documents...](https://github.com/huridocs/uwazi/wiki/Upload-translated-documents) or [how to translate the interface](https://github.com/huridocs/uwazi/wiki/Translate-the-interface).

![Translate document metadata and filters](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-properties.png)

In Settings you can create a lot of content: document types for you collection, entities to connect with your documents, properties that shape all your content, thesaurus that will help you organice and filter them...

All this content can also be translate easily in Settings.

1. Click on the gear icon in the top right corner of the site.

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Navigate to _Translations_ tab and click on the set of properties, dictionaries or content do you want to translate.

![translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-settings-dictionary.png)

3. A list of all the phrases used on this context will appear. The first one is the *base phrase*. This can't be translated to help you remember which was the context in case you decide to modify all the languages. The second and subsequents phrases are related to the different language you have activated in your site. Please [contact the development team](https://www.uwazi.io/contact) if you want to activate another language that is not in your site!

![translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-properties-inside.png)

Note: The *base phrase* and the English phrase are usually the same, but you can freely modify the English one in case you found another phrase that suits better with your way of communication.

# Translate the interface

This guide tackles one of the main aspect of translations in Uwazi: **how to translate the Uwazi interface**. You can also check how to [translate metadata, properties, thesaurus...](https://github.com/huridocs/uwazi/wiki/Translate-document-metadata-and-filters) or [how to upload translated documents](https://github.com/huridocs/uwazi/wiki/Upload-translated-documents).

![Translate the interface](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-interface.png)

In Settings you can translate all the interface of your Uwazi site, such as buttons, labels, messages...

1. Click on the gear icon in the top right corner of the site.

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Navigate to _Translations_ tab and click on System translations.

![Translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-settings-interface.png)

3. A list of all the phrases used on this context will appear here. The first one is the *base phrase*. This can't be translated to help you remember which was the context in case you decide to modify all the languages. The second and subsequents phrases are related to the different language you have activated in your site. Please [contact the development team](https://www.uwazi.io/contact) if you want to activate another language that is not in your site!

![Translate](http://huridocs.github.io/uwazi-assets/wiki/screenshots/translate-system.png)

Note: The *base phrase* and the English phrase are usually the same, but you can freely modify the English one in case you found another phrase that suits better with your way of communication.

## Live translation

Its also possible to translate UI labels while navigating an Uwazi instance. While logged in as admin, click  on the translations toggle in the top bar besides the language links:

![Activate inline translations](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/translate-activate.png)

This will highlight all translatable items in the current view:

![Highlight translatables](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/translate-highlights.png)

Click on the item you want to translate, add the translations and save =)

![Translate dialog](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/translate-dialog.png)


