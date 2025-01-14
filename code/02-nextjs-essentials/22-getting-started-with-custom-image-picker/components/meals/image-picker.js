'use client';

import { useRef } from 'react';

import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function handlePickClick() {
    // refs gives click events
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          // here typs hould be button if we don't set type it will by default submit..it would submit the form then
          type="button"
          // this onclick can not happen in server componwt that's why we marked this component as  client component 
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
