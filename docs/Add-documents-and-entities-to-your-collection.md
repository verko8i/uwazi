# Add documents and entities to your collection
## Upload and publish documents

### Upload your documents

At this time, Uwazi supports PDF format only as source of text, enabling all tools for working with text such as full-text search, tables of contents, text references and others.

You can quickly convert any Uwazi entity into a document by uploading a "main file":

![upload](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/uppload-main-file.png)

PDFs allow us to work with the text of a document. Other file formats such as .doc, .txt, .odt, .jpg, etc can be included in your document collection as an attachment to your PDF document. This might come in handy when you the original file is something other than a PDF and you want to archive it with the PDF version. 

Upload your PDFs by clicking on the upload icon in the top right corner of the site.

![upload](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/uploads_link.jpg)

You can either drag and drop your PDF files into the designated box, or you can browse your local files and select which ones you want to upload. 

![upload options](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/uploads.jpg)

Your files will be added to the upload section of Uwazi, but they will not be published until you assign a template and click _publish_ (see below).

### Publish your documents

Before you publish your documents, you need to assign a template to them (and preferably some metadata as well). To do that you can select one document, make your edits in the right sidebar, and then click _save_.

You can also [select and edit multiple documents](https://github.com/huridocs/uwazi/wiki/Apply-properties). 

When you are finished adding properties to your unpublished documents, you can publish/unpublish them by clicking on the button with the paper airplane icon:

![Publish](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/bulk-publish.png)

## Import CSV

### Migration of databases to Uwazi using CSV files

#### Preparation for Import

It is useful to create a list (separate from the CSV file) of templates/formats that are to be migrated, mentioning type of field and name of field in Uwazi.

To import a CSV file, click on the "Private documents" icon and then "Import".
![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/import-csv-button.png)

#### Guidelines and Conventions

1. Use CSV (comma separated values) file rather than XLS or XLSX (Excel) files – CSV files are easier for Uwazi to parse.
1. Migration works with matching names – therefore, one should create a structure in Uwazi with the same field names as the column headers in the CSV file. For field names one can use either lower case or capitals. It is always possible to rename fields in Uwazi after import.
1. The order of the columns is not important, data will be imported in the correct column in Uwazi.
1. The “title” is required and serves to identify a record. It does not have to be unique.
1. The “date added” is filled automatically with information during the import into Uwazi.
1. The names of columns should not contain empty spaces, use the actual property name/key value of the template field.
1. The pipe symbol `|` is to be used as separator in a field with multiple values.
1. For links to external documents, use the convention `[Name](link)`, for example `[HURIDOCS Micro-thesauri](https://www.huridocs.org/resource/micro-thesauri/)`. These links are to be migrated to a Rich Text field in Uwazi.
1. It is possible to import different CSV files into the same template.
1. If the various columns in the CSV file are to be migrated to different templates in Uwazi one should split the CSV file so that the data for each template are in separate CSV files.
1. After an import has been done, editing of records should take place within Uwazi. A feature to update a set of imported records is under development.
1. If the source data is in different languages, these languages should be configured beforehand in Uwazi.
1. The data in different languages should be on their own columns with the column heading/title separated by a double underscore i.e `title__en`, `title__fr`, `title__ar` i.e 
![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/csv-import.png)
1. Attachments can be imported as a ZIP file of PDFs. There should be a CSV file with the title of the record to which the attachment is to be linked and the name of the file.
1. A feature that is not yet supported is multiple dates within one field.

#### Related issues:

* A feature under development is export of structure and export of all data.
* Another feature is importing only thesauri as documented on https://github.com/huridocs/uwazi/wiki/Import-thesauri-from-CSV. This will also allow to import terminology lists in different languages. HURIDOCS has developed 48 micro-thesauri for the documentation of human rights violations. They are available in several languages as CSV files, see https://www.huridocs.org/resource/micro-thesauri/.
* Different fields in Uwazi can be linked to the same thesaurus.
* For exceptional situations occurring in particular instances we seek to make “work arounds” rather than new features which take more time.

## Create entities

In Uwazi, you may want to create entities in order to include a people, events, courts, or cases in your collection.

Before you create a new entity, you will want to [create your entity template(s)](https://github.com/huridocs/uwazi/wiki/Create-entity-types). 

Create a new entity by clicking on the upload icon in the top right corner of the site.

![upload](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/uploads_link.jpg)

Give the entity a title, indicate the type of entity and other characteristics.

![add entity](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/new_entity.jpg)

Then click the _save_ button in the bottom right corner of the site.

## Working with video and audio

### Image and media fields

Uwazi supports several embedded and native media types including: YouTube, FaceBook, SoundCloud, Streamable, Vidme, Vimeo, Wistia, Twitch, DailyMotion, mp3, mp4, wave, and others. This is achieved via integration with  [React-player](https://www.npmjs.com/package/react-player), supporting all features this component provides.

Add an image or media field to your documents and entities to use this feature:

![Image and media fields](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/image-and-video-fields.png)

These fields support several visualization options:

- Hide label: if checked it won't display this field's label in library cards.
- Full width: will remove the margins to the card border, allowing for richer visuals.
- Show in cards: media will be displayed in cards.
- Style, being either "Fit" will show the entire media inside the container or "Fill" will attempt to fill the container, using it's entire width. In cards, cropping is likely to occur.

#### Uploading you own media files

If you don't want to use an external service (ie. YouTube), you can upload and display the files in Uwazi directly. To do so, add your file as an attachment to an entity, copy the URL provided by Uwazi after the upload its completed and use it in a media or markdown field.

### Embedding media into rich text fields

In order to embed a media file, add a rich text field to a document or entity and use the following syntax:
```
{media}(https://player.vimeo.com/video/67430069)
```

Video embeddings are displayable and fully functional in library cards, side panel and full width view:

![](https://github.com/huridocs/uwazi-assets/raw/master/wiki/screenshots/video-embedding.png)

You can also create a time links to particular parts of the video following this syntax:
```
{media}(https://player.vimeo.com/video/67430068, {"timelinks": {
"51:30": "presentación y declaración inicial de Jorge Contesse", 
"01:03:03":"preguntas de la representación de la víctima", 
"01:19:30":"preguntas de la representación del Estado", 
"01:21:25":"preguntas de la representación de la CIDH", 
"01:27:49":"preguntas del Juez Pérez Pérez"}})
```

Which will be rendered as:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/Video-timelinks.png)



