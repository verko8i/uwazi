import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { advancedSort } from 'app/utils/advancedSort';
import { t } from 'app/I18N';

import { NeedAuthorization } from 'app/Auth';
import Attachment from 'app/Attachments/components/Attachment';
import UploadAttachment from 'app/Attachments/components/UploadAttachment';
import UploadButton from 'app/Metadata/components/UploadButton';
import Tip from '../../Layout/Tip';

export class AttachmentsList extends Component {
  getExtension(filename) {
    return filename.substr(filename.lastIndexOf('.') + 1);
  }

  arrangeFiles(files, isDocumentAttachments) {
    if (!files.length) {
      return files;
    }

    const firstFiles = [];
    if (isDocumentAttachments) {
      firstFiles.push(files.shift());
    }

    const sortedFiles = advancedSort(files, { property: 'originalname' });
    return firstFiles.concat(sortedFiles);
  }

  renderMainDocument(mainFile) {
    const { parentId, parentSharedId, readOnly, storeKey } = this.props;
    const forcedReadOnly = readOnly || Boolean(this.props.isTargetDoc);
    if (mainFile) {
      mainFile._id = parentId;
      return (
        <div>
          <h2>
            {t('System', 'Document')}
            <Tip>This is the document that is displayed when visiting the entity. The type of the document affects how is it displayed.</Tip>
          </h2>
          <div className="attachments-list">
            <Attachment
              file={mainFile}
              parentId={parentId}
              readOnly={forcedReadOnly}
              storeKey={storeKey}
              parentSharedId={parentSharedId}
              isSourceDocument
            />
          </div>
        </div>
      );
    }

    if (!forcedReadOnly) {
      return (
        <div className="attachment-buttons">
          <h2>
            {t('System', 'Document')}
            <Tip>This entity has no document yet, uploading a document will change how this entity is displayed.
            The type of the document affects how is it displayed.
            </Tip>
          </h2>
          <UploadButton documentId={parentId} documentSharedId={parentSharedId} storeKey={storeKey}/>
        </div>
      );
    }

    return null;
  }

  render() {
    const { parentId, parentSharedId, isDocumentAttachments, readOnly, storeKey } = this.props;
    const sortedFiles = this.arrangeFiles(this.props.files.toJS(), isDocumentAttachments);
    const forcedReadOnly = readOnly || Boolean(this.props.isTargetDoc);

    let uploadAttachmentButton = null;
    if (!this.props.isTargetDoc) {
      uploadAttachmentButton = (<NeedAuthorization roles={['admin', 'editor']}>
        <div className="attachment-add">
          <UploadAttachment entityId={this.props.parentSharedId} storeKey={storeKey}/>
        </div>
      </NeedAuthorization>);
    }

    const mainFile = isDocumentAttachments ? sortedFiles[0] : null;
    const attachments = sortedFiles.filter((f, index) => mainFile && index !== 0 || !mainFile);
    return (
      <div>
        {this.renderMainDocument(mainFile)}
        <h2>{t('System', 'Attachments')}</h2>
        <div className="attachments-list">
          {attachments.map((file, index) => (
            <Attachment
              key={index}
              file={file}
              parentId={parentId}
              readOnly={forcedReadOnly}
              storeKey={storeKey}
              parentSharedId={parentSharedId}
              isSourceDocument={false}
            />
          ))}
        </div>
        {uploadAttachmentButton}
      </div>
    );
  }
}

AttachmentsList.propTypes = {
  files: PropTypes.object,
  parentId: PropTypes.string,
  model: PropTypes.string,
  parentSharedId: PropTypes.string,
  isDocumentAttachments: PropTypes.bool,
  readOnly: PropTypes.bool,
  isTargetDoc: PropTypes.bool,
  deleteAttachment: PropTypes.func,
  loadForm: PropTypes.func,
  storeKey: PropTypes.string,
  user: PropTypes.object
};

AttachmentsList.contextTypes = {
  confirm: PropTypes.func
};

function mapStateToProps({ user }) {
  return {
    user,
    progress: null,
    model: 'documentViewer.sidepanel.attachment'
  };
}

export default connect(mapStateToProps)(AttachmentsList);
