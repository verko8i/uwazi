Uwazi can support any [ISO 639](https://en.wikipedia.org/wiki/ISO_639) language. This means that the interface can be translated into any ISO 639 language, and users can upload documents in any languages. 

Right-to-left interface support for Arabic and other languages is available as from March 2019.

However, not all the functionalities are available for every language. For example, full text searches do not take into account stemming, stopwords, and some other language-specific functionalities. There is more information below on which languages *are* supported with full text search functionality.

## Elastic Search Language Analyzers

There is a set of analyzers aimed at analyzing specific language text. The following types are supported (as of 5 Nov 2018):

arabic, armenian, basque, brazilian, bulgarian, catalan, cjk, czech, danish, dutch, english, finnish, french, galician, german, greek, hindi, hungarian, indonesian, irish, italian, latvian, lithuanian, norwegian, persian, portuguese, romanian, russian, sorani, spanish, swedish, turkish, thai.

Source: [https://www.elastic.co/guide/en/elasticsearch/reference/5.6/analysis-lang-analyzer.html](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/analysis-lang-analyzer.html)

## MongoDB Text Search Functionality

Text search feature supports using the two-letter language codes defined in ISO 639-1. Find supported languages here: [https://docs.mongodb.com/manual/reference/text-search-languages/](https://docs.mongodb.com/manual/reference/text-search-languages/)