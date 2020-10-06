import documentProperties from './document_properties';
import { text } from './mappings';

const properties = {
  documents: documentProperties,
  '@timestamp': { type: 'date', doc_values: true },
  '@version': { type: 'text', index: false },
  fullText: { type: 'join', relations: { entity: 'fullText' } },
  title: {
    type: 'text',
    index: true,
    fields: {
      sort: text,
      sayt: { type: 'search_as_you_type' },
    },
    term_vector: 'with_positions_offsets',
  },
  creationDate: {
    type: 'date',
    format: 'epoch_millis',
    fields: {
      raw: { type: 'date', index: false },
      sort: { type: 'date' },
    },
  },
  attachments: {
    type: 'object',
    enabled: false,
  },
  icon: {
    type: 'object',
    enabled: false,
  },
  language: {
    type: 'keyword',
  },
  published: {
    type: 'keyword',
  },
  sharedId: {
    type: 'keyword',
    fields: {
      raw: { type: 'keyword' },
      sort: { type: 'keyword' },
    },
  },
  template: {
    type: 'keyword',
    fields: {
      raw: { type: 'keyword' },
      sort: { type: 'keyword' },
    },
  },
  type: {
    type: 'keyword',
  },
  user: {
    type: 'keyword',
  },
};

export default properties;
