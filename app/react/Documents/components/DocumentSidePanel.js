import React, {Component, PropTypes} from 'react';
import SidePanel from 'app/Layout/SidePanel';
import {ShowMetadata} from 'app/Metadata';
import {t} from 'app/I18N';

//import DocumentForm from '../containers/DocumentForm';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import Connections from 'app/Viewer/components/ConnectionsList';
//import {AttachmentsList, UploadAttachment} from 'app/Attachments';
import ShowIf from 'app/App/ShowIf';
import {NeedAuthorization} from 'app/Auth';
import {browserHistory} from 'react-router';
//import {TocForm, ShowToc} from './Documents';
import ShowToc from './ShowToc';
import {MetadataFormButtons} from 'app/Metadata';

import {fromJS} from 'immutable';

export class DocumentSidePanel extends Component {
  deleteDocument() {
    this.context.confirm({
      accept: () => {
        this.props.deleteDocument(this.props.doc.toJS())
        .then(() => {
          browserHistory.push('/');
        });
      },
      title: 'Confirm delete document',
      message: 'Are you sure you want to delete this document?'
    });
  }

  close() {
    if (this.props.formDirty) {
      return this.props.showModal('ConfirmCloseForm', this.props.doc);
    }
    this.props.resetForm(this.props.formPath);
    this.props.showTab();
    this.props.closePanel();
  }

  submit(doc) {
    this.props.saveDocument(doc);
  }

