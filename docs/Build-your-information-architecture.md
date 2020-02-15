# Create templates

Templates allow you to attribute structured, consistent metadata to your entities. Within each Template, you can assign properties:
* text 
* numeric
* select ([needs thesauri](https://github.com/huridocs/uwazi/wiki/Create-thesauri)) 
* multi-select ([needs thesauri](https://github.com/huridocs/uwazi/wiki/Create-thesauri)) 
* date, date range, multi date, multi date range
* rich text
* geolocation
* external link
* media (for video and audio embedding or self-hosting)
* image
* relationship, which allows you to use items from another template as thesauri items

For example, you may want to create a template called "Court" which will contain properties such as name, judges, location, etc. You create one template for each entity that has a distinct set of properties.

Under _Templates_, you can view, edit, and delete existing templates. 

## Follow these steps:

1. Click on the gear icon in the top right corner of the site.

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Go to _Templates_.
3. Click on _Add template_.
4. You will see two default properties: _Title_, and _Date added_. 
5. Add properties by dragging them into the designated box. 
6. Edit the Name of the property that you are adding.
7. Click _Save_.

![New template](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/new_document_entity.jpg)

Note: 

1. In case the instance is planned to be in Arabic by default, the template and properties should be created in latin characters then translated into Arabic, otherwise it is going to trigger a bug. Developers are working to fix it.

2. When you add a **select** or **multi-select property** to a type, you will see a field titled _Thesauri_ in which you can select a _Thesaurus_ or a _Template_ that you have already created. See the section on [create thesauri](https://github.com/huridocs/uwazi/wiki/Create-thesauri) for more information on how to create these thesauri. 

# Create thesauri

A thesaurus in Uwazi is a list of terms that you will reference in the properties. 

For example, you may want to create a thesaurus for countries so that you can refer to this list when you add the _country_ property to your document template. Using thesauri will make data entry and retrieval more precise, coherent and easy.

You can use the same thesauri across the templates by calling a thesaurus from a property, thus connecting different types of information by a common property.

You can view, edit and delete your existing thesauri by going to _Thesauri_.

## Follow these steps:

1. Click on the gear icon in the top right corner of the site.

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Go to _Thesauri_
3. Click on _Add thesaurus_ under _Thesauri_. 
4. Name your thesaurus. 
5. Add items.
6. Click _Save_ when finished.

![new thesaurus](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/dictionaries.jpg)

## Nested options in thesauri

For big thesauri, grouping values in groups makes information more accessible. In the thesauri creation interface, there is a "Create group" at the bottom action buttons and some controls to move items around:

![Create nested thesauri](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/thesauri-nested.png)

Which gets render as a filter:

![Multi-select filter with nesting](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/thesauri-nested-filter.png)

## Importing thesauri to Uwazi from CSV files

This feature allows you to import terminology lists in different languages from a CSV file into an Uwazi thesaurus. You can import data into an a new or existing thesaurus.

Check this link https://github.com/huridocs/uwazi/wiki/Import-thesauri-from-CSV for more details and a guide on how to.

# Importing thesauri to Uwazi from CSV files

This feature allows you to import terminology lists in different languages from a CSV file into an Uwazi thesaurus. You can import data into an a new or existing thesaurus.

## Preparing the CSV file

The CSV file should have a separate column for each language you want to import, the language should be used as the name of the column. Each row contains a term and its translations in different languages.

Here's a sample CSV file viewed as plain text:
```csv
English,French,German
Man,Homme,Mann
Woman,Femme,Frau
Child,Enfant,Kind
```

Here's the same file viewed in a spreadsheet program:

![Sample spreadsheet](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/import-thesaurus-sample-spreadsheet.png?raw=true)

## Importing data into an existing thesaurus

Go to "Account settings", then "Thesauri", then select the thesaurus you want to add data to. At the bottom, you will see an import button

When you click the button, you'll be prompted to select the csv button to import.

![Import thesaurus form](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/import-thesaurus-form.png?raw=true)


## Importing data into in a new thesaurus

Go to "Account settings", then "Thesauri", the click the "Add thesaurus" button at the bottom of the page. Give the thesaurus a name and click the import button.

To see the newly imported thesauri, go to "Account settings", then "Translations". Select the thesauri you imported which will then display for all the languages imported. 

## HURIDOCS micro-thesauri

HURIDOCS has developed 48 micro-thesauri for the documentation of human rights violations. They are available in several languages as CSV files, see https://www.huridocs.org/resource/micro-thesauri/.


## Notes

- You do not have to include all the languages in your Uwazi instance in the CSV file
- If your CSV file has columns for languages that are not enabled in your Uwazi instance, they will be ignored
- Your CSV file should not have rows with duplicate values in the same column, this will cause a validation error
- The import feature does not support Excel file formats, only CSV files are support. However, you can create a CSV file from your spreadsheet data when saving or downloading the file from your spreadsheet program.

# Name connections

A connection is something that links two pieces of information in your collection. It could link a paragraph to a document, or a word to an entity. 

## Follow these steps:

1. Click on the gear icon in the top right corner of the site.

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Go to _Relationship types_
3. Name your connections here. Now that you have named your connections, you can start to create connections in your document collection.

![new connection](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/connections.jpg)

