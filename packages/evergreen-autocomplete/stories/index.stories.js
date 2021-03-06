import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import starWarsNames from 'starwars-names'
import { TextInput } from 'evergreen-text-input'
import { Autocomplete } from '../src/'

// Generate a big list of items
const items = [
  ...starWarsNames.all,
  ...starWarsNames.all.map(x => `${x} 2`),
  ...starWarsNames.all.map(x => `${x} 3`),
].sort((a, b) => {
  const nameA = a.toUpperCase()
  const nameB = b.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  return 0
})

const handleChange = selectedItem => {
  // eslint-disable-next-line no-console
  console.log(selectedItem)
}

storiesOf('autocomplete', module).add('Autocomplete', () => (
  <Box>
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Autocomplete onChange={handleChange} items={items}>
        {({ key, getInputProps, getRef, inputValue }) => (
          <TextInput
            placeholder="Starwars names"
            key={key}
            value={inputValue}
            innerRef={ref => getRef(ref)}
            {...getInputProps()}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete onChange={handleChange} items={items}>
        {({
          key,
          getInputProps,
          getButtonProps,
          getRef,
          inputValue,
          toggleMenu,
        }) => (
          <Box innerRef={ref => getRef(ref)} display="inline-block" key={key}>
            <TextInput value={inputValue} {...getInputProps()} />
            <button onClick={toggleMenu} {...getButtonProps()}>
              Trigger
            </button>
          </Box>
        )}
      </Autocomplete>
    </Box>
  </Box>
))
