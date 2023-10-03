import React from 'react'

const useNewComponent = () => {
    function createComponent(){
    console.log("Creating component")
  }
  return [createComponent]
}

export default useNewComponent;
