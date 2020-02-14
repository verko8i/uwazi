A simple way to search documents or entities in your collection is using the Search box on the top left side of your screen.

![](https://github.com/quincywiele/HURIDOCS-User-Manuals/blob/master/search1.png)

You can perform a generic search, which will show any terms mentioned in the search query.

![](https://github.com/quincywiele/HURIDOCS-User-Manuals/blob/master/search2.png)

Or you can search for a specific term or phrase using “...” to find the exact match.

![](https://github.com/quincywiele/HURIDOCS-User-Manuals/blob/master/search3.png)

It is also possible to search for a word or a phrase in a particular document. To do so:
1. Select the document you want to search
2. Click on search text function and input what you are looking for
3. You will see all the mentions of your search query listed in chronological order as they appear in the document.

![](https://github.com/quincywiele/HURIDOCS-User-Manuals/blob/master/search4.png)

The results of your search will be displayed in chronological order as they appear in the document. You can click on the number under document content to take you to the correct segment of the text. 

**Query string searches**
You can now search for specific info using wildcards, boolean search and query strings.
*   *for wildcard search: juris* will match words such as jurisdiction, jurisdictional, jurists, jurisprudence, etc.

* ? for one character wildcard : "198?" will match 1980 to 1989 and also 198a, 198b, etc.

* Exact term match by enclosing your search string with quotes. : "Costa Rica" will toss different results compared to Costa Rica without quotes.

* ~ for proximity searches: "the status"~5 will find anything having "the" and "status" within a distance of 5 words, such as "the procedural status", "the specific legal status".

* AND, OR and NOT for boolean searches: "status AND women NOT Nicaragua" will match anything containing both the words status and women, and necessarily not containing the word Nicaragua.

![](https://github.com/quincywiele/HURIDOCS-User-Manuals/blob/master/search5.png)

Please refer to ElasticSearch's the query string syntax page for more information on search options.




