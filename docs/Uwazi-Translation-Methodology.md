The Uwazi translation system works with a methodology called fallback. A fallback refers to an alternative document if the main (or intended) one is not available.

In the example below, we have an instance with three different languages: English, Spanish and French.

![](https://github.com/huridocs/uwazi/blob/quincywiele-patch-2/translate1.png)

When you upload a document in English, that document serves as the fallback for the other languages. This is because a Spanish nor French translation of this document is available. In this way, the same document will be available in the collection regardless the language selected by the user.

![](https://github.com/huridocs/uwazi/blob/quincywiele-patch-2/translate2.png)

If a translation of a document is available, the administrator can add that translation on that same document under its corresponding language, and the two documents will be linked.

![](https://github.com/huridocs/uwazi/blob/quincywiele-patch-2/translate3.png)

As you can imagine, this methodology has some strengths and weaknesses. 

### Strength of this methodology:
Users will be able to interact with your collection in any language you want. They can translate:
* the interface,
* templates, 
* Properties
* thesaurus and 
* filters can be translated even though your documents are just available in one language.

Your data will be consistent between languages. All the languages will points to the same documents. No more orphan languages with just a few PDFs.

### Weakness of this methodology:

* Because the fallback approach shares documents through different languages, users may find a document written in a language different from the interface you are navigating.

As from version 1.4 (November 2018), you can add languages yourself - see https://github.com/huridocs/uwazi/wiki/Manage-languages
When languages are enabled, you will see the language abbreviation in the top right corner of the site.