  render() {
    const {doc, docBeingEdited, DocumentForm} = this.props;

    const propReferences = this.props.references.toJS();
    const references = propReferences.filter(r => {
      return typeof r.range.start !== 'undefined';
    });
    //const connections = propReferences.filter(r => {
      //return typeof r.range.start === 'undefined';
    //});

    //const docAttachments = doc.attachments ? doc.attachments : [];
    //const docFile = Object.assign({}, doc.file, {originalname: doc.title + '.pdf'});
    //const attachments = doc.file ? [docFile].concat(docAttachments) : docAttachments;

    return (
      <SidePanel open={this.props.open} className="metadata-sidepanel">
        <div className="sidepanel-header">
          <i className="closeSidepanel fa fa-close close-modal" onClick={this.close.bind(this)}/>&nbsp;
          <Tabs selectedTab={this.props.tab || 'metadata'}
            handleSelect={(tab) => {
              this.props.showTab(tab);
            }}>
            <ul className="nav nav-tabs">
              <li>
                <TabLink to="toc">
                  <i className="fa fa-indent"></i>
                  <span className="tab-link-tooltip">{t('System', 'Table of Content')}</span>
                </TabLink>
              </li>
              <li>
                <TabLink to="metadata" default>
                  <i className="fa fa-info-circle"></i>
                  <span className="tab-link-tooltip">{t('System', 'Info')}</span>
                </TabLink>
              </li>
              <li>
                <TabLink to="references">
                  <i className="fa fa-sitemap"></i>
                  <span className="connectionsNumber">{references.length}</span>
                  <span className="tab-link-tooltip">{t('System', 'References')}</span>
                </TabLink>
              </li>
              <li>
                <TabLink to="connections">
                  <i className="fa fa-share-alt"></i>
                  <span className="connectionsNumber">{/*connections.length*/''}</span>
                  <span className="tab-link-tooltip">{t('System', 'Connections')}</span>
                </TabLink>
              </li>
              <li>
                <TabLink to="attachments">
                  <i className="fa fa-download"></i>
                  <span className="connectionsNumber">{/*attachments.length*/}</span>
                  <span className="tab-link-tooltip">{t('System', 'Attachments')}</span>
                </TabLink>
              </li>
            </ul>
          </Tabs>
        </div>
        <ShowIf if={this.props.tab === 'metadata' || !this.props.tab}>
          <MetadataFormButtons
            delete={this.deleteDocument.bind(this)}
            data={this.props.doc}
            formStatePath={this.props.formPath}
            entityBeingEdited={docBeingEdited}
          />
        </ShowIf>

        <NeedAuthorization>
          <ShowIf if={this.props.tab === 'toc' && this.props.tocBeingEdited}>
            <div className="sidepanel-footer">
            <button type="submit" form="tocForm" className="edit-toc btn btn-success">
              <i className="fa fa-save"></i>
              <span className="btn-label">Save</span>
            </button>
            </div>
          </ShowIf>
        </NeedAuthorization>

        <NeedAuthorization>
          <ShowIf if={this.props.tab === 'toc' && !this.props.tocBeingEdited}>
            <div className="sidepanel-footer">
              <button onClick={() => this.props.editToc(this.props.doc.toc || [])} className="edit-toc btn btn-success">
                <i className="fa fa-pencil"></i>
                <span className="btn-label">Edit</span>
              </button>
            </div>
          </ShowIf>
        </NeedAuthorization>

        <NeedAuthorization>
          <ShowIf if={this.props.tab === 'connections' && !this.props.isTargetDoc}>
            <div className="sidepanel-footer">
              <button onClick={/*this.props.startNewConnection.bind(null, 'basic', doc.sharedId)*/() => ''}
                    className="create-connection btn btn-success">
              <i className="fa fa-plus"></i>
              <span className="btn-label">New</span>
            </button>
            </div>
          </ShowIf>
        </NeedAuthorization>

        <NeedAuthorization>
          <ShowIf if={this.props.tab === 'attachments' && !this.props.isTargetDoc}>
            <div className="sidepanel-footer">
              Upload Attachment
            </div>
          </ShowIf>
        </NeedAuthorization>

        <div className="sidepanel-body">
          <Tabs selectedTab={this.props.tab || 'metadata'}>
            <TabContent for="toc">
              <ShowIf if={!this.props.tocBeingEdited}>
                <ShowToc toc={doc.get('toc')} />
              </ShowIf>
              <ShowIf if={this.props.tocBeingEdited}>
                <span>FORM</span>
              </ShowIf>
            </TabContent>
            <TabContent for="metadata">
              {(() => {
                if (docBeingEdited && this.props.metadata.type === 'document') {
                  return <DocumentForm onSubmit={this.submit.bind(this)} />;
                }
                //if (docBeingEdited && this.props.metadata.type === 'entity') {
                  //return <EntityForm/>;
                //}
                return <ShowMetadata entity={this.props.metadata} showTitle={true} showType={true} />;
              })()}
            </TabContent>
            <TabContent for="references">
              <Connections references={fromJS(references)} />
            </TabContent>
            <TabContent for="connections">
              connections
            </TabContent>
            <TabContent for="attachments">
              attachments
            </TabContent>
          </Tabs>
        </div>
      </SidePanel>
    );
  }
}

DocumentSidePanel.propTypes = {
  doc: PropTypes.object,
  formDirty: PropTypes.bool,
  formPath: PropTypes.string,
  templates: PropTypes.object,
  docBeingEdited: PropTypes.bool,
  open: PropTypes.bool,
  tocBeingEdited: PropTypes.bool,
  showTab: PropTypes.func,
  tab: PropTypes.string,
  saveDocument: PropTypes.func,
  startNewConnection: PropTypes.func,
  closeConnectionsPanel: PropTypes.func,
  closePanel: PropTypes.func,
  showModal: PropTypes.func,
  deleteDocument: PropTypes.func,
  resetForm: PropTypes.func,
  loadInReduxForm: PropTypes.func,
  references: PropTypes.object,
  tocFormState: PropTypes.object,
  tocForm: PropTypes.array,
  tocFormLength: PropTypes.number,
  saveToc: PropTypes.func,
  editToc: PropTypes.func,
  removeFromToc: PropTypes.func,
  indentTocElement: PropTypes.func,
  isTargetDoc: PropTypes.bool
};

DocumentSidePanel.contextTypes = {
  confirm: PropTypes.func
};

export default DocumentSidePanel;
