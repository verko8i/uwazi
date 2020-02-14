## Migration of databases to Uwazi using CSV files

### Preparation for Import

It is useful to create a list (separate from the CSV file) of templates/formats that are to be migrated, mentioning type of field and name of field in Uwazi.

To import a CSV file, click on the "Private documents" icon and then "Import".
![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/import-csv-button.png)

### Guidelines and Conventions

1. Save your file as a CSV (Comma Separated Values). CSV files are easier for Uwazi to parse.
1. Migration works with matching names – therefore, one should create a structure in Uwazi with the same field names as the column headers in the CSV file. For field names one can use either lower case or capitals. It is always possible to rename fields in Uwazi after import.
1. The order of the columns is not important, data will be imported in the correct column in Uwazi.
1. The “title” is required and serves to identify a record. It does not have to be unique.
1. The “date added” is filled automatically with information during the import into Uwazi.
1. The names of columns should not contain empty spaces, use the actual property name/key value of the template field. You can find these values via the api: https://your_uwazi_url/api/templates.
1. The pipe symbol `|` is to be used as separator in a field with multiple values.
1. To import geolocation data, the coordinates data should be included in one column with the latitude coordinates first and the longitude coordinates next with no spaces, separated by the pipe symbol. In the CSV file, this column should be named 'geolocation'.
1. For links to external documents what you want to migrate to a Rich Text property in Uwazi, use the convention `[Name](link)`, for example `[HURIDOCS Micro-thesauri](https://www.huridocs.org/resource/micro-thesauri/)`. To import hyperlinks the Uwazi link property, follow the "label|url" protocol.
1. It is possible to import different CSV files into the same template.
1. If the various columns in the CSV file are to be migrated to different templates in Uwazi one should split the CSV file so that the data for each template are in separate CSV files.
1. After an import has been done, editing of records should take place within Uwazi. A feature to update a set of imported records is under development.
1. If the source data is in different languages, these languages should be configured beforehand in Uwazi.
1. The data in different languages should be on their own columns with the column heading/title separated by a double underscore i.e `title__en`, `title__fr`, `title__ar` i.e 
![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/csv-import.png)
1. Attachments can be imported as a ZIP file of PDFs. There should be a CSV file with the title of the record to which the attachment is to be linked and the name of the file.
1. Multiple dates within one field is not yet supported.

### Related issues:

* A feature under development is export of structure and export of all data.
* Another feature is importing only thesauri as documented on https://github.com/huridocs/uwazi/wiki/Import-thesauri-from-CSV. This will also allow to import terminology lists in different languages. HURIDOCS has developed 48 micro-thesauri for the documentation of human rights violations. They are available in several languages as CSV files, see https://www.huridocs.org/resource/micro-thesauri/.
* Different fields in Uwazi can be linked to the same thesaurus.
* For exceptional situations occurring in particular instances we seek to make “work arounds” rather than new features which take more time.