import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import _ from 'underscore'
import { Leaders } from '../../../api/leaders/leaders'

export class FileUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: [],
      progress: 0,
      inProgress: false,
      files: [],
      uploaded: null,
      uploaded: false,
    };
  }

  uploadIt = e => {
    e.preventDefault();
    const { files } = this.state;

    _.each(files, file => {
      let uploadInstance;
      if (file) {
            uploadInstance = Leaders.insert(
              {
                file: file,
                meta: {
                  locator: this.props.fileLocator,
                  userId: Meteor.userId(), // Optional, used to check on server for file tampering
                  department: '',
                  age: '',
                  createdAt: new Date(),
                },
                streams: 'dynamic',
                chunkSize: 'dynamic',
                allowWebWorkers: true, // If you see issues with uploads, change self to false
              },
              false,
            );
        }

        this.setState({
          uploading: uploadInstance, // Keep track of self instance to use below
          inProgress: true, // Show the progress bar now
        });

        // These are the event functions on the progress of the upload
        uploadInstance.on('start', function() {
          console.log('Starting');
        });

        uploadInstance.on('end', function(error, fileObj) {
          console.log('ended upload');
        });

        uploadInstance.on('uploaded', (error, fileObj) => {
          if (error) {
            Materialize.toast(error.reason, 5000, 'error-toast');
          } else {
            console.log(fileObj)
            // Remove the filename from the upload box
            this.refs['fileinput'].value = '';

            // Reset our state for the next file
            this.setState({
              uploading: [],
              progress: 0,
              inProgress: false,
              uploaded: true,
            });
          }
        });

        uploadInstance.on('error', function(error, fileObj) {
          Materialize.toast(error, 10000, 'error-toast');
        });

        uploadInstance.on('progress', (progress, fileObj) => {
          // Update our progress bar
          this.setState({
            progress: progress,
          });
        });

        uploadInstance.start(); // Must manually start the upload
      }
    );
  };

  showUploads() {
    if (!_.isEmpty(this.state.uploading)) {
      return (
        <div>
          {this.state.uploading.file.name}

          <div className="progress">
            <div
              style={{ width: this.state.progress + '%' }}
              aria-valuemax="100"
              aria-valuemin="0"
              aria-valuenow={this.state.progress || 0}
              role="progressbar"
              className="determinate"
            >
              <span className="sr-only">{this.state.progress}% Complete (success)</span>
              <span>{this.state.progress}%</span>
            </div>
          </div>
        </div>
      );
    }
  }

  getFiles = ({ target: { files } }) => {
    const all_size = [];
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      all_size.push(file.size);
    }
    const sum = all_size.reduce((a, b) => a + b, 0); // adds all values in the all_sizes array
    this.setState({
      files: files,
      files_size: convertUploadSize(sum),
    });
  };

  render() {
    const { files, progress, files_size, uploaded } = this.state;
    console.log(this.props.link)
    files.length <= 1 ? (name = 'file') : (name = 'files');
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <form onSubmit={this.uploadIt}>
              <div className="file-field input-field">
                <div className="btn" style={{backgroundColor: '#006b76'}}>
                  <span>
                    {files.length >= 1
                      ? `${files.length} ${name} selected (${files_size})`
                      : 'Pick Files'}
                  </span>
                  <input
                    type="file"
                    id="myFile"
                    name="file[]"
                    ref="fileinput"
                    multiple
                    onChange={this.getFiles}
                  />
                </div>

                <div className="file-path-wrapper">
                  <input
                    className="file-path validate"
                    type="text"
                    placeholder="Upload one or more files eg: mp4, pdf, png, mp3, jpg"
                  />
                </div>
              </div>
              <button role="submit" className="btn fa fa-upload" style={{ marginLeft: '42%',backgroundColor: '#006b76' }}>
                {uploaded ? ' Done Uploading' : ' Upload'}
              </button>
            </form>
          </div>
        </div>

        <div className="">
          <div className="col s12">{this.showUploads()}</div>
          <div className="col s6" />
        </div>
      </div>
    );
  }
}
// This is the HOC - included in this file just for convenience, but usually kept
// in a separate file to provide separation of concerns.
//
export default withTracker(props => {
  const filesHandle = Meteor.subscribe('leaders');
  const docsReadyYet = filesHandle.ready();
  return {
    docsReadyYet,
    link: Leaders.find().count() ? Leaders.findOne().link() : []
  };
})(FileUploadComponent);

/**
 *
 * @param {Number} bytes
 * @returns the converted size of the file to upload
 *
 */
export function convertUploadSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) {
    return 'n/a';
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) {
    return `${bytes} ${sizes[i]})`;
  }
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}