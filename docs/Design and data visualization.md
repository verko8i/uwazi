# Customize the interface

You can add your own CSSs and assets to customize Uwazi as much as the CSSs and layout allow. Some examples:

<img src="https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/customization-cejil.png" width="600" /> 



<img src="https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/customization-zorlakay.png" width="600" />



In order to add your own CSS and assets, access the customization screens via settings > collection:

![Settings > collection](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/customization-buttons.png)

![Customize CSS](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/customization-css.png)

![Uplaod assets](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/customization-assets.png)

# Data visualization components

You can add graphs and other data visualization elements to pages and rich text fields.

## Search Box

This code snippet added to any page or rich text field, will render a search box that will run queries on your collections of documents:

```
<SearchBox placeholder="Search corruption cases..." />
```

Such as:
![Component search box](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/component-search-box.png)

## Counter
```
<Dataset />
<div className="home-bullet">
    <MarkdownLink url="https://your_uwazi_url/en/library/?q=(filters:(type_of_case:(values:!(%27931c8ec2-848d-4e70-a10a-5f8517d08db8%27))),order:desc,sort:creationDate,types:!(%2759d25a6fd841d62ab685815d%27))">
      <div className="big-bullet">
        <Counter property="type_of_case" value="931c8ec2-848d-4e70-a10a-5f8517d08db8" />
      </div>
      <span>Financial Crime Case</span>
    </MarkdownLink>
  </div>
```
Will render a total counter such as:

![Total counter](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/component-total-counter.png)

Explained:

```
<Dataset />
```
Will inject the data from the default library query so its available to be used as data source for the components. This includes all aggregations for all filters.

You can create other datasets based on library queries that will provide different aggregations for your charts and graphs:

```
<Dataset name='a_name_to_refer_this_dataset' url='http://localhost:3000/?q=(filters:(super_powers:(values:!(ecff0687-19c0-459c-bcbe-0e8d78e1a919))),order:desc,sort:creationDate,types:!(%2758ad7d240d44252fee4e61fd%27))' />
```

```
<MarkdownLink url="https://your_uwazi_url/en/library/?q=(filters:(type_of_case:(values:!(%27931c8ec2-848d-4e70-a10a-5f8517d08db8%27))),order:desc,sort:creationDate,types:!(%2759d25a6fd841d62ab685815d%27))">
```
Will create a link to the library with a particular subselection of data.

```
 <Counter property="type_of_case" value="931c8ec2-848d-4e70-a10a-5f8517d08db8" />
```
Will display the total for a particular option from a library filter (or aggregation). In this case for the property "type_of_case" and the value "931c8ec2-848d-4e70-a10a-5f8517d08db8" (Financial crime case). You can pass a comma separated list of values to the "value" property to add multiple values of the same property together (useful for reporting combined number of documents of different templates, for example).

Obtaining the actual value id requires knowledge of which value represents each database id. This information can be obtained by accessing https://your_uwazi_url/api/templates.

