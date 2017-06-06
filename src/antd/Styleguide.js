import React from 'vendor'
import SavedSearchBar from './SavedSearchBar/SavedSearchBar'
import PreviewModal from './PreviewModal/PreviewModal'

// Inputs
import TreeSelect from './TreeSelect/TreeSelect'
import Input from './Input/Input'
import Select from './Select/Select'
import Textarea from './Textarea/Textarea'
import InputTree from './InputTree/InputTree'
import Tags from './Tags/Tags'
import ImageUpload from './ImageUpload/ImageUpload'

class Styleguide extends React.Component {
  render() {
    return (
      <div>
        <div>
          <TreeSelect />
          <Input />
          <Select />
          <Textare />
          <InputTree />
          <Tags />
          <ImageUpload />
        </div>
        <div>
          <SavedSearchBar />
          <PreviewModal />
        </div>
      </div>
    )
  }
}

export default Styleguide
