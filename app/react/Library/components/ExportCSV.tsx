import { EntitySchema } from 'shared/types/entityType';
import { t } from 'app/I18N';
import { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { IImmutable } from 'shared/types/Immutable';
import { TemplateSchema } from 'shared/types/templateType';
import { ExportToCsv } from 'export-to-csv';

const defaultProps = {
  selectedDocuments: [] as IImmutable<EntitySchema>[],
};
export type ExportCSVProps = typeof defaultProps & {
  documents: IImmutable<EntitySchema>[];
  templates: IImmutable<TemplateSchema>[];
};

function transformLabelIntoTitle(label: string): string {
  return label.toLocaleUpperCase().replace(/ /g, '_');
}

function getEntityAsCsvRecord(entity: EntitySchema, header: { id: string; title: string }[]): any {
  const record: { [k: string]: any } = {};
  let keys = Object.keys(entity);
  keys = keys.filter(k => header.find(h => h.id === k)!!!);
  keys.forEach(key => {
    record[key] = entity.key;
  });

  let metadataKeys = Object.keys(entity.metadata ?? {});
  metadataKeys = metadataKeys.filter(k => header.find(h => h.id === k)!!!);
  metadataKeys.forEach(key => {
    record[`metadata.${key}`] = entity.metadata?.key ?? '';
  });
  return record;
}

function getCsvHeader(
  documents: IImmutable<EntitySchema>[],
  templates: IImmutable<TemplateSchema>[]
): { id: string; title: string }[] {
  // iterate through each document and return list of template IDs associated with documents
  const templateIds: string[] = documents
    .filter((document: EntitySchema) => document.get('template') === undefined)
    .map<string>((document: EntitySchema) => document.get('template'));

  // fetch all relevant template properties
  const properties: Set<string> = new Set<string>();
  templateIds.forEach(id => {
    const props = templates.find(template => template.get('_id') === id)?.get('properties');
    if (props !== undefined) {
      props.toJS().forEach(p => {
        properties.add(p.name);
      });
    }
  });
  const header: { id: string; title: string }[] = [];
  properties.forEach((p: string) => header.push({ id: p, title: transformLabelIntoTitle(p) }));
  return header;
}

export class ExportCSVBase extends Component<ExportCSVProps> {
  public static defaultProps = defaultProps;

  buildCSV(path: string) {
    const header = getCsvHeader(this.props.selectedDocuments, this.props.templates);
    const options = {
      filename: path,
      showLabels: true,
      useBom: true,
      headers: header.map(h => h.title),
    };

    const records = [
      this.props.selectedDocuments.map(entity => getEntityAsCsvRecord(entity, header)),
    ];

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(records);
  }

  render() {
    return (
      <div className="btn btn-primary btn-sm" onClick={this.buildCSV.bind(this, '/tmp/test.csv')}>
        <span className="btn-label">{t('System', 'Export as CSV')}</span>
      </div>
    );
  }
}

interface ExportCSVState {
  library: {
    documents: {
      rows: IImmutable<EntitySchema>[];
    };
    ui: {
      selectedDocuments: IImmutable<EntitySchema>[];
    };
  };
  templates: IImmutable<TemplateSchema>[];
}

function mapStateToProps(state: ExportCSVState) {
  return {
    documents: state.library.documents.rows,
    selected: state.library.ui.selectedDocuments,
    templates: state.templates,
  };
}

export const ExportCSV = connect(mapStateToProps, null)(ExportCSVBase);
