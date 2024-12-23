"use client";

import React from "react";
import Dropzone from "react-dropzone";

const DropZoneComponent = () => {
  return (
    <Dropzone
      minSize={0}
      maxSize={20971520}
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
      {({
        getRootProps,
        getInputProps,
        fileRejections,
        isDragReject,
        isDragActive,
      }) => {
        return (
          <section className="flex justify-center items-center px-6 py-6 rounded-lg">
            <div
              className="bg-[#192334] rounded-lg text-center text-slate-400 px-40 py-24 w-[100%]"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {!isDragActive && <p>Click here or drop files to upload!</p>}
              {isDragActive && !isDragReject && (
                <p>Drop it here like it&apos;s hot!</p>
              )}
              {isDragReject && <p>File type not accepted, sorry!</p>}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
};

export default DropZoneComponent;
