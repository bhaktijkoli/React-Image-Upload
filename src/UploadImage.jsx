// Usage
{/* <ImageUpload name="image1" /> */}

import React, { Component } from 'react';
import $ from 'jquery'
import "./UploadImage.css"

class UploadImage extends Component {
  componentDidMount() {
    var id = "#" + this.props.name;
    $(id + ' .image-upload-clear').hide();

    $(id + ' .image-upload-clear').click(function(){
      $(id + ' .image-upload-filename').val("");
      $(id + ' .image-upload-clear').hide();
      $(id + ' .image-upload-input input:file').val("");
      $(id + ' .image-upload-input-title').text("Browse");
    });

    $(id + " .image-upload-input input:file").change(function (){
      var file = this.files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        $(id + " .image-upload-input-title").text("Change");
        $(id + " .image-upload-clear").show();
        $(id + " .image-upload-filename").val(file.name);
      }
      reader.readAsDataURL(file);
    });
  }
  render() {
    return (
      <div id={this.props.name} className="input-group image-upload">
        <input type="text" className="form-control image-upload-filename" readOnly/>
        <span className="input-group-btn">
          <button type="button" className="btn btn-danger image-upload-clear">
            <i className="fa fa-trash-o" aria-hidden="true"></i>&nbsp;Clear
          </button>
          <div className="btn btn-primary image-upload-input">
            <i className="fa fa-folder-open" aria-hidden="true"></i>&nbsp;
            <span className="image-upload-input-title">Browse</span>
            <input id={this.props.name} name={this.props.name} type="file" accept="image/*"/>
          </div>
        </span>
      </div>
    );
  }
}
export default UploadImage;
