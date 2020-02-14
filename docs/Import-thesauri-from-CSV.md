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