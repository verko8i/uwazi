# Open and view a document

In the library section, you will find your entire document collection. Each document or entity will be displayed in this library as a _card_. To open and view the full document, you can either:

hover over the document card and click on the _document_ icon:

![Hover and click view icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/open_card.png)

or, click on the card to open the right side panel and then click on the _document_ icon:

![Open side bar and click view](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/open_sidepanel.png)

# Apply properties

In the library section, you will find your entire document collection. Each document or entity will be displayed in this library as a _card_. To open and view the full document, you can either:

hover over the document card and click on the _document_ icon:

![Hover and click view icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/open_card.png)

or, click on the card to open the right side panel and then click on the _document_ icon:

![Open side bar and click view](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/open_sidepanel.png)

# Create connections

Connections allow you to link up two documents or entities without any hierarchical structure. You just select one of them, click on connect and the link is made.

You can see all the connections a document has on the right panel, clicking on the **Connections** tab. Notice that you can create a connection **inside** the document, not from Library (we will improve this soon).

![Connections tab](http://huridocs.github.io/uwazi-assets/wiki/screenshots/connections-base.png?ver=1)

To create a new connection, just click on the **Edit** button and then on the Add entities / documents +:

![Create a connection](http://huridocs.github.io/uwazi-assets/wiki/screenshots/connections-create.png?ver=1)

In the next step you will be able to select the _connection type_ and the _target document/entity_. Use the search field to find your connection's _target document/entity_ by typing in words from the title of the document/entity.
You can read more about [Connections setup](https://github.com/huridocs/uwazi/wiki/Name-connections) to create new kind of connections and use them on your collection.

![Connection data](http://huridocs.github.io/uwazi-assets/wiki/screenshots/connection-data.png?ver=1)

Now your new connection will appear on the Connection tab.

![New connection displayed in the right panel](http://huridocs.github.io/uwazi-assets/wiki/screenshots/connection-display.png?ver=1)

Also you can view the connections on an entity clicking on the **Connections** tab in the right sidebar. The results will display in the main viewing window. Here is an example:

![Display entity relationships](http://g.recordit.co/2yb85Zop9N.gif)

# Create a table of contents

Most documents have a defined structure through the pages. With a **Table of contents**, you will be able to reproduce this structure on the right panel and allow user quickly navigate through the document content. Alternatively, you can create your own structure that would be most useful to your users. 

## Follow these steps:

Select the text and click on _Add to table of contents_.

![Toc base](http://huridocs.github.io/uwazi-assets/wiki/screenshots/toc-base.png)
![Toc add](http://huridocs.github.io/uwazi-assets/wiki/screenshots/toc-add.png)

Repeat this process to create the whole Table of contents easily:

![Toc multiple](http://huridocs.github.io/uwazi-assets/wiki/screenshots/toc-multiple.png)
![Toc multiple render](http://huridocs.github.io/uwazi-assets/wiki/screenshots/toc-multiple-render.png)

You can edit the information by clicking on the button below and add indentation by clicking on the arrow buttons:

![Toc indent](http://huridocs.github.io/uwazi-assets/wiki/screenshots/toc-indent.png)
![Toc indent render](http://huridocs.github.io/uwazi-assets/wiki/screenshots/toc-indent-render.png)

We support 6 levels of indentation with different styles for every level to improve readability:

![Toc indent levels](http://huridocs.github.io/uwazi-assets/wiki/screenshots/toc-indent-levels.png)

# Connect your data in meaningful ways using relationships

Uwazi supports connecting data in unstructured ways, meaning you don't need to follow a particular data structure or predefine a relational model upfront. Both entities and documents can be connected to each other in one-to-one or one-to-many relations arbitrarily:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-overview.png)

## Information hubs

Uwazi relationships support information hubs, that is, a concentrator that holds together a series of documents or entities. Hubs are useful for telling apart mixed information. Ie. a person may be related to two different legal cases but you want that information segregated:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-hubs-example.png)

A hub denotes relationships that, not only make sense to have grouped, but that would INFER A RELATIONSHIP BETWEEN ALL ITS CHILDREN.

So, if document A has a hub with documents B and C, then a relationship would be inferred between B and C also. Not only inferred but it actually exists. On the other hand, if you have document A with one hub to B and another hub to C, then B and C will have NO relationship between each other.

## Creating connections

You can create and edit relationships by clicking on the "Edit" button at the bottom of the page. After adding, removing or renaming the connected entities or documents, click on save to store your changes:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-edition.png)

## Relationship fields in templates

Former select and multiselect fields that used an entity template as options, have been replaced with a relationship field. This is a preconfigured relationship type with some advantages:

- The allowed targeted entities (select list) can be used to force connecting only to one type of template. Ie. If we have a type "Country" and we want to add that property to another type (ie. Person). Specifying the select list "Country" will force users to use only countries for this field.
- A relationship type can be defined as well.

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-field-config.png)

This means, a Relationship field will behave as a regular multiselect, and at the same time, create a relationship of a particular type that will be displayed in the relationships tree view:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationship-field-tree.png)

Likewise, configuring a Relationship field for a set of connections that already exist, will display these connections as a multiselect field. Ie. we added some connections as signers of a document:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-example-1.png)

And we configure a Relationship field with "Judges" as the target entity and "Signers" as the relationship type, it will be presented in the metadata as:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-as-metadata-1.png)

Moreover, this field can be used for filtering as a regular multiselect:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-as-filter.png)

Also, you can configure this field as the rest of the metadata fields:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationship-field-config-2.png)

- Required: will force a particular entity of document to have at least one relationship of a particular type. Ie, all documents must have a country.
- Show in cards: will display the relationships as metadata en the grid cards.
- Use as filter: this relationship can be filtered in the library.
- Default filter: this filter will be shown regardless of document and entity types being selected.

## Working with hubs

You can move relationships between hubs to make sure you data is properly grouped. When in relationships view, hit the "Edit" button and use the available controls to configure your connections:

![Editing hubs](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-edit-hubs.png)

## Text references in relationship view

Text references are also rendered in relationships view:

![Text references in relationships](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-text-references.png)

# Create references

In Uwazi, a reference is a bookmark that connects selected content in a document to something. This _something_ can be: other selected content in the same document, other selected content in another document, an entire document, or an entity. 

## Reference specific text in a document

1. [Open and view the document or entity](https://github.com/huridocs/uwazi/wiki/Open-and-view-a-document)
2. Select the text and click on _Connect to paragraph_
3. Find and select the document that contains the text you want to refer to, then click the arrow button. This will open the document you have selected. 
4. Select the text and click _Save_

Users will see this referenced text under the _References_ tab in the right sidebar. 

![Reference text](http://g.recordit.co/QDzjvoqjrD.gif)

## Reference an entire document or entity

1. [Open and view the document or entity](https://github.com/huridocs/uwazi/wiki/Open-and-view-a-document)
2. Select the text and click on _Connect to document_
3. Find and select the document or entity to which you want to refer. 
4. Click _Save_

Users will see this referenced text or document/entity under the _References_ tab in the right sidebar. When the reference is selected, the highlighted text will be displayed in the PDF. 

![Reference an entire document or entity](http://g.recordit.co/CkfOkyrTAs.gif)

# Upload files to a document or entity

To upload a file to a document/entity:
* open the document/entity
* select Add file if you want to upload a file that will be accessible only for the current interface language
* or: select Add to all languages if you want this file to be displayed in all interface languages for this document/entity.
_Note: The option Add to multiple languages will only be available if your instance has more than one UI Language._

Visitors will see the attached files under the _Downloads_ section under the _Information_ tab. 

![upload files](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/attachments.jpg)
