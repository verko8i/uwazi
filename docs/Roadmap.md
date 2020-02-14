
## Improve relationships 

**Manage display of relationships**
  * Be able to regroup scattered connections in a hub.
  * Connections can also be rendered in the side panel, both in library and in connections view (that would be, the connections of something connected).
  * Admins can define a default view (grouping, filtering and sorting)
  * Be able to group by entity type and connection type, instead of hubs.

**Performance**
  * Improve performance for high volume of relationships.

**Relationship metadata**
* Admin interface for defining relationship **metadata** fields.
* Filtering by connection **metadata**.

**Create entities and docs from relationships view as a better user workflow** (2-4d):
* The search panel allows for new entity creation
* Entities can be edited and deleted from relationship view
* Allow publishing from side panel
* Be smart when editing/deleting so the user experience is smooth
* Do not duplicate information in the stores

**Inherit metadata from relationship** (1w)
* Be able to select a target field in template configuration
* Index the metadata of the selected field

**Text connections revamp**
* Text references from pages, side panel in pages + several improvements

~Be able to create new relationship types from the relationships tree.~

## Library and document search improvements 

**Form for data intake** (2-4d)
* End-point. Has an array contract
* Can create multiples entities
* Make metadata form renderable in pages

**Advanced search**

* More accessible documents.
  * ~Be able to render a text version of the document. Needed for screen readers, search engines and to have proper copy/paste.~
  * Detach our text references from a particular PDF.js version. So we can keep that library up to date.
  * Have a pre-render so documents load faster.
  * ~Have a document thumbnail with the first page.~

* Better way to deal with default properties (title/date added)
* OCR integration
* Conversion for other formats

**Arbitrary order for select/multiselect (thesauri) items**: (2d)
* Users can sort thesaurus in the thesaurus page
* We will respect the order that the users configured
* A "sort alphabetically" flag will be passed from thesauris to the fields
* This order should be rendered in cards, side panels, and entity view.
 
* ~Support for video and image document types or field types~
* ~Unpublished documents workflow~

## Data Visualisation: Graphs, charts, maps

**Geolocation** (1w)
* Metadata field relationship can handle geolocation points
* Name to location resolution (2-3d) - Lookup to a remote service

**Graphs**
* Build a user interface to allow admins to create their own graphs and charts.
* Support dynamic lengths based on dates as fields and data viz (1-2w)

**Table view** (5-7d)
* Show all properties/only show in cards toggle
* Use a tabular component (research)
* Add a button to the UI

**Timeline dataviz** (1-2w)
* Page component
* Library visualization (vertical TL)
* Improve styles
* Some configuration (for the pages component)


## Improved security features

**Audit log** (4-6d):
* Log edit/delete calls
* Present data in a user understandable way
* Log the post data only in database (users can't see it)
* Track user and dates
* Action type, model
* Pagination

~Security audit~

**Permissions, roles, level of access**
* Document ownership, different levels of access/sharing (light permissions)


## Machine learning
* Automations: machine learning and other classifiers


## Long term/ideas
* ~Move document and entity types to "Templates".~ 
* Have a type of template selector (document, video, entity, image, audio...).
* Matadata from document text workflow + template creation from anywhere
* Federation/syncing
* Advanced search

* Hybrid persistence graph/doc
* Comments/annotation - not sure about this one
* Crawl and import existing documents on a website


## Data import/export

**CSV export** (2-3d) https://github.com/huridocs/uwazi/issues/958
* Export only values (no cross-referencing)
* All records
* Depends on table view

**CSV import entities** (1-2w) https://github.com/huridocs/uwazi/issues/2310 (this is being developed now)
* Test-run to check for errors
* Thesauris and relationship entities are imported apart
* 1 CSV for 1 entity type
* Automatically transform data into the target field
* Template needs to be pre-configured
* 1 single CSV with columns per language for thesauris
* Name lookup to avoid duplicates on creation (2-3d)