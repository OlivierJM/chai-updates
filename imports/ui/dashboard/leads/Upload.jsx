// import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import _ from 'underscore'
import { Leaders, Images } from '../../../api/leaders/leaders'

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
  componentDidMount(){
    console.log(this.props.match.path.includes('post'))
  }

  uploadIt = e => {
    e.preventDefault();
    const { files } = this.state;
    const { match: { path }, title, link, content, type } = this.props

    _.each(files, file => {
      let uploadInstance;
      if (file) {
        if(path.includes('upload')){
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
          if (path.includes('post')) {
            console.log(path)
            uploadInstance = Images.insert(
              {
                file: file,
                meta: {
                  locator: this.props.fileLocator,
                  userId: Meteor.userId(), // Optional, used to check on server for file tampering
                  title,
                  content,
                  link,
                  type,
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
              // uploading: uploadInstance, // Keep track of self instance to use below
              inProgress: true, // Show the progress bar now
            });
            
        // These are the event functions on the progress of the upload
        uploadInstance.on('start', function() {
          console.log('Starting');
        });

        uploadInstance.on('end', function(error, fileObj) {
          console.log('ended upload');
          // call a meteor method

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
      }
    );
  };

  showUploads() {
    if (!_.isEmpty(this.state.uploading)) {
      return (
        <div>
          {this.state.uploading.file.name}

              <div className="progress margin-bottom">
                <div className={`bar w-${this.state.progress}`}></div>
              </div>
              <span className="sr-only">{this.state.progress}% Complete (success)</span>
              <span>{this.state.progress}%</span>
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
    files.length <= 1 ? (name = 'file') : (name = 'files');
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <form onSubmit={this.uploadIt}>
              <div className="file-field input-field">
                <div className="btn">
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
              </div>
              <button role="submit" className="btn fa fa-upload" >
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

export default withRouter(FileUploadComponent)

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