The rest of the code is regular HTML than can be tweaked via [CSS customization](https://github.com/huridocs/uwazi/wiki/Customize-the-interface)

## Bar chart
```
<BarChart property="nigerian_state" context="59d25ff4d841d62ab6858184" />
```

Will render:

![Bar chart](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/component-graph-bar.png)

Context is used for pulling out translations for the labels. This value is the id of the thesaurus, if labels are coming from a thesaurus and the id of the entity template, if its coming from using templates as select options.

You can find these values via the api: https://your_uwazi_url/api/templates. ie, for a thesauri based property (selects and multiselects), it looks like: (Depending on your browser, you may need to install a JSON viewer extension) 

```
id    "cb273227-0e0b-44e1-98e5-6c88fb0e7ed1"
name    "property_name"
filter    true
showInCard    true
content    "58cf1c10f53d6d50ab7494d3"
type    "multiselect"
label    "Property name"
_id    "58d070f2f53d6d50ab749607"
nestedProperties    []
```
In this case, the context we are looking for is "58cf1c10f53d6d50ab7494d3" (content).

## Pie chart / List chart

As other similar components, the PieChart and ListChart components require a Dataset component to feed the correct data.

The basic building block structure for a Pie:
```
<Dataset />
<PieChart property="country" context="58ada34c299e826748545059" />
<ListChart property="country" context="58ada34c299e826748545059" excludeZero="true" />
```

Will render:

![Pie chart](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/component-pie-chart-basic.png)

The Dataset to fetch the data (which can be tailored as explained elsewhere on this page), the PieChart which will render the actual pie, and the ListChart to include the legend.

The `property` value is the aggregation from the Dataset you want to plot.  `context` is used for pulling out translations for the labels. This value is the id of the thesaurus, if labels are coming from a thesaurus and the id of the entity template, if its coming from using templates as select options.

So, for example, if you have a "Case" template with a property "country" pointing to the "countries" thesaurus, the property passed should be `country`, and the context should be the ID of the "countries" thesaurus (and not the ID of the "case" template).

These components have been left intentionally as un-styled as possible for you to give them the look your pages require.

An example of a more complex structure with styles:

```
<Dataset />
<style>
.pie-block {
  display: flex;
}
.pie-block > div {
  width: 50%
}
.list .ListChart ul {
  list-style: none;
}
.list-bullet {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50%;
  margin-right: 5px;
  line-height: 30px;
}
</style>
<div class="pie-block">
  <div class="pie">
    <PieChart property="country" context="58ada34c299e826748545059" colors="#5192CD,#6AB7D6,#83D6DF,#9EE7E1,#B9EFE0,#D4F6E7" />
  </div>
  <div class="list">
     <ListChart property="country" context="58ada34c299e826748545059" excludeZero="true" colors="#5192CD,#6AB7D6,#83D6DF,#9EE7E1,#B9EFE0,#D4F6E7" />
  </div>
</div>
```

Will render:

![Styled Pie chart](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/component-pie-chart-styled.png)

## Card list

```
{list}(https://your_uwazi_url/en/library/?q=(order:desc,sort:creationDate))(limit:3)
```
Renders:
![Card list](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/component-card-list.png)

This syntax will display an arbitrary number of cards, defined by the param "limit", based on a library query URL.

## Map

```
<Dataset geolocation="true" />
<Map />
```
Renders:
![Map](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/component-map.png)


The map component requires a dataset with geolocation data in order to work properly, and the `geolocation` attribute of the `Dataset` component should be activated (`geolocation="true"`).

Clicking on individual or cluster markers in the map will open a side panel with more information about the selected items.

## EntityInfo

```
<EntityInfo entity="entitySharedId" tag="div" classname="classes">More Info</EntityInfo>
```

Creates an HTML element of the type described in tag ("div" is default and can be omitted) bound to a "click" event that will load and display, on the a side panel, the info of the entity described in the "entity" property.  The element allows further HTML structure inside, so you can tailor the 'button' look however you want.

-------------------------

Alpha stage of new components:

### Query component:
This component allows you to do API request to fetch data you may need and expose it in a react [context](https://reactjs.org/docs/context.html) for that page, for example:

```
<Query name="entities" url="search?limit=10&order=desc&sort=creationDate"/>
```

Will search for the last 10 entities created and will store them in the "entities" dataset to be consumed. You can access this dataset with `Value` or `Repeat` for example.

### Value component:
This component prints the value in a given path of the context . For example:
```
<Query name="entities" url="search?limit=10&order=desc&sort=creationDate"/>
<Value path="entities.rows.0.title"/>
```
This example will request 10 entities and then print the title of the first one.

### Repeat component:
The purpose of this component is to iterate over data in the context and print his contents for each entry, for example:

```
<Query name="entities" url="search?limit=10&order=desc&sort=creationDate"/>
<ul>
   <Repeat path="entities.rows">
     <li><Value path="title"/></li>
   </Repeat>
</ul>
```

### EntityLink component:
This component will generate a link to the correct entity viewer based on a given entity property.
```
<Query name="entities" url="search?limit=10&order=desc&sort=creationDate"/>
<ul>
 <Repeat path="entities.rows">
    <li>
         <EntityLink><Value path="title"/></EntityLink>
    </li>
 </Repeat>
</ul>
```

### EntityLink implementation:

Right now EntityLink is a very basic component, that expects an Entity object in the property key "entity" to generate a Link to that Entity. Because of this reason, when used in the Pages it needs to be wrapped in a Value component that is connected to the context and passes the entity down, like in the example:

```
<Value propkey="entity"><EntityLink>Some text</EntityLink></Value>
```

Another option is to adopt the philosophy that new components that we develop for the pages are aware of the context and can grab values directly, but this won't work with already existing components in Uwazi, or be able to use these new components like EntityLink in other parts of Uwazi that are not pages.

# Geolocation

Uwazi supports geolocation of entities and documents. When the database has entities with geolocation properties, the map toggle button will appear as an option in Uwazi's library:

![Geolocation overview](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/geolocation-overview.png)

Filters and searches can be used to narrow down pins in the map. Users can toggle between map and card list view.

The map will automatically group pins in clusters. Clicking on a cluster will get us a list of the included geolocated entities:

![Clicking on a cluster](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/geolocation-cluster-click.png) 

Clicking on a map ping, or one of the results in the cluster, will display the entity details:

![Entity details](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/geolocation-entity-details.png)

Configuring gelocation involves a simple step. In order to add a geolocation field to an entity or document, drag and drop the field type in the templates configuration:

![Adding a geolocation field](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/geolocation-settings.png)

This will enable a geolocation field. Values can be set via map click or manually introducing the coordinates:

![Edit geolocation field](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/geolocation-edit.png)
