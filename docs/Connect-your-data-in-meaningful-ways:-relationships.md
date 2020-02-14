Uwazi supports connecting data in unstructured ways, meaning you don't need to follow a particular data structure or predefine a relational model upfront. Both entities and documents can be connected to each other in one-to-one or one-to-many relations arbitrarily:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-overview.png)


## Creating connections

You can create and edit relationships by clicking on the "Edit" button at the bottom of the page. After adding, removing or renaming the connected entities or documents, click on save to store your changes:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/relationships-edition.png)



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


