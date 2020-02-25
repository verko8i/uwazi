# Search and filter your collection
## Search

A simple way to search documents or entities in your collection is using the **Search box** on the top left side of your screen. 

![Search box on library](http://huridocs.github.io/uwazi-assets/wiki/screenshots/Search_base_new.png)

You can perform a generic search, which will show any terms mentioned in the search query.

![Search suggestions](http://huridocs.github.io/uwazi-assets/wiki/screenshots/Search_basic.png)

Or you can search for a specific term or phrase using “...” to find the exact match.

![Search results](http://huridocs.github.io/uwazi-assets/wiki/screenshots/Search_exact_match.png)

It is also possible to search for a word or a phrase in the whole collection… 

![Search results](http://huridocs.github.io/uwazi-assets/wiki/screenshots/Search_collection_result.png)

… or inside a particular document. To do that, click on a document you want to search and then click on the search icon on the right hand side. You will see all the mentions of your search query listed in chronological order as they appear in the document. 

![Search results](http://huridocs.github.io/uwazi-assets/wiki/screenshots/Search_document_result1.png)

Click on a page number and you will see your search query highlighted in the body of the document. 

![Search results](http://huridocs.github.io/uwazi-assets/wiki/screenshots/Search_document_result2.png)

### Query string searches

You can now search for specific info using wildcards, boolean search and query strings.

- \* for wildcard search. Ie: "juris*" will match words such as jurisdiction, jurisdictional, jurists, jurisprudence, etc.

- ? for one character wildcard. Ie: "198?" will match 1980 to 1989 and also 198a, 198b, etc.

- Exact term match by enclosing your search string with quotes. Ie. "Costa Rica" will toss different results compared to Costa Rica without quotes.

- ~ for proximity searches. Ie: "the status"~5 will find anything having "the" and "status" within a distance of 5 words, such as "the procedural status", "the specific legal status".

- AND, OR and NOT for boolean searches. Ie. "status AND women NOT Nicaragua" will match anything containing both the words status and women, and necessarily not containing the word Nicaragua.

![Search results](http://huridocs.github.io/uwazi-assets/wiki/screenshots/Search_boolean.png)

Please refer to ElasticSearch's the [query string syntax page](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/query-dsl-query-string-query.html#query-string-syntax) for more information on search options.

## Filters

Filters are a great way to manage your collection of documents based on the properties assigned to each document or entity.

![Filters on library](http://huridocs.github.io/uwazi-assets/wiki/screenshots/filters-base.png)

The first thing you need to do is select a document or property type from the right panel on the library. This will perform a search of every document or entity that belongs to that type.

![Filters applied](http://huridocs.github.io/uwazi-assets/wiki/screenshots/filters-applied.png)

Once you have selected one or more document or entity type to filter, the side panel will update and you will be able to select additional filters to expand your search. Those options are **properties** assigned to each document or entity type under Settings. You can review [how to create document templates](https://github.com/huridocs/uwazi/wiki/Create-document-templates) or [how to create entity templates](https://github.com/huridocs/uwazi/wiki/Create-entity-templates) for further information about adding properties into a template.

![Filters with properties](http://huridocs.github.io/uwazi-assets/wiki/screenshots/filters-properties.png)

Note: When you filter the documents using more than one document or entity type, our system will find the common properties present in all these types and let you filter based on those properties. In this example below, you can see how we use a common property (Country) to find information across document/entity types:

![Filters with common properties](http://huridocs.github.io/uwazi-assets/wiki/screenshots/filters-common.png)

### AND/OR toggle

Users can toggle between using an AND operator for the filter or using the OR operator. 
Using the AND operator will display the documents or entities that contain all the properties for which you are filtering. 
Using the OR operator will display the documents or entities that contain at least one of the properties for which you are filtering.

